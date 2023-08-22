//Vincular los archivos de JS entre sí
import {comprarProducto} from "./carrito.js"

const userLogin = document.getElementById("userLogin")
//DOM - Vinculación de HTML con Javascript(etiquetas con nodos)

const productos = document.getElementById("productos");
const carrito = document.getElementById("carrito");



//DOM y Storage- Vinculación de la db con Javascript
export let productosEnStock = JSON.parse(localStorage.getItem("productos"));

//Eventos - Carrito de compras
//Función para cargar productos en el carrito
export const generarCardsProductos = (productos) =>{
  divProductos.innerHTML= "";
  
  productos.foreach ((producto) => {

    const { imagen, nombre, categoria, precio, id } = producto
   
    let card = document.createElement(divCard);
    card.className = "producto";
    card.innerHTML = 
    `<div class="card" style="width: 300px;">
     <img src="${producto.imagen}" class="card-img-top" alt="Accesorio1">
     <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.categoria}</p>
      <p class="card-text">${producto.precio}</p>
      <button id= "comprar${producto.id}" class="btn btn-primary">Agregar al carrito</button>
    </div>
  </div>`

//Cada botón "Agregar al carrito" debe tener un único id para diferenciar cada producto de los demás
    divCard.appendchild(card)
  });

    const btnComprar = document.getElementById(`comprar${producto.id})`)
    btnComprar.addEventlistener ("Click", ()=> console.log("funciona"))


//Para ejecutar la función anterior creo un evento:
document.addEventlistener("DOMContentLoaded", ()=> {
  generarCardsProductos(productosEnStock)
});

}


