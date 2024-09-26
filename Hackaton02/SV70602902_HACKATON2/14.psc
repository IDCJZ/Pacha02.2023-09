//Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 
//y determine si es un número primo.

Proceso DeterminarPrimo
	Definir numero Como Entero
	BANDERA<-Verdadero
	Mientras BANDERA Hacer
		Escribir "Ingrese un número entero del 1 al 10: "
		Leer numero
		Si numero > 10 Entonces
			Escribir " SOLO NUMEROS DEL 1 AL 10"
		SiNo
			Si numero == 2 O numero == 3 O numero == 5 O numero == 7 Entonces
				Escribir "EL NUMERO ", numero," ES PRIMO"
			SiNo
				Escribir "EL NUMERO ", numero," NO ES PRIMO"
			Fin Si
		Fin Si
	Fin Mientras
FinProceso


