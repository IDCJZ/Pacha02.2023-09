Proceso SumaCienNumeros
	Definir suma, contador Como Entero
	bandera<-Verdadero
	Mientras bandera Hacer
		suma <- 0
		contador <- 1
		
		Repetir
			suma <- suma + contador
			contador <- contador + 1
		Hasta Que contador > 100
		
		Escribir "La suma de los primeros cien números es:", suma
		Escribir " Para cancelar presiona 0 "
		Leer opcionsalir
		Si opcionsalir = 0 Entonces
			bandera<-Falso
		Fin Si
	Fin Mientras


FinProceso
