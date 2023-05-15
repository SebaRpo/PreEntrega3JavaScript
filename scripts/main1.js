// Objetos que se van a agregar al carrito dentro de un arreglo
const productos = [
    //Vestidos de banio
    {
      id: 1,
      nombre: "VestidodebañoBodiesolyluna",
      imagen:"img/vestido1.png",
      categoria: "vestido_de_banio",
      precio: 35000,
      cantidad: 0
    },
    {
      id: 2,
      nombre: "VestidodebañoBodiePalmas",
      imagen:"img/vestido2.png",
      categoria: "vestido_de_banio",
      precio: 35000,
      cantidad: 0
    },
    {
      id: 3,
      nombre: "VestidodebañoBodieJúpiter",
      imagen:"img/vestido3.png",
      categoria: "vestido_de_banio",
      precio: 35000,
      cantidad: 0
    },
    {
      id: 4,
      nombre: "VestidodebañoBodieRojoFuego",
      imagen:"img/vestido4.png",
      categoria: "vestido_de_banio",
      precio: 35000,
      cantidad: 0
    },
    {
      id: 5,
      nombre:"vestidodebañoBikiniGalaxia",
      imagen:"img/vestido5.png",
      categoria: "vestido_de_banio",
      precio: 35000,
      cantidad: 0
    },
    {
      id: 6,
      nombre: "VestidodebañoBikiniReversible",
      imagen:"img/vestido6.png",
      categoria: "vestido_de_banio",
      precio: 35000,
      cantidad: 0
    }
  
];

  
const cproductos = document.querySelector (".cproductos");
const botonesAgregar = document.getElementsByClassName ("botonAgregar");
const precioTotal = document.querySelector ("#precioTotal");
let carrito = [];
//Carrito de compras lateral
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

 
 // Este codigo crea los productos en el html  
function cargarProductos(){
 
    productos.forEach(productos => {
      const div = document.createElement ("div");
      div.classList.add("productos__producto");
      div.innerHTML += `
        <img src="${productos.imagen}" alt="${productos.nombre}">
        <div class="productos__informacion">
            <span>${productos.nombre}</span>
            <span class="precio">Precio: ${productos.precio} $</span>
            <button onclick="agregarAlCarro(${productos.id})" class="botonAgregar btn btn-outline-secondary">Agregar al carro</button>
        </div>
      `;
      
      cproductos.append(div);
  });
};
// Este codigo llama a la funcion 
cargarProductos();

guardarCarrito();

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  mostrarCarro();
});

function agregarAlCarro(id) {
  const existe = carrito.some((item) => item.id === id);
  if (existe) {
    const items = carrito.map((item) => {
      if (item.id === id) {
        item.cantidad++;
      }
      return item;
    });
    carrito = [...items];
  
  }else { 
    const item = productos.find((item) => item.id === id);
    carrito.push({ ...item, cantidad: 1 });
  };
  
/*   const item = productos.find((item) => item.id === id);
  carrito.push(item);  */
  mostrarCarro();
};

const mostrarCarro = () => {   
  const modal = document.querySelector(".carrito");
    modal.innerHTML = "";
    carrito.forEach((item) => {
    const {id, nombre, imagen, categoria, precio, cantidad}= item;
    
    modal.innerHTML += `
        <div class="caja-carrito">
        <img src="${item.imagen}" alt="${item.nombre}" class="cart-img img-fluid">
        <div class="detalleCaja">
            <span class="carroTituloProducto">${item.nombre}</span>
            <span class="carroPrecio">${item.precio} $</span>
            <span class="cantidadCarrito">Cantidad: ${item.cantidad}</span>
            </div>
            <!-- Eliminar del carro -->
            <i onclick="eliminarDelCarro(${id})" class="fa-solid fa-trash cart-remove"></i>
        </div>
        </div>
    `;
  
  });

  //Contador de productos
  contadorCarrito = carrito.length;
  document.getElementById("contadorCarrito").innerHTML = contadorCarrito;
  //Elementos guardados en el carrito
  console.log(contadorCarrito);
  guardarCarrito();
  //Calculo del precio total 
  precioTotal.innerText  = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0) + " $";//'acc' es el acumulador y 'item' es cada elemento del array
  
};


//Eliminar del carro

function eliminarDelCarro(id) {
  const productId = id;
  carrito = carrito.filter((product) => product.id !== productId);
  mostrarCarro();
  guardarCarrito();
};
//Almacenaje de los productos en el LocalStorage
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};



//Abrir carrito de compras
cartIcon.onclick = () => { 
  cart.classList.add("active");

};


//Cerrar carrito de compras
closeCart.onclick = () => { 
  cart.classList.remove("active");
};

function procesarCompra() {

  const carritoGuardado = localStorage.getItem('carrito');
  const listacompra = document.querySelector(".listaCompra");

    if (carritoGuardado) {
      const carrito = JSON.parse(carritoGuardado);

      const listacompra = document.querySelector(".listaCompra");
      carrito.forEach((item) => {
        const { id, nombre, imagen, categoria, precio, cantidad } = item;
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><a href=""><i class="far fa-times-circle"></i></a></td>
          <td><img src="${imagen}" alt=""></td>
          <td>${nombre}</td>
          <td>${precio}</td>
          <td>${cantidad}</td>
          <td>${cantidad * precio} $</td>
        `;
        listacompra.appendChild(tr);
      });
    }
}

mostrarCarritoDesdeLocalStorage();
//Boton de compra
const comprar = document.querySelector("#comprar");