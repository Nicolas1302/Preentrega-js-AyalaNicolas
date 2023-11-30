


const productos = [
    {id: 1, img:"img/img2.jpg" ,nombre:"caño de cobre",category:"caños" ,precio: 5000},
    {id: 2,img:"img/img3.webp" , nombre: "mensula",category:"mensulas" , precio: 6000},
    {id: 3, img:"img/img1.webp",nombre: "Manguera Cristal",category:"manguras" , precio: 300}
]

let cartProducts
let cartProductsLS = localStorage.getItem("cartProducts")
if(cartProductsLS) {
    cartProducts = JSON.parse(cartProductsLS)
} else {
    cartProducts = []
}

let addButton = document.querySelectorAll(".productoAgregar")
let productsContainer = document.getElementById("products-container")

let contenedor = document.getElementById("item-products")
for (const producto of productos) {
    let contenedor1 = document.createElement("div")
    contenedor1.innerHTML = /*`<span>ID: ${producto.id}</span>*/
                            `<img src="${producto.img}" alt="">
                            <h3>Producto: ${producto.nombre}</h3>
                            <h3>categoria:${producto.category}</h3>
                            <h4>Precio: $${producto.precio}</h4>
                            <button class="productoAgregar" id="${producto.id}">Agregar</button>`
    contenedor.appendChild(contenedor1)
    addToCartButton ()
}


function addToCartButton () {
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productId)

            cartProducts.push(selectedProduct)
            console.log(cartProducts)

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        }
    })
}
