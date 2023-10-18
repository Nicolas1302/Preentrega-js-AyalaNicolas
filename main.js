
function validarRta(texto, textoValidar) {
    //.toLowerCase() pasa un texto a miniscula 
    if (texto.toLowerCase() == textoValidar) { //no == no
        return true
    }
    //Si el if es verdadero, devuelve true. Si es false (o sea, el texto no es igual), devuelvo Flase
    return false
}

let sigue = "si"
let totalcompra = 0 

let numero = parseFloat(prompt("Bienvenido a NicoRefrigeracion...Ingrese el servicio a solicitar (1)venta , (2)Repacion"));

if (numero == 1 || numero == 2 ){
    if (numero == 1){
        do{
            let producto = parseInt(prompt("Elija el Producto a Comprar...(1)Caño de cobre , (2)Mensulas , (3)Manguera Cristal "))

            if (producto == 1) {
                let caño = parseInt(prompt("El precio de Caño de cobre es $ 4000 el Metro ....Ingrese la Cantidad de Metros "))
                let totalcaño = caño *4000
                alert ("precio a Pagar "+caño+" metro de caño =  "+ totalcaño);
                totalcompra = totalcompra + totalcaño
            }
            else if (producto == 2) {
                let mensula = parseInt(prompt("El precio de Mensula es de $ 6000 el par....Ingrese la Cantidad de pares a Necesitar "))
                let totalmensula = mensula * 6000
                alert ("precio a Pagar "+mensula+" par de mensulas = "+ totalmensula);
                totalcompra = totalcompra + totalmensula
            }
            else if (producto == 3) {
                let manguera = parseInt(prompt("El precio de Manguera Cristal es de $ 300 el Metro....Ingrese la Cantidad de pares a Necesitar "))
                let totalmanguera = manguera * 300
                alert ("precio a Pagar "+manguera+" metro de manguera ="+ totalmanguera);
                totalcompra = totalcompra + totalmanguera
            }
            else {
                alert ("numero ingresado no valido")
                break
            } 

            let rta = prompt("¿Desea agregar Otro Producto? (si) o (no)")

            if (validarRta(rta, "no") == true) {
                sigue = "no"
                alert ("total a pagar es = " + totalcompra)
            }


        }while (sigue == "si")
    }else if (numero == 2) {
        alert ("para reparacion comunicarse al 11-22334455")
    } 
}else {
    alert ("el numero ingresado es invalido")
}