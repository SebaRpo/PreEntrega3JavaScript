/* 
for (let i = 0; i < vestidosDeBanio.length; i++) {
  opciones += `${vestidosDeBanio[i].id}. ${vestidosDeBanio[i].nombre}\n`;
}
let seleccion = prompt(`Seleccione un producto:\n${opciones}`);

// Buscamos el producto seleccionado

let producto = vestidosDeBanio.find(vestido => vestido.id == seleccion);

if (!producto) {
  alert("Producto no válido");
} else {
  // Pedimos al usuario la cantidad de productos a comprar
  let cantidad = prompt(`Ingrese la cantidad de "${producto.nombre}" a comprar:`);
  cantidad = parseInt(cantidad);

  // Validamos la cantidad
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Cantidad no válida");
  } else {
    // Calculamos el total con descuento, IVA y envío gratis
    let total = producto.precio * cantidad;
    total = getTotalConDescuento(total, "sí");
    let iva = getValorIVA(total);
    let envio = getEnvioGratis(cantidad);
    total += iva + envio;

    // Mostramos el resultado en un alert
    alert(`Compra realizada exitosamente:\n${producto.nombre} x ${cantidad}\nTotal a pagar: $${total}. El IVA es: ${iva}`);
  }
}
 */

let userInputNumber = 0;


           

cargarProductos();

/* botonAgregar.forEach(boton => {
  boton.addEventListener("click", (agregarCarrito));
});


const productosCarrito = [];
function agregarCarrito(e){

  const idBoton = parseInt(e.currentTarget.id);
  const productoAgregado = vproductos.find((producto) => producto.id === idBoton);


  productosCarrito.push(productoAgregado);
  
};

 */

  



/* const select = document.getElementById(`selectTalla${idBoton}`);
const tallaSeleccionada = select.value;
productoAgregado.talla = tallaSeleccionada; */