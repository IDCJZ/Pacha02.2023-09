// Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento

// 1. Solicita al usuario que ingrese su tipo de membresía (A, B o C).
const tipoMembresia = prompt("Ingresa tu tipo de membresía (A, B o C):").toUpperCase();

// 2. Define los descuentos para cada tipo de membresía.
const descuentoTipoA = 0.10; // 10% de descuento para Tipo A
const descuentoTipoB = 0.15; // 15% de descuento para Tipo B
const descuentoTipoC = 0.20; // 20% de descuento para Tipo C

// 3. Define el precio del helado sin descuento.
const precioHelado = 5; // Precio base del helado

// 4. Calcula el descuento en función del tipo de membresía.
let descuento = 0;

switch (tipoMembresia) {
  case "A":
    descuento = descuentoTipoA;
    break;
  case "B":
    descuento = descuentoTipoB;
    break;
  case "C":
    descuento = descuentoTipoC;
    break;
  default:
    console.log("Tipo de membresía no válido.");
    break;
}

// 5. Calcula el precio final con descuento.
const precioFinal = precioHelado - (precioHelado * descuento);

// 6. Muestra el precio final al cliente.
if (descuento > 0) {
  console.log(`Tu tipo de membresía (${tipoMembresia}) te otorga un ${descuento * 100}% de descuento.`);
  console.log(`Precio con descuento: $${precioFinal.toFixed(2)}`);
} else {
  console.log("No se aplicó ningún descuento.");
}