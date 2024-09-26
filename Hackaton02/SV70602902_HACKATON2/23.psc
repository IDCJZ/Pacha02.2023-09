//23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.

Proceso N_IMPAR
	BANDERA<-Verdadero
	Mientras BANDERA Hacer
		Escribir  " INGRESA UN NUMERO "
		Leer IMPARES
		SUMA<-0
		Para X<-1 Hasta IMPARES Con Paso 2 Hacer
			SUMA<-SUMA+X
		Fin Para
		Escribir " LA SUMA DE LOS IMAPRES ES ", SUMA
		
	Fin Mientras
	
FinProceso
