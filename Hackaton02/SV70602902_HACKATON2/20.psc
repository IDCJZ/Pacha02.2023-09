//Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y
//realice las siguientes operaciones:

Algoritmo OperacionesConNumeros
	Definir num1, num2, num3, num4 Como Entero
	Definir pares Como Entero
	Definir mayor Como Entero
	Definir cuadrado Como Entero
	Definir media Como Real
	Definir suma Como Entero
	
	BANDERA<-Verdadero
	Mientras BANDERA Hacer
		Escribir"Ingrese el primer número:"
		Leer num1
		Escribir"Ingrese el segundo número:"
		Leer num2
		Escribir"Ingrese el tercer número:"
		Leer num3
		Escribir"Ingrese el cuarto número:"
		Leer num4
		
		pares <- 0
		
		Si num1 % 2 = 0 Entonces
			pares <- pares + 1
		Fin Si
		
		Si num2 % 2 = 0 Entonces
			pares <- pares + 1
		Fin Si
		
		Si num3 % 2 = 0 Entonces
			pares <- pares + 1
			Si num3 % 2 = 0 Entonces
				cuadrado <- num2 * num2
				Escribir "El cuadrado de ", num2, " es ", cuadrado
			Fin Si
		Fin Si
		
		Si num4 % 2 = 0 Entonces
			pares <- pares + 1
		Fin Si
		
		Si num1 < num4 Entonces
			media <- (num1 + num2 + num3 + num4) / 4.0
			Escribir"La media de los 4 números es: ", media
		Fin Si
		
		Si num2 > num3 Entonces
			Si (num3 >= 50) Y (num3 <= 700) Entonces
				suma <- num1 + num2 + num3 + num4
				Escribir"La suma de los 4 números es: ", suma
			Fin Si
		Fin Si
		
		Escribir"La cantidad de números pares es: ", pares
		
		Si (num2 > mayor) Y (num2 > num3) Y (num2 > num4) Entonces
			mayor <- num2
		Fin Si
		
		Si (num3 > mayor) Y (num3 > num4) Entonces
			mayor <- num3
		Fin Si
		
		Si (num4 > mayor) Entonces
			mayor <- num4
		Fin Si
		
		Escribir"El número mayor es: ", mayor
	Fin Mientras
    
FinAlgoritmo

