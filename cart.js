let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)



let cartContainer = document.getElementById("itemListProduc-section")

function renderCarrito (cartItems) {
    cartItems.forEach(producto => {
        const cart = document.createElement("div")
        cart.innerHTML = `  <div class=".sectionCarro">
                                <img src="${producto.img}" alt="">
                                <h3>${producto.nombre}</h3>
                                <h2>$${producto.precio}</h2>
                                <button class="productoEliminar" id="${producto.id}">Eliminar</button>
                            </div>`
                            
        cartContainer.appendChild(cart)
    })

}
renderCarrito(cartStorage)

const DOMbotonVaciar = document.querySelector('#boton-vaciar');
function vaciarCarrito() {
    localStorage.clear();
    location.reload()
}

DOMbotonVaciar.addEventListener('click', vaciarCarrito);



