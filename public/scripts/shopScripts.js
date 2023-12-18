
////Captura de elementos del html
const inputMinPrecio = document.getElementById("minimo")
const inputMaxPrecio = document.getElementById("maximo")
const inputBuscar = document.getElementById("buscar")
const inputCollection = document.getElementById("buscarCollection")
const selectOrden = document.getElementById("orden")
const inputChkNuevos = document.getElementById("inputChkNuevos");

///////// agregar Evento Key Press a busqueda
var input = document.getElementById("buscar");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    abrirShopConFiltros();
  }
});   

///////// agregar Evento Key Press a busqueda COLLECTION
inputCollection.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    abrirShopConFiltros();
  }
});   

/// Agregar OnChange al selector de orden
var select = document.querySelector('#orden')
select.addEventListener('change',function(){
    abrirShopConFiltros();
});

///////// agregar Evento Key Press a Precio Minimo
inputMinPrecio.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    abrirShopConFiltros();
  }
});   

///////// agregar Evento Key Press a Precio Maximo
inputMaxPrecio.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    abrirShopConFiltros();
  }
});   


///Funcion para filtrar
function abrirShopConFiltros(){
  const minPrecio = inputMinPrecio.value;
  const maxPrecio = inputMaxPrecio.value;
  const itemBuscar = inputBuscar.value;
  const collectionBuscar = inputCollection.value;
  const opcionOrden = selectOrden.value;
  const chkNuevos = inputChkNuevos.checked;
  
  const url = `/shop/filtros?buscar=${itemBuscar}&collection=${collectionBuscar}&precioMinimo=${minPrecio}&precioMaximo=${maxPrecio}&ordenarPor=${opcionOrden}&chkNuevos=${chkNuevos}`;

  window.location.href = url;

}