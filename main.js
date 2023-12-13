

let cartProducts = JSON.parse(localStorage.getItem("Cart")) || []; /*para cuando refrescamo la pagina en el carrito muestre lo que hay en el localStorage y si no tiene nada muestra un array vacio */


let contenedor = document.getElementById("item-products")
productos.forEach((producto) => {
    let contenedor1 = document.createElement("div") /* creo el Div que Contiene el Producto */
    contenedor1.className = "cartProductos" /* le agrego una clase para dar estilo */
    contenedor1.innerHTML = /*`<span>ID: ${producto.id}</span>*/
                            `<img src="${producto.img}" alt="">
                            <h3>${producto.nombre}</h3>
                            <h4>$${producto.precio}</h4>`
    contenedor.append(contenedor1) /* inserto el producto en el DOM */

    
    let addButton = document.createElement("button") /* creo el Boton agregar */
    addButton.innerText = "Agregar";
    addButton.className = "productoAgregar btn btn-secondary"

    contenedor1.append(addButton)  /* inserto el boton en el producto */

    

    addButton.addEventListener("click",() => {  /*con este evento hace que si el producto ya fue agregado , le aumenta la cantidad */

        const repeat = cartProducts.some((repeatProduct) => repeatProduct.id === producto.id)

        console.log(repeat)

        if (repeat){
            cartProducts.map((prod) => {
                if (prod.id === producto.id){          
                    prod.cantidad++;
                }
            })
        }else {
            cartProducts.push({
                id: producto.id,
                img: producto.img,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: producto.amount,
            })
        }
        
        
        console.log(cartProducts)
        carritoContador() /*actualizo la cantidad en el icono*/
        saveLS() /*actualizo el localStorage */
        

    })
})

/*fUNCION PARA AGREGAR AL LOCAL STOREGE*/
const saveLS = () => {
    localStorage.setItem("Cart",JSON.stringify(cartProducts));
}


