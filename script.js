document.addEventListener("DOMContentLoaded", () => {

  // ==========================
  // BOTONES DE WHATSAPP
  // ==========================
  document.querySelectorAll(".btnPedido").forEach(boton => {
    boton.addEventListener("click", () => {
      const numero = "5491159521772"; // tu número
      const servicio = boton.getAttribute("data-servicio") || "servicio";
      const mensaje = `Hola! Como estas?, me gustaria pedirte info sobre el ${servicio}`;
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");
    });
  });

  // ==========================
  // RECUADRO DE FOTOS CON CONTRASEÑA
  // ==========================
  const btnVerFotos = document.getElementById("btnVerFotos");
  const inputPassword = document.getElementById("passwordInput");
  const mensaje = document.getElementById("mensaje");

  if(btnVerFotos && inputPassword && mensaje) {
    btnVerFotos.addEventListener("click", () => {
      // Cambia "EVENTO2025" por tu contraseña real
      if(inputPassword.value === "EVENTO2025") {
        // Redirige al link de Drive
        window.location.href = "https://drive.google.com/drive/folders/1p67gQRxl5doOH_HVlhqHD030oDCY9ln-?usp=drive_link";
      } else {
        mensaje.textContent = "Contraseña incorrecta. Intenta de nuevo.";
      }
    });

    // Borra el mensaje de error al escribir
    inputPassword.addEventListener("input", () => {
      mensaje.textContent = "";
    });
  }

});