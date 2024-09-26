//Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
Algoritmo CalcularDescuentoHelados
    Definir tipoMembresia Como Caracter
    Definir totalCompra, descuento, totalConDescuento Como Real
    
    Escribir "Ingrese el tipo de membresía (A, B o C):"
    Leer tipoMembresia
    
    Escribir "Ingrese el total de la compra:"
    Leer totalCompra
    
    // Calcular el descuento según el tipo de membresía
    Segun tipoMembresia Hacer
        "A":
            descuento <- totalCompra * 0.10  // 10% de descuento para tipo A
        "B":
            descuento <- totalCompra * 0.15  // 15% de descuento para tipo B
        "C":
            descuento <- totalCompra * 0.20  // 20% de descuento para tipo C
        De Otro Modo:
            Escribir "Tipo de membresía no válido. No se aplicará ningún descuento."
            descuento <- 0
    FinSegun
    
    // Calcular el total con descuento
    totalConDescuento <- totalCompra - descuento
    
    Si descuento > 0 Entonces
        Escribir "Descuento aplicado: $" + ConvertirATexto(descuento)
    Sino
        Escribir "No se aplicó ningún descuento."
    FinSi
    
    Escribir "Total con descuento: $" + ConvertirATexto(totalConDescuento)
FinAlgoritmo