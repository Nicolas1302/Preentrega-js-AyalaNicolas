

let cartProducts = []


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

    

    addButton.addEventListener("click",() => {

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
        carritoContador()

    })


    // addToCartButton ()
})

/*
function addToCartButton () {
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            console.log(productId)
            const selectedProduct = productos.find(producto => producto.id == productId)
            console.log(selectedProduct)
            cartProducts.push(selectedProduct)

            const repeat = cartProducts.some(repeatProduct => repeatProduct.id === productId)

            console.log(repeat)

            if (repeat){
                cartProducts.map((prod) => {
                    if (prod.id === productId){          
                        prod.amount++;
                    }
                })
            }else {
                cartProducts
            }
            
            // localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
            console.log(cartProducts)

             
           
        }
    })
}


*/

/*


let elementosLS = []
elementosLS = cartStorage

console.log(elementosLS)

let cartContainer = document.getElementById("itemListProduc-section")

function renderCarrito (cartItems) {
    cartItems.forEach(producto => {
        const cart = document.createElement("div")
        cart.innerHTML = `  <section class="Items-Cart">
                            <img src="${producto.img}" alt="">
                            <h3>${producto.nombre}</h3>
                            <h2>$${producto.precio}</h2>
                            <h2>Cantidad:${producto.amount}</h2>
                            <button class="productoEliminar" id="${producto.id}">Eliminar</button>
                            </section>`                   
        cartContainer.appendChild(cart)
        
    })
    EventosEliminar()
}
renderCarrito(cartStorage)







function EventosEliminar() {
    let botonelim = document.querySelectorAll(".productoEliminar");
    botonelim.forEach(addButton => {
        addButton.addEventListener('click', function () {
            console.log(addButton)
            deleteCartButton ([addButton])

        });
    });
}  



function deleteCartButton (addButton) {
    let cartProducts1 = []
    cartProducts1 = cartStorage
    addButton.forEach(button => {
        const productId = button.id
        const selectedProduct = cartProducts1.find(producto => producto.id == productId)
        console.log(selectedProduct)
        cartProducts1.splice(selectedProduct,1)
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts1))
        console.log(button.id)
        removeItemCart(productId)
    })
    
}



function removeItemCart(idProduct){
    const itemCart = document.querySelectorAll(".Items-Cart")
    itemCart.forEach(section => {
        const idNumeroBuscado = section.querySelector(`.productoEliminar[id="${idProduct}"]`)
        if(idNumeroBuscado){
            section.remove()
        }
    })
}

*/

