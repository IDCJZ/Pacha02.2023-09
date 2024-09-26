//Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor

Proceso MAYORNUMBER
	BANDERA<-Verdadero
	Mientras BANDERA Hacer
		Escribir " IMGRESE EL PRIMER NUMERO"
		Leer NUMERO1
		Escribir " IMGRESE EL SEGUNDO NUMERO"
		Leer NUMERO2
		Escribir " IMGRESE EL TERCER NUMERO"
		Leer NUMERO3
		Si NUMERO1>NUMERO2 Y NUMERO1>NUMERO3 Entonces
			Escribir " EL NUMERO MAYOR ES ", NUMERO1
		SiNo
			Si NUMERO2>NUMERO1 Y NUMERO2>NUMERO3 Entonces
				Escribir " EL NUMERO MAYOR ES ", NUMERO2
			SiNo
				Si NUMERO3>NUMERO2 Y NUMERO3>NUMERO1 Entonces
					Escribir " EL NUMERO MAYOR ES ", NUMERO3
				Fin Si
			Fin Si
		Fin Si
		
	Fin Mientras
	
FinProceso
