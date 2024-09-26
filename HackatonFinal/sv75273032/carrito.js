// ecommerce.js

// Datos de ejemplo
const productosEnStock = [
    { id: 1, nombre: 'Camiseta', precio: 20.99 },
    { id: 2, nombre: 'Zapatos deportivos', precio: 69.99 },
    // Agregar más productos si es necesario
];

// Variables para el carrito
let carrito = [];
let totalCarrito = 0;

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    totalCarrito += producto.precio;

    // Actualizar la interfaz del carrito
    actualizarInterfazCarrito();
}

// Función para actualizar la interfaz del carrito
function actualizarInterfazCarrito() {
    const listaCarrito = document.getElementById('carrito-lista');
    const totalCarritoElemento = document.getElementById('total-carrito');

    // Limpiar la lista
    listaCarrito.innerHTML = '';

    // Agregar productos al carrito
    carrito.forEach(producto => {
        const listItem = document.createElement('li');
        listItem.textContent = `${producto.nombre} - ${producto.precio.toFixed(2)} USD`;
        listaCarrito.appendChild(listItem);
    });

    // Actualizar el total del carrito
    totalCarritoElemento.textContent = totalCarrito.toFixed(2);
}

// Función para realizar la compra
function realizarCompra() {
    // Aquí puedes implementar la lógica para enviar el pedido al backend,
    // procesar el pago, actualizar el inventario, etc.

    // Después de realizar la compra, reinicia el carrito
    carrito = [];
    totalCarrito = 0;

    // Actualiza la interfaz del carrito
    actualizarInterfazCarrito();

    // Agrega cualquier otra lógica de post-compra necesaria
    console.log('Compra realizada con éxito.');
}
