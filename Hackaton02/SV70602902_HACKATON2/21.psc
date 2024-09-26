//Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso FactorialES
	BANDERA<-Verdadero
	Mientras BANDERA Hacer
		Escribir "INGRESE EL NUMERO PARA CALCULAR LA FACTORIAL:"
		Leer N
		FACTORIAL <- 1
		Para X <- 1 Hasta N Hacer
			FACTORIAL <- FACTORIAL*X
		Fin Para
		Escribir " FACTORIAL DE ", N , " ES " , FACTORIAL
	Fin MientraS
	
FinProceso
