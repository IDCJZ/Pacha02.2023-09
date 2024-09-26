//Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.

Proceso PARES
	Definir SUMA, NUMERO Como Entero
	BANDERA<-Verdadero
	Mientras BANDERA Hacer
		SUMA<-0
		Para X <- 0 Hasta 1000 Con Paso 2 Hacer
			SUMA <- SUMA + X
		Fin Para
			Escribir"LA SUMA DE TODOS LOS NUMEROS PARES HASTA 1000 ES: ", SUMA
		Escribir " SALIR OPCION 0"
		Si OPCIONSALIR = 0 Entonces
			BANDERA<-Falso
		Fin Si
Fin Mientras
	
FinProceso
