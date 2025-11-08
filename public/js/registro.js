document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const usuario = form.usuario.value.trim();
    const contraseña = form.contraseña.value.trim();

    if (!usuario || !contraseña) {
      alert("Por favor completa todos los campos");
      return;
    }

    try {
      const res = await fetch("/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, contraseña }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
        window.location.href = "login.html"; // Redirige al login
      } else {
        alert(data.error || "No se pudo registrar el usuario");
      }
    } catch (err) {
      console.error("Error al registrar usuario:", err);
      alert("Error de conexión con el servidor");
    }
  });
});
