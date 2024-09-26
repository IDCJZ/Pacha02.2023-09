Proceso DescuentoHeladeria
	
	Definir precioHelado, descuento, precioFinal Como Real
    Definir tipoMembresia Como Caracter
    
    Escribir "Ingrese el precio del helado: "
    Leer precioHelado
    
    Escribir "Ingrese el tipo de membresía (A, B o C): "
    Leer tipoMembresia
    
    Segun tipoMembresia
		Caso "a" :
            descuento = precioHelado * 0.10
			Caso "b" :
            descuento = precioHelado * 0.15
			Caso "c" :
            descuento = precioHelado * 0.20
			De Otro Modo
            Escribir "Tipo de membresía no válido."
            detener
    FinSegun
    
    precioFinal = precioHelado - descuento
    
    Escribir "Precio del helado: ", precioHelado
    Escribir "Descuento aplicado: ", descuento
    Escribir "Precio final con descuento: ", precioFinal
	
FinProceso
