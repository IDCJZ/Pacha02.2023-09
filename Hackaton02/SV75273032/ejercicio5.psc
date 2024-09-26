//Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

Algoritmo CalcularDescuentoZapatos
    Definir cantidadZapatos, precioZapato, totalCompra, descuento, totalConDescuento Como Real
    
    precioZapato <- 80  // Precio de cada zapato
    
    Escribir "Ingrese la cantidad de zapatos que desea comprar:"
    Leer cantidadZapatos
    
    // Calcular el total de la compra
    totalCompra <- cantidadZapatos * precioZapato
    
    // Calcular el descuento según la cantidad de zapatos
    Si cantidadZapatos > 30 Entonces
        descuento <- totalCompra * 0.40  // 40% de descuento
    Sino
        Si cantidadZapatos > 20 Entonces
            descuento <- totalCompra * 0.20  // 20% de descuento
        Sino
            Si cantidadZapatos > 10 Entonces
                descuento <- totalCompra * 0.10  // 10% de descuento
            Sino
                descuento <- 0  // No hay descuento
            FinSi
        FinSi
    FinSi
    
    // Calcular el total con descuento
    totalConDescuento <- totalCompra - descuento
    
    Escribir "Total de la compra: $" + ConvertirATexto(totalCompra)
    Escribir "Descuento aplicado: $" + ConvertirATexto(descuento)
    Escribir "Total con descuento: $" + ConvertirATexto(totalConDescuento)
FinAlgoritmo