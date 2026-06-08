const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");
const mainContent = document.getElementById("mainContent");
const respuesta = document.getElementById("respuesta");

btnYes.addEventListener("click", () => {
  // Oculta todo el contenido principal
  mainContent.style.display = "none";
  // Muestra la respuesta
  respuesta.style.display = "block";
});

btnNo.addEventListener("mouseover", () => {
  // Hace que el botón NO se mueva
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 100));

  btnNo.style.position = "absolute";
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
});