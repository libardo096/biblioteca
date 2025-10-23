document.addEventListener("DOMContentLoaded", () => {
  const inputFoto = document.getElementById("inputFoto");
  const imagenPerfil = document.getElementById("imagenPerfil");
  const eliminarFoto = document.getElementById("eliminarFoto");
  const nombreUsuario = document.getElementById("nombreUsuario");
  const guardarPerfil = document.getElementById("guardarPerfil");

  const IMAGEN_POR_DEFECTO = "Img/perfil-defecto.png";

  // Cargar datos guardados (si existen)
  const datosGuardados = JSON.parse(localStorage.getItem("perfilUsuario"));
  if (datosGuardados) {
    imagenPerfil.src = datosGuardados.imagen || IMAGEN_POR_DEFECTO;
    nombreUsuario.value = datosGuardados.nombre || "";
  } else {
    imagenPerfil.src = IMAGEN_POR_DEFECTO;
  }

  // Cambiar foto
  imagenPerfil.addEventListener("click", () => inputFoto.click());
  inputFoto.addEventListener("change", () => {
    const file = inputFoto.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (imagenPerfil.src = reader.result);
      reader.readAsDataURL(file);
    }
  });

  // Eliminar foto → volver a la imagen por defecto
  eliminarFoto.addEventListener("click", () => {
    imagenPerfil.src = IMAGEN_POR_DEFECTO;
    inputFoto.value = "";
  });

  // Guardar cambios
guardarPerfil.addEventListener("click", () => {
  const perfil = {
    nombre: nombreUsuario.value,
    imagen: imagenPerfil.src === "" ? IMAGEN_POR_DEFECTO : imagenPerfil.src
  };

  // Guardar en localStorage
  localStorage.setItem("perfilUsuario", JSON.stringify(perfil));

  // ✅ Actualizar la barra lateral inmediatamente (si existe en la misma página)
  const imgBarra = document.querySelector(".perfil-de-usuario img");
  const nombreBarra = document.querySelector(".detalles-de-usuario h3");

  if (imgBarra) imgBarra.src = perfil.imagen || IMAGEN_POR_DEFECTO;
  if (nombreBarra) nombreBarra.textContent = perfil.nombre || "Usuario";

  alert("Perfil actualizado correctamente ✅");
});
});
