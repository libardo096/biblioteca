document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (!form) return; // seguridad

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const datos = {
      usuario: form.usuario.value.trim(),
      contraseña: form.contraseña.value.trim(),
    };

    if (!datos.usuario || !datos.contraseña) {
      alert("Por favor completa todos los campos");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // ✅ Guardar la sesión
        localStorage.setItem(
          "usuario",
          JSON.stringify({ nombre: data.usuario })
        );

        // ✅ Redirigir a la página principal
        window.location.href = "biblioteca.html";
      } else {
        alert(data.error || "Usuario o contraseña incorrectos");
      }
    } catch (err) {
      console.error("Error al conectar con el servidor:", err);
      alert("No se pudo conectar con el servidor");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const datos = {
      usuario: form.usuario.value,
      contraseña: form.contraseña.value,
    };

    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Guardar sesión del usuario
        localStorage.setItem("usuario", JSON.stringify({ nombre: data.usuario }));

        // Redirigir a la biblioteca principal
        window.location.href = "biblioteca.html";
      } else {
        alert(data.error || "Error al iniciar sesión");
      }
    } catch (err) {
      console.error("Error en la solicitud:", err);
      alert("Error al conectar con el servidor");
    }
  });
});


