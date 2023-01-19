const productos = [{
    nombre: "Remera",
    precio: 9000
},
{
    nombre: "Camisa",
    precio: 14000
},
{
    nombre: "Jean",
    precio: 16000
},
{
    nombre: "Short",
    precio: 10000
},
{
    nombre: "Buzo",
    precio: 20000
},
];
console.log(productos)

let carrito = [];

let unidades = 0
let cantidad;
let seleccion;

function validaEdad() {
let edad;

edad = prompt("Bienvenido/a. Ingresa tu edad");

if (edad < 18) {
    alert("Debes solicitar a un mayor de 18 años que realice la compra");
} else {
    alert("Bienvenido a la pagina");
}
}
validaEdad()


while (seleccion != "Si" && seleccion != "No") {
seleccion = prompt("Usted desea comprar productos ahora?");
}

if (seleccion == "Si") {

alert("Estos son nuestros prods");

let todosLosProductos = productos.map((producto) => producto.nombre + " $" + producto.precio);

alert(todosLosProductos.join(" - "));

console.log(todosLosProductos);

} else if (seleccion == "No") {

alert("Gracias por venir, hasta luego");
}

while (seleccion != "No") {

let producto = prompt("Ingrese producto/s a su carrito");

let precio = 0;

if (producto == "Remera" || producto == "Camisa" || producto == "Jean" || producto == "Short" || producto == "Buzo") {
    switch (producto) {
        case "Remera":
            precio = 9000;
            break;
        case "Camisa":
            precio = 14000;
            break;
        case "Jean":
            precio = 16000;
            break;
        case "Short":
            precio = 10000;
            break;
        case "Buzo":
            precio = 20000;
            break;
    }

    unidades = Number(prompt("Cuantas unidades quiere llevar?"));

    carrito.push({
        producto,
        unidades,
        precio
    });

} else {

    alert("No hay stock de ese producto");
}

seleccion = prompt("Desea seguir comprando?");

while (seleccion === "No") {
    
    alert("Gracias por comprar!")
    break;

}
console.log("Producto: " + producto + ", Cantidad " + unidades + ", Precio total de la prenda: $" + precio * unidades);
}

let entrada = prompt("Desea obtener un cupon de descuento de 500, 1000 o 2000 pesos?");
while (entrada != "2000") {

if (entrada == "No" || entrada == "no" || entrada == "NO") {
    alert("Hasta luego, vuelva pronto!");
    break;
}
switch (entrada) {
    case "500":
        alert("Puede obtener un cupon mejor!");
        break;
    case "No":
        alert("Hasta luego!");
        break;
    case "1000":
        alert("Puede obtener un cupon mejor!");
        break;
    default:
        alert("Ingrese una respuesta")
        break;

}
entrada = prompt("Desea obtener un cupon de descuento de 500, 1000 o 2000 pesos?");

alert("Su cupon ha sido enviado a su mail");
}