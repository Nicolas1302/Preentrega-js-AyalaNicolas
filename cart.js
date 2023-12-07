const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")



const mostrarCarrito = () => {
    modalContainer.innerHTML = ""             /*limpio el carrito */
    modalContainer.style.display = "flex";    /*le doy un display para que se vea */
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
                            <p>${products.precio}$</p>
                            <p>cantidad: ${products.amount}</p>`;
        modalContainer.append(carritoConten);

        let eliminar = document.createElement("spam");  /*creo el boton de eliminar */
        eliminar.innerHTML = "❌";
        eliminar.className = "delete-product";
        carritoConten.append(eliminar);

        eliminar.addEventListener("click",eliminarProducto) /*evento que lño elimina */

    })

    const total = cartProducts.reduce((acc , el) => acc + el.precio, 0);

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

    mostrarCarrito(); /*mostramos el Carrito sin el elemento eliminado */
};