// 7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento

function calcularPrecioConDescuento(precioOriginal, tipoMembresia)
 {
    let descuento = 0;
  
    switch (tipoMembresia)
     {
      case 'A':
        descuento = 0.1; // 10% de descuento para tipo A
        break;
      case 'B':
        descuento = 0.15; // 15% de descuento para tipo B
        break;
      case 'C':
        descuento = 0.2; // 20% de descuento para tipo C
        break;
      default:
        descuento = 0; 
    }
  
    const precioConDescuento = precioOriginal * (1 - descuento);
    return precioConDescuento;
  }
  
  const precioOriginal = parseFloat(prompt('Ingrese el precio original del helado:'));
  const tipoMembresia = prompt('Ingrese el tipo de membresía (A, B o C):');
  
  const precioConDescuento = calcularPrecioConDescuento(precioOriginal, tipoMembresia);
  
  console.log(`El precio con descuento para la membresía ${tipoMembresia} es: $${precioConDescuento.toFixed(2)}`);
  