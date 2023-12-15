const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")
let cantidadProductos = document.getElementById("cantidadProducto")



const mostrarCarrito = () => {                  /*se crea el carrito */
    modalContainer.innerHTML = ""               /*limpio el carrito */
    modalContainer.style.display = "flex";       /*le doy un display para que se vea */
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>`
    modalContainer.append(modalHeader);

    const modalbuttom = document.createElement("div")
    modalbuttom.innerText = "x";
    modalbuttom.className = "modal-header-button";

    modalbuttom.addEventListener("click",() => {
        modalContainer.style.display = "none";   /*para cerrar el display del carrito */

    })

    modalHeader.append(modalbuttom);

    cartProducts.forEach((products) => {
        let carritoConten = document.createElement("div");
        carritoConten.className = "modal-content";
        carritoConten.innerHTML =`
                            <img src="${products.img}" alt="">
                            <h3>${products.nombre}</h3>
                            <p>$${products.precio}</p>
                            
                            <p><span class="restar">➖</span>cantidad:<span class="cartCartidad">${products.cantidad}</span><span class="sumar">➕</span></p>
                            
                            <p>total:${products.cantidad*products.precio}</p>`;
        modalContainer.append(carritoConten);

        /*restar la cantidad en el carrito */
        let restar = carritoConten.querySelector(".restar")
        restar.addEventListener("click", () => {
            if(products.cantidad != 1){
                products.cantidad--;
            }
            saveLS() /*actualizo el localStorage */
            mostrarCarrito() /*actualizo el Carrito */
        })

        /*sumar la cantidad en el carrito */
        let sumar = carritoConten.querySelector(".sumar")
        sumar.addEventListener("click", () => {
            if(products.cantidad >= 1){
                products.cantidad++;
            }
            saveLS()/*actualizo el localStorage */
            mostrarCarrito()  /*actualizo el Carrito */
        })



        let eliminar = document.createElement("spam");  /*creo el boton de eliminar */
        eliminar.innerHTML = "❌";
        eliminar.className = "delete-product";
        carritoConten.append(eliminar);

        eliminar.addEventListener("click",() => {
            Toastify({
                text: "Eliminaste "+[products.nombre]+" del Carrito",
                duration: 4000,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                style: {
                    background: "linear-gradient(to right, #457fca, #5691c8)",
                },
            }).showToast();
            eliminarProducto()
        }) /*evento que lño elimina */

    })

    const total = cartProducts.reduce((acc , el) => acc + el.precio * el.cantidad, 0); /*el reduce acumula o suma el total de los productos del carrito */

    const totalCarrito = document.createElement("div");
    totalCarrito.className = "total-content";
    totalCarrito.innerHTML = `
                            <h1 class="total-content">TOTAL:$${total}</h1>`
    modalContainer.append(totalCarrito)
    
};

verCarrito.addEventListener("click", mostrarCarrito)  /*evento para Mostrar Carrito */

const eliminarProducto = () => {                            /*Buscamos la Id para eliminar */
    const foundId  = cartProducts.find((element) => element.id);

    cartProducts = cartProducts.filter((cartProductsId) => {
        return cartProductsId !== foundId;    /*filtramo y retorna los ID que son diferente al encontrado */
    });

    carritoContador()
    saveLS()
    mostrarCarrito(); /*mostramos el Carrito sin el elemento eliminado */
};

const carritoContador = () => {     /*Muestra la cantidad de producto en el icono del Carrito */
    cantidadProductos.style.display = "block";
    const cartLength = cartProducts.length;
    localStorage.setItem("cartLength", JSON.stringify(cartLength))
    cantidadProductos.innerText = JSON.parse(localStorage.getItem("cartLength"));
}

carritoContador() /*Muestra la cantidad de producto en el icono del Carrito cuando se actualiza la pagina */

