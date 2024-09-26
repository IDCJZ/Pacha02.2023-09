Proceso VentaCds
	Definir gananciaVendedor,numeroCds,precioApagar Como Real
	Escribir "Cantidad de cds que lleva el cliente"
	leer numeroCds
	
	si numeroCds <= 9
		precioApagar <- numeroCds * 10
	SiNo
		si numeroCds >= 10 & numeroCds <= 99
			precioApagar <- numeroCds * 8
		SiNo
			si numeroCds >= 100 & numeroCds <= 499
				precioApagar <- numeroCds * 7
			SiNo
				precioApagar <- numeroCds * 6
			FinSi
		FinSi
	FinSi
	
	gananciaVendedor <- precioApagar * 8.25/100
	
	Escribir "Ganancia vendedor: ",gananciaVendedor
	Escribir "Precio a pagar por el cliente: ",precioApagar
	
FinProceso
