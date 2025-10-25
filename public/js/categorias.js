// js/categorias.js

document.addEventListener("DOMContentLoaded", async () => {
  const contenedorLibros = document.getElementById("contenedor-libros");

  // Detectar la categoría según el archivo actual
  const archivo = window.location.pathname.split("/").pop(); // ej: "literatura.html"
  const categoria = archivo.replace(".html", ""); // -> "literatura"

  try {
    const respuesta = await fetch(`http://localhost:3000/api/libros/categoria/${categoria}`);
    const libros = await respuesta.json();

    contenedorLibros.innerHTML = "";

    if (libros.length === 0) {
      contenedorLibros.innerHTML = `<p style="color:white;text-align:center;">No hay libros en esta categoría.</p>`;
      return;
    }

    libros.forEach(libro => {
      const div = document.createElement("div");
      div.classList.add("libro");
      div.innerHTML = `
        <img src="${libro.imagen}" alt="${libro.titulo}">
        <h4>${libro.titulo}</h4>
        <p>${libro.autor}</p>
        <span class="categoria">${libro.categoria}</span>
      `;
      contenedorLibros.appendChild(div);
    });
  } catch (error) {
    console.error("Error al cargar libros:", error);
    contenedorLibros.innerHTML = "<p>Error al cargar los libros.</p>";
  }
});
