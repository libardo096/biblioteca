// js/biblioteca.js

document.addEventListener("DOMContentLoaded", async () => {
  const contenedorLibros = document.getElementById("contenedor-libros");

  try {
    const respuesta = await fetch("http://localhost:3000/api/libros");
    const libros = await respuesta.json();

    contenedorLibros.innerHTML = "";

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
