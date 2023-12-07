
// console.log(productos)

let cartProducts
let cartProductsLS = localStorage.getItem("cartProducts")
if(cartProductsLS) {
    cartProducts = JSON.parse(cartProductsLS)
} else {
    cartProducts = []
}
let addButton = document.querySelectorAll(".productoAgregar")
// let productsContainer = document.getElementById("products-container")

let contenedor = document.getElementById("item-products")
for (const producto of productos) {
    let contenedor1 = document.createElement("div")
    contenedor1.innerHTML = /*`<span>ID: ${producto.id}</span>*/
                            `<img src="${producto.img}" alt="">
                            <h3>${producto.nombre}</h3>
                            <h4>$${producto.precio}</h4>
                            <button class="productoAgregar btn btn-secondary" id="${producto.id}">Agregar</button>`
    contenedor.appendChild(contenedor1)
    addToCartButton ()
}


function addToCartButton () {
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            console.log(productId)
            const selectedProduct = productos.find(producto => producto.id == productId)
            console.log(selectedProduct)
            cartProducts.push(selectedProduct)

            const repeat = cartProducts.some((repeatProduct) => repeatProduct.id === productId)

            if (repeat){
                cartProducts.map((prod) => {
                    if (prod.id === productId){         /* mirar esta parte para manejar la cantidad */
                        prod.amount;
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

