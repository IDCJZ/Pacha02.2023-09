//Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

//$10. Si se compran unidades separadas hasta 9.

//$8. Si se compran entre 10 unidades hasta 99.

//$7. Entre 100 y 499 unidades.

//$6. Para mas de 500 unidades.

//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.


// 1. Solicita al usuario que ingrese la cantidad de CDs a vender.
const cantidadCDs = parseInt(prompt("Ingresa la cantidad de CDs a vender:"));

// 2. Define los precios por cantidad.
const precio1a9 = 10;
const precio10a99 = 8;
const precio100a499 = 7;
const precio500oMas = 6;

// 3. Calcula el precio total para el cliente.
let precioTotalCliente;

if (cantidadCDs >= 1 && cantidadCDs <= 9) {
  precioTotalCliente = cantidadCDs * precio1a9;
} else if (cantidadCDs >= 10 && cantidadCDs <= 99) {
  precioTotalCliente = cantidadCDs * precio10a99;
} else if (cantidadCDs >= 100 && cantidadCDs <= 499) {
  precioTotalCliente = cantidadCDs * precio100a499;
} else {
  precioTotalCliente = cantidadCDs * precio500oMas;
}

// 4. Calcula la ganancia para el vendedor (8.25% de la venta).
const gananciaVendedor = precioTotalCliente * 0.0825;

// 5. Muestra el precio total para el cliente y la ganancia para el vendedor.
console.log(`Precio total para el cliente: $${precioTotalCliente.toFixed(2)}`);
console.log(`Ganancia para el vendedor: $${gananciaVendedor.toFixed(2)}`);
