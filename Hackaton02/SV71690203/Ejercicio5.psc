Proceso Ejercicio5
	
	Definir  precioZapato, numeroZapatos, precioTotal,precioTotalReal, descPorcentaje, precioDescuento Como Real
	precioZapato = 80;
	
	Escribir   "Ingrese el numero de zapatos a comprar: "
	Leer numeroZapatos;
	
	si numeroZapatos > 30 Entonces
		descPorcentaje = 0.4;
	SiNo
		si numeroZapatos > 20 Entonces
			descPorcentaje = 0.2;
		SiNo
			si numeroZapatos >10 Entonces
				descPorcentaje = 0.1;
			FinSi
		FinSi
	FinSi
	
	precioTotalReal = numeroZapatos * precioZapato;
	precioDescuento = precioTotalReal * descPorcentaje;
	precioTotal = precioTotalReal - precioDescuento
	
	Escribir   "Precio Real: ", precioTotalReal;
	Escribir   "Total Descuento: ", precioDescuento;
	Escribir   "Porcentaje de descuento: ", descPorcentaje;
	Escribir   "El precio total con descuento es: ", precioTotal
	
FinProceso
