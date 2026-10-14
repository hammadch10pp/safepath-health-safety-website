
function WhatsAppButton() {
  const phoneNumber = "+923266396757";

  const message =
    "Hello SafePath! I would like to know more about your NEBOSH and health and safety courses. How can you help me?";

  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a
      className="whatsapp-float"
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SafePath on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.8 11.8 0 0 0 12.13 0C5.6 0 .28 5.32.28 11.85c0 2.09.55 4.13 1.6 5.93L.18 24l6.38-1.67a11.85 11.85 0 0 0 5.57 1.42h.01c6.53 0 11.85-5.32 11.85-11.85 0-3.17-1.23-6.15-3.47-8.42ZM12.14 21.7a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.79.99 1.01-3.7-.24-.38a9.83 9.83 0 0 1-1.51-5.18c0-5.46 4.45-9.91 9.92-9.91a9.84 9.84 0 0 1 7.01 2.91 9.84 9.84 0 0 1 2.9 7.02c0 5.46-4.45 9.91-9.92 9.91Zm5.44-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}

export default WhatsAppButton;
