const productos = [
    // Buzos
    {
        id: "buzo-01",
        titulo: "Buzo Canguro Star Pilot",
        imagen: "./img/buzos/01.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 16500
    },
    {
        id: "buzo-02",
        titulo: "Buzo Canguro Make Waves",
        imagen: "./img/buzos/02.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 18000
    },
    {
        id: "buzo-03",
        titulo: "Buzo Canguro Star Pilot",
        imagen: "./img/buzos/03.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 16500
    },
    {
        id: "buzo-04",
        titulo: "Buzo Canguro Circle Star",
        imagen: "./img/buzos/04.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 19500
    },
    {
        id: "buzo-05",
        titulo: "Buzo Build Up",
        imagen: "./img/buzos/05.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 14000
    },
    // Remeras
    {
        id: "remera-01",
        titulo: "Remera Mc Star Htr",
        imagen: "./img/remeras/01.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 5500
    },
    {
        id: "remera-02",
        titulo: "Remera Mc Dc Camo",
        imagen: "./img/remeras/02.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 6000
    },
    {
        id: "remera-03",
        titulo: "Remera MC Pocket Label",
        imagen: "./img/remeras/03.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 6000
    },
    {
        id: "remera-04",
        titulo: "Remera Mc Star Pilot Htr",
        imagen: "./img/remeras/04.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 5500
    },
    {
        id: "remera-05",
        titulo: "Remera MC Star Pocket Htr",
        imagen: "./img/remeras/05.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 6000
    },
    {
        id: "remera-06",
        titulo: "Remera Mc Reach For It",
        imagen: "./img/remeras/06.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 7000
    },
    {
        id: "remera-07",
        titulo: "Remera Mc Reach For It",
        imagen: "./img/remeras/07.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 7000
    },
    {
        id: "remera-08",
        titulo: "Remera Mc Dcshoescousa Htr",
        imagen: "./img/remeras/08.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 7000
    },
    // Zapatillas
    {
        id: "zapatillas-01",
        titulo: "Zapatillas Plaza Tc Ss",
        imagen: "./img/zapatillas/01.jpg",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 26000
    },
    {
        id: "zapatillas-02",
        titulo: "Zapatillas Plaza Tc Ss",
        imagen: "./img/zapatillas/02.jpg",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 26000
    },
    {
        id: "zapatillas-03",
        titulo: "Zapatillas Trase SD",
        imagen: "./img/zapatillas/03.jpg",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 22500
    },
    {
        id: "zapatillas-04",
        titulo: "Zapatillas Stag Lite LE",
        imagen: "./img/zapatillas/04.jpg",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 26000
    },
    {
        id: "zapatillas-05",
        titulo: "Zapatillas Pensford Ss Le",
        imagen: "./img/zapatillas/05.jpg",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 35000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}