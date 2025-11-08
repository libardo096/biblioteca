document.addEventListener("DOMContentLoaded", () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const btnLogin = document.getElementById("btn-login");
  const btnRegistro = document.getElementById("btn-registro");
  const usuarioBienvenido = document.getElementById("usuario-bienvenido");
  const btnCerrarSesion = document.getElementById("btn-cerrar-sesion");

  if (usuario) {
    // 🔹 Mostrar nombre de usuario
    if (usuarioBienvenido) usuarioBienvenido.textContent = `👋 Bienvenido, ${usuario.nombre}`;
    // 🔹 Ocultar botones de login y registro
    if (btnLogin) btnLogin.style.display = "none";
    if (btnRegistro) btnRegistro.style.display = "none";
    // 🔹 Mostrar botón de cerrar sesión
    if (btnCerrarSesion) btnCerrarSesion.style.display = "inline-block";
  }

  // 🧹 Cerrar sesión
  if (btnCerrarSesion) {
    btnCerrarSesion.addEventListener("click", () => {
      localStorage.removeItem("usuario");
      window.location.href = "login.html";
    });
  }
});


// js/biblioteca.js

document.addEventListener("DOMContentLoaded", async () => {
  const contenedorLibros = document.getElementById("contenedor-libros");

    // Si estamos en favoritos.html, solo ejecutar la lógica de favoritos
  const archivo = window.location.pathname.split("/").pop();
  if (archivo === "favoritos.html") {
    manejarFavoritos(); // ← función que veremos abajo
    return; // Detiene el resto del código
  }


  try {
    const respuesta = await fetch("http://localhost:3000/api/libros");
    const libros = await respuesta.json();
    mostrarLibros(libros, contenedorLibros);
  } catch (error) {
    console.error("Error al cargar libros:", error);
    contenedorLibros.innerHTML = "<p>Error al cargar los libros.</p>";
  }

  //  Búsqueda dinámica
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

//  Función para mostrar libros y manejar favoritos
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

  // Manejar favoritos
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




// ===================================================== //
//    FAVORITOS.HTML — Mostrar y buscar libros guardados //
// ===================================================== //
function manejarFavoritos() {
  const contenedor = document.getElementById("contenedor-libros");
  const buscador = document.getElementById("buscador-libros");
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  function renderFavoritos(libros) {
    contenedor.innerHTML = "";

    if (!libros.length) {
      contenedor.innerHTML = `<p style="color:white;text-align:center;">No se encontraron libros.</p>`;
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
        <button class="btn-quitar" data-id="${libro.id}">Quitar libro</button>
      `;
      contenedor.appendChild(div);
    });

    document.querySelectorAll(".btn-quitar").forEach(btn => {
      btn.addEventListener("click", e => {
        const id = parseInt(e.target.dataset.id);
        favoritos = favoritos.filter(f => f.id !== id);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        renderFavoritos(favoritos);
      });
    });
  }

  // Mostrar todos los favoritos al entrar
  renderFavoritos(favoritos);

  // Búsqueda dentro de los favoritos
  if (buscador) {
    buscador.addEventListener("input", e => {
      const texto = e.target.value.toLowerCase();
      const filtrados = favoritos.filter(l =>
        l.titulo.toLowerCase().includes(texto) ||
        l.autor.toLowerCase().includes(texto) ||
        l.categoria.toLowerCase().includes(texto)
      );
      renderFavoritos(filtrados);
    });
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const btnLogin = document.getElementById("btn-login");
  const btnRegistro = document.getElementById("btn-registro");

  if (usuario) {
    if (btnLogin) btnLogin.style.display = "none";
    if (btnRegistro) btnRegistro.style.display = "none";
  }
});
