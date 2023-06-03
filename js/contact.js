class Cliente {
  constructor(nombre, telefono, direccion) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
  }
}

let boton = document.getElementById("enviarInfo");
boton.addEventListener("click", cargarCliente);

// capturar elementos
function cargarCliente() {
  let nombre = document.getElementById("name").value;
  let telefono = document.getElementById("phone").value;
  let direccion = document.getElementById("adress").value;
  let cliente1 = new Cliente(nombre, telefono, direccion);
  console.log(cliente1);
  mostrarCliente(cliente1);
}
//eliminar elementos
function mostrarCliente(cliente) {
  let formulario = document.getElementById("customer");
  formulario.innerHTML = "";
  //agregar elementos
  let nuevoContenido = document.createElement("div");
  nuevoContenido.innerHTML = `<h1> Gracias  ${cliente.nombre} ! sus datos fueron registrados y en breve
    recibira su pedido en ${cliente.direccion}</h1>`;

  nuevoContenido.className = "info-cliente";
  formulario.appendChild(nuevoContenido);
}
