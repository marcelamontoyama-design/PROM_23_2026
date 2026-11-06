// Número de WhatsApp al que se enviará la confirmación (formato internacional sin signos)
const WHATSAPP_NUMBER = "573112177121";

// Mensaje predeterminado de confirmación
const rawMessage = `¡Hola! Quiero confirmar mi asistencia a la Graduación de High School (Senior Class 23-2026) en la Hacienda Riojana el 28 de noviembre. 🎉🎓✨`;

// Codificación del mensaje para formato URL
const encodedMessage = encodeURIComponent(rawMessage);

// Configuración del botón de WhatsApp
document.addEventListener("DOMContentLoaded", () => {
  const whatsappBtn = document.getElementById("whatsappBtn");
  if (whatsappBtn) {
    whatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  }
});
