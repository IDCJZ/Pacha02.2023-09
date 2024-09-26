// 5. Hacer un algoritmo en javascript para una tienda de zapatos que tiene
//una promoción de descuento para vender al mayor, esta dependerá del
//número de zapatos que se compren. Si son más de diez, se les dará un
//10% de descuento sobre el total de la compra; si el número de zapatos
//es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento;
//y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

let precioZapato,
  precioTotal,
  precioTotalReal,
  descPorcentaje = 0,
  precioDescuento;

precioZapato = 80;

const numeroZapatos = 40;

if (numeroZapatos > 30) {
  descPorcentaje = 0.4;
} else {
  if (numeroZapatos > 20) {
    descPorcentaje = 0.2;
  } else {
    if (numeroZapatos > 10) {
      descPorcentaje = 0.1;
    }
  }
}

precioTotalReal = numeroZapatos * precioZapato;
precioDescuento = precioTotalReal * descPorcentaje;

precioTotal = precioTotalReal - precioDescuento;

console.log(`Precio Real: ${precioTotalReal}`);
console.log(`Total Descuento: ${precioDescuento}`);
console.log(`Porcentaje descuento: ${descPorcentaje}`);
console.log(`El Precio total con descuento es: ${precioTotal}`);