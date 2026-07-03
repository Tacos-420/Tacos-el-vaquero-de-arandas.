function mostrar(seccion) {
  let secciones = document.querySelectorAll(".seccion");
  secciones.forEach(s => s.classList.remove("activa"));

  document.getElementById(seccion).classList.add("activa");
}

function abrirMapa() {
  window.open("https://maps.app.goo.gl/n1mLgPTy6yUtLxk96", "_blank");
}