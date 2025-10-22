// --- Lógica para cambiar nombre y foto ---
const inputFoto = document.getElementById('inputFoto');
const imagenPerfil = document.getElementById('imagenPerfil');
const nombreUsuario = document.getElementById('nombreUsuario');
const guardarPerfil = document.getElementById('guardarPerfil');
const eliminarFoto = document.getElementById('eliminarFoto');

// Elementos en la barra lateral
const nombreBarra = document.getElementById('nombreBarra');
const fotoBarra = document.getElementById('fotoBarra');

// Imagen por defecto
const imagenPorDefecto = 'Img/perfil-defecto.png';

// Cargar datos guardados
window.addEventListener('DOMContentLoaded', () => {
  const nombreGuardado = localStorage.getItem('nombreUsuario');
  const fotoGuardada = localStorage.getItem('fotoPerfil');

  if (nombreGuardado) {
    nombreUsuario.value = nombreGuardado;
    nombreBarra.textContent = nombreGuardado;
  }

  if (fotoGuardada) {
    imagenPerfil.src = fotoGuardada;
    fotoBarra.src = fotoGuardada;
  } else {
    imagenPerfil.src = imagenPorDefecto;
    fotoBarra.src = imagenPorDefecto;
  }
});

// --- Al hacer clic en la imagen se abre el selector ---
imagenPerfil.addEventListener('click', () => {
  inputFoto.click();
});

// Cambiar foto
inputFoto.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      imagenPerfil.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Guardar datos
guardarPerfil.addEventListener('click', () => {
  localStorage.setItem('nombreUsuario', nombreUsuario.value);
  localStorage.setItem('fotoPerfil', imagenPerfil.src);

  nombreBarra.textContent = nombreUsuario.value;
  fotoBarra.src = imagenPerfil.src || imagenPorDefecto;

  alert('Perfil actualizado correctamente');
});

// Eliminar foto y volver a la predeterminada
eliminarFoto.addEventListener('click', () => {
  imagenPerfil.src = imagenPorDefecto;
  fotoBarra.src = imagenPorDefecto;
  localStorage.removeItem('fotoPerfil');
  alert('Foto eliminada. Se ha restaurado la imagen por defecto.');
});
