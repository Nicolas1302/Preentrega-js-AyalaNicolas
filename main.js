class Product {
    constructor(title, price, stock) {
        this.title = title
        this.price = price
        this.stock = stock
    }
}

const product1 = new Product("caño de cobre", 4000, 10)
const product2 = new Product("mensula", 6000, 16)
const product3 = new Product("Manguera Cristal", 300, 6)

class Itemticket {
    constructor(title, amount, price, total) {
        this.title = title
        this.amount = amount
        this.price = price
        this.total =total
    }
}


function validarRta(texto, textoValidar) {
    if (texto.toLowerCase() == textoValidar) {
        return true
    }
    return false
}
let sigue = "si"
let totalcompra = 0 
let contador = 0
let ejecucionWhile = true
let ejecucionProducto = true
let ticket = []
let fechaActual = new Date()
let referencia = Math. round(Math. random()*100000000)


while (ejecucionWhile == true) {

    let numero = parseFloat(prompt("Bienvenido a NicoRefrigeracion...Ingrese el servicio a solicitar (1)venta , (2)Repacion"));

    if (numero == 1 || numero == 2 ){
        if (numero == 1){
            do{
                while (ejecucionProducto == true) {
                    let producto = parseInt(prompt("Elija el Producto a Comprar...(1)Caño de cobre , (2)Mensulas , (3)Manguera Cristal "))

                    if (producto == 1) {
                        let cantidad = parseInt(prompt("El precio de Caño de cobre es $ 4000 el Metro ....Ingrese la Cantidad de Metros "))
                        let totalcaño = cantidad * product1.price
                        alert ("precio a Pagar "+cantidad+" metro de caño =  "+ totalcaño);
                        const itemticket1 = new Itemticket(product1.title , cantidad, product1.price, totalcaño)
                        ticket.push(itemticket1)
                    }
                    else if (producto == 2) {
                        let cantidad = parseInt(prompt("El precio de Mensula es de $ 6000 el par....Ingrese la Cantidad de pares a Necesitar "))
                        let totalmensula = cantidad * product2.price
                        alert ("precio a Pagar "+cantidad+" par de mensulas = "+ totalmensula);
                        const itemticket2 = new Itemticket(product2.title , cantidad, product2.price, totalmensula)
                        ticket.push(itemticket2)
                    }
                    else if (producto == 3) {
                        let cantidad = parseInt(prompt("El precio de Manguera Cristal es de $ 300 el Metro....Ingrese la Cantidad de pares a Necesitar "))
                        let totalmanguera = cantidad * product3.price
                        alert ("precio a Pagar "+cantidad+" metro de manguera ="+ totalmanguera);
                        const itemticket3 = new Itemticket(product3.title , cantidad, product3.price, totalmanguera)
                        ticket.push(itemticket3)
                    }
                    else {
                        alert ("numero ingresado no valido")
                        break
                    } 

                    let rta = prompt("¿Desea agregar Otro Producto? (si) o (no)")

                    if (validarRta(rta, "no") == true) {
                        sigue = "no"
                        
                        console.log(fechaActual)
                        const itemsticket = ticket.map(Itemticket1 => ({ producto: Itemticket1.title , cantidad: Itemticket1.amount, precio: Itemticket1.price, total: Itemticket1.total}))
                        
                        console.table(itemsticket)

                        itemsticket.forEach(total => {
                            totalcompra += total.total
                        })

                        console.log("Monto total  : $"+totalcompra)

                        // console.log(totalcompra)
                        console.log("Numero Referencia "+referencia)
                        
                        // alert ("Muchas Gracias Por Confiar en NicoRefrigeracion")
                        ejecucionProducto = false
                    }

                    ejecucionWhile = false
                }
            }while (sigue == "si")
        }else if (numero == 2) {
            alert ("para reparacion comunicarse al 11-22334455")
            ejecucionWhile = false
        } 
    }else {
        contador++ // esto es equivalente a contador += 1 o a contador = contador + 1
        if (contador >= 3) {
            alert("Se ingreso mas de 3 veces opcion incorrecta")
            ejecucionWhile = false
        } else {
            alert("Por favor ingresa opcion (1) venta  o (2) Reparacion")
        }
    }
}