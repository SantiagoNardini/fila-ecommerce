let nombre;
let producto;
let cantidad;
let precioRemera = 3500;

nombre = prompt("Ingrese su nombre");
cantidad = prompt("Ingrese la cantidad de remeras que quiere comprar");

if (nombre === "" || cantidad === "") {
    alert("Debera completar los campos mas tarde");

} else {
    pago = prompt(nombre + " ingrese su metodo de pago (tarjeta o efectivo)");
    calcular(pago);
}

function calcular(pago) {

    let totalCompra = 0;
    let pagoConTarjeta = 0;
    let pagoConEfectivo = 0;


    if (pago === "tarjeta") {
        pagoConTarjeta = cantidad * precioRemera + 600;
        totalCompra = pagoConTarjeta;
        alert("Usted debe pagar $" + totalCompra);

    } else if (pago === "efectivo") {
        pagoConEfectivo = cantidad * precioRemera - 1000;
        totalCompra = pagoConEfectivo;
        alert("Usted debe pagar $" + totalCompra);
    }
    else if (pago === "") {
        alert("Ingrese metodo de pago mas tarde");
    
}}

let entrada = prompt("Desea obtener un cupon de descuento de 500, 1000 o 2000 pesos?");
while (entrada != "2000") {
    switch (entrada) {
        case "500":
            alert("Puede obtener un cupon mejor!");
            break;
        case "1000":
            alert("Puede obtener un cupon mejor!");
            break;
        default:
            alert("Ingrese una respuesta")
            break;

    }
    entrada = prompt("Desea obtener un cupon de descuento de 500, 1000 o 2000 pesos?");
}
alert("Su cupon ha sido enviado a su mail");