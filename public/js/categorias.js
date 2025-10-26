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

// 🔍 Función de búsqueda dinámica
document.getElementById("buscador-libros")?.addEventListener("input", async (e) => {
  const texto = e.target.value.trim();
  const contenedorLibros = document.getElementById("contenedor-libros");

  if (texto === "") {
    // Si el campo está vacío, recargamos los libros de la categoría original
    const archivo = window.location.pathname.split("/").pop();
    const categoria = archivo.replace(".html", "");
    const endpoint = categoria === "biblioteca" ? "/api/libros" : `/api/libros/categoria/${categoria}`;
    const res = await fetch(`http://localhost:3000${endpoint}`);
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


// 🔍 Función de búsqueda dinámica
document.addEventListener("DOMContentLoaded", () => {
  const buscador = document.getElementById("buscador-libros");
  const contenedorLibros = document.getElementById("contenedor-libros");

  if (!buscador || !contenedorLibros) return; // seguridad

  buscador.addEventListener("input", async (e) => {
    const texto = e.target.value.trim();

    // Determinar la categoría actual según el archivo
    const archivo = window.location.pathname.split("/").pop();
    const categoria = archivo.replace(".html", "");

    if (texto === "") {
      // Si el campo está vacío, recargamos la lista original
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

// 🔄 Función reutilizable para mostrar libros
function mostrarLibros(libros, contenedor) {
  contenedor.innerHTML = "";

  if (!libros.length) {
    contenedor.innerHTML = `<p style="color:white;text-align:center;">No se encontraron libros.</p>`;
    return;
  }

  // Obtener lista de favoritos guardados
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  libros.forEach(libro => {
    const div = document.createElement("div");
    div.classList.add("libro");

    // Verificar si el libro ya está en favoritos
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

  // Escuchar clics en los botones de favorito
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

