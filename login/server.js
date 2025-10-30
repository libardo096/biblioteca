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


// Ruta: iniciar sesión
app.post("/login", (req, res) => {
  const { usuario, contraseña } = req.body;

  if (!usuario || !contraseña) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  const sql = "SELECT * FROM usuarios WHERE usuario = ? AND contraseña = ?";
  db.query(sql, [usuario, contraseña], (err, result) => {
    if (err) {
      console.error("Error al verificar usuario:", err);
      return res.status(500).json({ error: "Error interno del servidor" });
    }

    if (result.length > 0) {
      const user = result[0];
      res.json({ success: true, usuario: user.usuario });
    } else {
      res.status(401).json({ error: "Usuario o contraseña incorrectos" });
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
