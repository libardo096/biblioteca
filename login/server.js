const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Sirve correctamente la carpeta "public"
app.use(express.static(path.join(__dirname, "..", "public")));

// ✅ Ruta raíz (http://localhost:3000)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});



// Conexión a MySQL
const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",      // tu usuario MySQL
  password: "",      // tu contraseña MySQL
  database: "login_biblioteca" // tu base de datos
});

conexion.connect((err) => {
  if (err) throw err;
  console.log("✅ Conectado a MySQL");
});

// Registro de usuario
app.post("/registro", (req, res) => {
  const { usuario, contraseña } = req.body;
  const sql = "INSERT INTO usuarios (usuario, contraseña) VALUES (?, ?)";
  conexion.query(sql, [usuario, contraseña], (err, result) => {
    if (err) throw err;
    console.log("Usuario registrado:", result);
    res.redirect("/index.html");
  });
});

// Inicio de sesión
app.post("/login", (req, res) => {
  const { usuario, contraseña } = req.body;
  const sql = "SELECT * FROM usuarios WHERE usuario = ? AND contraseña = ?";
  conexion.query(sql, [usuario, contraseña], (err, results) => {
    if (err) throw err;
    console.log("Resultados:", results);
    if (results.length > 0) {
      res.redirect("/bienvenido.html");
    } else {
      res.send("<h2>Usuario o contraseña incorrectos</h2>");
    }
  });
});

// Servidor
app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
