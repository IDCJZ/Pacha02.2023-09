// Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

const precioZapato = 80;
const cantidadZapatos = parseInt(prompt("Ingresa la cantidad de zapatos que deseas comprar:"));

// 2. Calcula el precio total sin descuento.
const precioTotalSinDescuento = cantidadZapatos * precioZapato;

// 3. Aplica el descuento según la cantidad de zapatos comprados.
let descuento = 0;

if (cantidadZapatos > 10 && cantidadZapatos <= 20) {
  // 10% de descuento
  descuento = 0.1;
} else if (cantidadZapatos > 20 && cantidadZapatos <= 30) {
  // 20% de descuento
  descuento = 0.2;
} else if (cantidadZapatos > 30) {
  // 40% de descuento
  descuento = 0.4;
}

// 4. Calcula el precio total con descuento.
const precioTotalConDescuento = precioTotalSinDescuento - (precioTotalSinDescuento * descuento);

// 5. Muestra el resultado al usuario.
console.log(`Cantidad de zapatos comprados: ${cantidadZapatos}`);
console.log(`Precio total sin descuento: $${precioTotalSinDescuento}`);
console.log(`Descuento aplicado: ${descuento * 100}%`);
console.log(`Precio total con descuento: $${precioTotalConDescuento}`);