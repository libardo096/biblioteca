// // 📚 server.js — versión adaptada

// const express = require("express");
// const mysql = require("mysql2");
// const bodyParser = require("body-parser");
// const path = require("path");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

// // ✅ Servir la carpeta "public" correctamente
// app.use(express.static(path.join(__dirname, "..", "public")));

// // ✅ Página principal
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public", "index.html"));
// });


// // ---------------------------------------------------------
// // 🔹 CONEXIÓN 1: base de datos de login (usuarios)
// // ---------------------------------------------------------
// const dbLogin = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "login_biblioteca"
// });

// dbLogin.connect((err) => {
//   if (err) console.error("❌ Error al conectar con login_biblioteca:", err);
//   else console.log("✅ Conectado a MySQL (login_biblioteca)");
// });

// // Registro de usuario
// app.post("/registro", (req, res) => {
//   const { usuario, contraseña } = req.body;
//   const sql = "INSERT INTO usuarios (usuario, contraseña) VALUES (?, ?)";
//   dbLogin.query(sql, [usuario, contraseña], (err, result) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send("Error en el registro");
//     }
//     res.redirect("/index.html");
//   });
// });

// // Inicio de sesión
// app.post("/login", (req, res) => {
//   const { usuario, contraseña } = req.body;
//   const sql = "SELECT * FROM usuarios WHERE usuario = ? AND contraseña = ?";
//   dbLogin.query(sql, [usuario, contraseña], (err, results) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send("Error en el servidor");
//     }
//     if (results.length > 0) {
//       res.redirect("/bienvenido.html");
//     } else {
//       res.send("<h2>Usuario o contraseña incorrectos</h2>");
//     }
//   });
// });


// // ---------------------------------------------------------
// // 🔹 CONEXIÓN 2: base de datos de la biblioteca (libros)
// // ---------------------------------------------------------
// const dbLibros = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "biblioteca"
// });

// dbLibros.connect((err) => {
//   if (err) console.error("❌ Error al conectar con biblioteca:", err);
//   else console.log("✅ Conectado a MySQL (biblioteca)");
// });

// // Endpoint para obtener los libros
// app.get("/api/libros", (req, res) => {
//   const sql = "SELECT * FROM libros";
//   dbLibros.query(sql, (err, resultados) => {
//     if (err) {
//       console.error("Error al obtener libros:", err);
//       res.status(500).json({ error: "Error al obtener libros" });
//     } else {
//       res.json(resultados);
//     }
//   });
// });


// // Buscar libros por texto en el título o autor
// app.get("/api/buscar", (req, res) => {
//   const query = req.query.q;
//   if (!query) return res.status(400).json({ error: "Falta el parámetro 'q'" });

//   const sql = "SELECT * FROM libros WHERE titulo LIKE ? OR autor LIKE ?";
//   const searchTerm = `%${query}%`;
//   dbLibros.query(sql, [searchTerm, searchTerm], (err, resultados) => {
//     if (err) {
//       console.error("Error al buscar libros:", err);
//       res.status(500).json({ error: "Error en la búsqueda" });
//     } else {
//       res.json(resultados);
//     }
//   });
// });

// // Obtener libros por categoría
// app.get("/api/libros/categoria/:categoria", (req, res) => {
//   const categoria = req.params.categoria;
//   const sql = "SELECT * FROM libros WHERE categoria = ?";
//   dbLibros.query(sql, [categoria], (err, resultados) => {
//     if (err) {
//       console.error("Error al obtener libros por categoría:", err);
//       res.status(500).json({ error: "Error al obtener libros por categoría" });
//     } else {
//       res.json(resultados);
//     }
//   });
// });


// // ---------------------------------------------------------
// // 🔹 Servidor
// // ---------------------------------------------------------
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
// });




const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, "../public")));

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",       // ⚠️ Cambia esto según tu usuario MySQL
  password: "",        // ⚠️ Coloca tu contraseña aquí si tienes
  database: "biblioteca"
});

db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
  } else {
    console.log("✅ Conexión exitosa a la base de datos MySQL");
  }
});


// 📚 Ruta: obtener libros por categoría
app.get("/api/libros/categoria/:categoria", (req, res) => {
  const { categoria } = req.params;
  const sql = "SELECT * FROM libros WHERE categoria = ?";
  db.query(sql, [categoria], (err, result) => {
    if (err) {
      console.error("Error al obtener libros por categoría:", err);
      res.status(500).json({ error: "Error al obtener libros por categoría" });
    } else {
      res.json(result);
    }
  });
});

// 🔍 Ruta: buscar libros por nombre o autor
app.get("/api/buscar", (req, res) => {
  const q = req.query.q;
  if (!q) return res.json([]);

  const sql = "SELECT * FROM libros WHERE titulo LIKE ? OR autor LIKE ?";
  db.query(sql, [`%${q}%`, `%${q}%`], (err, result) => {
    if (err) {
      console.error("Error al buscar libros:", err);
      res.status(500).json({ error: "Error al buscar libros" });
    } else {
      res.json(result);
    }
  });
});

// 📚 Ruta: obtener todos los libros
app.get("/api/libros", (req, res) => {
  const sql = "SELECT * FROM libros";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error al obtener libros:", err);
      res.status(500).json({ error: "Error al obtener libros" });
    } else {
      res.json(result);
    }
  });
});



// Servir el frontend (biblioteca.html por defecto)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/biblioteca.html"));
});

app.use((req, res) => {
  res.status(404).send("Página no encontrada");
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
