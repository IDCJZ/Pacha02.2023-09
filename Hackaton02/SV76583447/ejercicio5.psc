Proceso tiendaDEzapatos
	Definir  precioZapato, numeroZapatos, precioTotal,precioTotalReal, descPorcentaje, precioDescuento Como Real
	precioZapato = 80;
	
	Imprimir  "Ingrese el numero de zapatos a comprar: "
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
	Imprimir  "Precio Real: ", precioTotalReal;
	Imprimir  "Total Descuento: ", precioDescuento;
	Imprimir  "Porcentaje de descuento: ", descPorcentaje;
	Imprimir  "El precio total con descuento es: ", precioTotal
	
FinProceso
