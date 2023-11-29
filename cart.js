let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("itemListProduc-section")

function renderCarrito (cartItems) {
    cartItems.forEach(producto => {
        const cart = document.createElement("div")
        cart.innerHTML = `<img src="${producto.img}" alt="">
                          <h3>${producto.nombre}</h3>
                          <h2>$${producto.precio}</h2>`
        cartContainer.appendChild(cart)
    })
}
renderCarrito(cartStorage)