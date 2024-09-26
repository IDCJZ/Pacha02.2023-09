//Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. 
//Los clientes pueden adquirir los artículos (supongamos un único producto 
//de una única marca) por cantidad. Los precios son:

Proceso CD
	BANDERA<-Verdadero
	Mientras BANDERA Hacer
		Escribir " INGRESE LA CANTIDAD DE UNIDADES ADQUIRIDAS "
		Leer UNIDADES
		total1=10*UNIDADES
		total2=8*UNIDADES
		total3=7*UNIDADES
		total4=6*UNIDADES
		ganancia=0.0825
		Si UNIDADES <= 9 Entonces
			Escribir " EL TOTAL A PAGAR ES DE ", (10*UNIDADES), " $"
			Escribir " ver ganancias del vendedor 1 sino 0 "
			Leer vendedor
			si vendedor = 1 Entonces
				Escribir " Las ganancias son ", (ganancia*total1)," $"
			FinSi
		SiNo
			Si UNIDADES >= 10 Y UNIDADES < 100 Entonces
				Escribir " EL TOTAL A PAGAR ES DE ", (8*UNIDADES), " $"
				Escribir " ver ganancias del vendedor presiona 1 "
				Leer vendedor
				si vendedor = 1 Entonces
					Escribir " Las ganancias son ", (ganancia*total2)," $"
				FinSi
			SiNo
				Si UNIDADES >= 100 Y UNIDADES < 500 Entonces
					Escribir " EL TOTAL A PAGAR ES DE ", (7*UNIDADES), " $"
					Escribir " ver ganancias del vendedor presiona 1 "
					Leer vendedor
					si vendedor = 1 Entonces
						Escribir " Las ganancias son ", (ganancia*total3)," $"
					FinSi
				SiNo
					Si UNIDADES <= 500 Entonces
						Escribir " EL TOTAL A PAGAR ES DE ", (6*UNIDADES), " $"
						Escribir " ver ganancias del vendedor presiona 1 "
						Leer vendedor
						si vendedor = 1 Entonces
							Escribir " Las ganancias son ", (ganancia*total4)," $"
						FinSi
					Fin Si
				Fin Si
			Fin Si
		Fin Si
	Fin Mientras
	
FinProceso
