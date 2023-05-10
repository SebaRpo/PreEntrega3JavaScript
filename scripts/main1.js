// Este codigo son los objetos que se van a agregar al carrito dentro de un arreglo
const vproductos = [
    //Vestidos de banio
    {
      id: 1,
      nombre: "VestidodebañoBodiesolyluna",
      imagen:"../img/vestido1.png",
      categoria: "vestido_de_banio",
      precio: 35000
    },
    {
      id: 2,
      nombre: "VestidodebañoBodiePalmas",
      imagen:"../img/vestido2.png",
      categoria: "vestido_de_banio",
      precio: 35000
    },
    {
      id: 3,
      nombre: "VestidodebañoBodieJúpiter",
      imagen:"../img/vestido3.png",
      categoria: "vestido_de_banio",
      precio: 35000
    },
    {
      id: 4,
      nombre: "VestidodebañoBodieRojoFuego",
      imagen:"../img/vestido4.png",
      categoria: "vestido_de_banio",
      precio: 35000
    },
    {
      id: 5,
      nombre:"vestidodebañoBikiniGalaxia",
      imagen:"../img/vestido5.png",
      categoria: "vestido_de_banio",
      precio: 35000
    },
    {
      id: 6,
      nombre: "VestidodebañoBikiniReversible",
      imagen:"../img/vestido6.png",
      categoria: "vestido_de_banio",
      precio: 35000,
      cantidad: 0
    }
  
];
  
  
const cproductos = document.querySelector ("#cproductos");
const  botonesAgregar = document.getElementsByClassName ("botonAgregar");
  
 // Este codigo crea los productos en el html  
function cargarProductos(){
  
    vproductos.forEach(vproductos => {
      const div = document.createElement ("div");
      div.classList.add("productos__producto");
      div.innerHTML = `
        <img src="${vproductos.imagen}" alt="${vproductos.nombre}">
        <div class="productos__informacion">
            <span>${vproductos.nombre}</span>
            <span class="precio">Precio: ${vproductos.precio}</span>
            <button type="button" class="botonAgregar btn btn-outline-secondary" id="${vproductos.id}">Agregar al carro</button>
        </div>
      `;
      
      cproductos.append(div);
  });
};
// Este codigo llama a la funcion 
cargarProductos();



// Este codigo es para Agregar el evento de clic a cada botón
for (var i = 0; i < botonesAgregar.length; i++) {
  // Utilizar una función de cierre para capturar el valor del objetoId
  (function(objetoId) {
    botonesAgregar[i].addEventListener("click", function() {
      // Obtener el elemento de cantidad correspondiente al objeto
      var cantidadElemento = document.getElementById("cantidad" + objetoId);
      
      // Obtener la cantidad actual del objeto y aumentarla en 1
      var cantidadActual = parseInt(cantidadElemento.innerHTML);
      cantidadActual++;
      
      // Actualizar el elemento de cantidad con la nueva cantidad
      cantidadElemento.innerHTML = cantidadActual;
      
      // Buscar el objeto correspondiente en vproductos
      var objetoEncontrado = vproductos.find(function(objeto) {
        return objeto.id === parseInt(objetoId);
      });
      
      // Verificar si se encontró el objeto
      if (objetoEncontrado) {
        // Actualizar la propiedad cantidad del objeto
        objetoEncontrado.cantidad = cantidadActual;
      } else {
        console.log("No se encontró el objeto correspondiente en vproductos.");
      }
    });
  })(botonesAgregar[i].id); // Pasar el valor del objetoId como argumento de la función de cierre
}





