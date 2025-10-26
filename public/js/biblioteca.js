// js/biblioteca.js

document.addEventListener("DOMContentLoaded", async () => {
  const contenedorLibros = document.getElementById("contenedor-libros");

  try {
    const respuesta = await fetch("http://localhost:3000/api/libros");
    const libros = await respuesta.json();
    mostrarLibros(libros, contenedorLibros);
  } catch (error) {
    console.error("Error al cargar libros:", error);
    contenedorLibros.innerHTML = "<p>Error al cargar los libros.</p>";
  }

  // 🔍 Búsqueda dinámica
  const buscador = document.getElementById("buscador-libros");
  if (!buscador || !contenedorLibros) return;

  buscador.addEventListener("input", async (e) => {
    const texto = e.target.value.trim();
    const archivo = window.location.pathname.split("/").pop();
    const categoria = archivo.replace(".html", "");

    if (texto === "") {
      const endpoint = categoria === "biblioteca"
        ? "http://localhost:3000/api/libros"
        : `http://localhost:3000/api/libros/categoria/${categoria}`;
      const res = await fetch(endpoint);
      const libros = await res.json();
      mostrarLibros(libros, contenedorLibros);
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/buscar?q=${encodeURIComponent(texto)}`);
      const libros = await res.json();
      mostrarLibros(libros, contenedorLibros);
    } catch (err) {
      console.error("Error en la búsqueda:", err);
    }
  });
});

// 🔄 Función para mostrar libros y manejar favoritos
function mostrarLibros(libros, contenedor) {
  contenedor.innerHTML = "";

  if (!libros.length) {
    contenedor.innerHTML = `<p style="color:white;text-align:center;">No se encontraron libros.</p>`;
    return;
  }

  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  libros.forEach(libro => {
    const div = document.createElement("div");
    div.classList.add("libro");

    const esFavorito = favoritos.some(fav => fav.id === libro.id);

    div.innerHTML = `
      <img src="${libro.imagen.startsWith('http') ? libro.imagen : `/${libro.imagen}`}" alt="${libro.titulo}">
      <h4>${libro.titulo}</h4>
      <p>${libro.autor}</p>
      <span class="categoria">${libro.categoria}</span>
      <button class="btn-favorito" data-id="${libro.id}">
        ${esFavorito ? "❤️" : "🤍"}
      </button>
    `;

    contenedor.appendChild(div);
  });

  // ❤️ Manejar favoritos
  document.querySelectorAll(".btn-favorito").forEach(boton => {
    boton.addEventListener("click", (e) => {
      const id = parseInt(e.target.dataset.id);
      const libro = libros.find(l => l.id === id);
      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

      const index = favoritos.findIndex(f => f.id === id);

      if (index === -1) {
        favoritos.push(libro);
        e.target.textContent = "❤️";
      } else {
        favoritos.splice(index, 1);
        e.target.textContent = "🤍";
      }

      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    });
  });
}
