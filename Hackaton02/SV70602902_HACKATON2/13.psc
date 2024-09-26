//Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal

Proceso VOCAL
	BANDER<-Verdadero
	Mientras BANDER Hacer
		Escribir " INGRESA UNA LETRA "
		Leer LETRA
		Si (LETRA = "A" O LETRA = "E" O LETRA = "I" O LETRA = "O" O LETRA = "U" O LETRA = "a" O LETRA = "e" O LETRA = "i" O LETRA = "o" O LETRA = "u") Entonces
			Escribir " LA LETRA ", LETRA," ES UNA VOCAL"
		SiNo
			Si (LETRA>="A" Y LETRA<="Z") o (LETRA>="a" Y LETRA<="z")  Entonces
				Escribir " LA LETRA ", LETRA," ES UNA CONSONANTE"
			SiNo
				Escribir " SOLO SE ACEPTAN LETRAS "
			Fin SI
		Fin Si
		
	Fin Mientras
FinProceso
