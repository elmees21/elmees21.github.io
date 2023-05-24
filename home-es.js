function openContactWindow() {
  // Muestra un mensaje de confirmación antes de abrir la ventana
  var confirmMessage = "Esta dirección de correo electronico es unicamente para contacto personal o comercial. Cualquier tipo de publicidad o correo basura se añadirá en la lista negra y no se podrá comunicar nunca más. No se tolerará ningúna publicidad. ¿Está de acuerdo?";
  if (confirm(confirmMessage)) {
    window.open("https://example.com/contacto.html");
  }
}

window.addEventListener("beforeunload", function() {
  // Abre un enlace a Google al cerrar la ventana
  window.location.href = "https://www.google.com";
});