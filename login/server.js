// 📚 server.js — versión adaptada

const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Servir la carpeta "public" correctamente
app.use(express.static(path.join(__dirname, "..", "public")));

// ✅ Página principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});


// ---------------------------------------------------------
// 🔹 CONEXIÓN 1: base de datos de login (usuarios)
// ---------------------------------------------------------
const dbLogin = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "login_biblioteca"
});

dbLogin.connect((err) => {
  if (err) console.error("❌ Error al conectar con login_biblioteca:", err);
  else console.log("✅ Conectado a MySQL (login_biblioteca)");
});

// Registro de usuario
app.post("/registro", (req, res) => {
  const { usuario, contraseña } = req.body;
  const sql = "INSERT INTO usuarios (usuario, contraseña) VALUES (?, ?)";
  dbLogin.query(sql, [usuario, contraseña], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error en el registro");
    }
    res.redirect("/index.html");
  });
});

// Inicio de sesión
app.post("/login", (req, res) => {
  const { usuario, contraseña } = req.body;
  const sql = "SELECT * FROM usuarios WHERE usuario = ? AND contraseña = ?";
  dbLogin.query(sql, [usuario, contraseña], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error en el servidor");
    }
    if (results.length > 0) {
      res.redirect("/bienvenido.html");
    } else {
      res.send("<h2>Usuario o contraseña incorrectos</h2>");
    }
  });
});


// ---------------------------------------------------------
// 🔹 CONEXIÓN 2: base de datos de la biblioteca (libros)
// ---------------------------------------------------------
const dbLibros = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "biblioteca"
});

dbLibros.connect((err) => {
  if (err) console.error("❌ Error al conectar con biblioteca:", err);
  else console.log("✅ Conectado a MySQL (biblioteca)");
});

// Endpoint para obtener los libros
app.get("/api/libros", (req, res) => {
  const sql = "SELECT * FROM libros";
  dbLibros.query(sql, (err, resultados) => {
    if (err) {
      console.error("Error al obtener libros:", err);
      res.status(500).json({ error: "Error al obtener libros" });
    } else {
      res.json(resultados);
    }
  });
});


// ---------------------------------------------------------
// 🔹 Servidor
// ---------------------------------------------------------
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
