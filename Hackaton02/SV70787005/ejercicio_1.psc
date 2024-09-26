// EJERCICIO 1: Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.
Algoritmo ejercicio_1
	Escribir "Ingrese un numero"
	Definir numero como entero
	Leer numero
	Mientras numero < 100 o numero > 999 Hacer
		escribir "el numero ingresado no tiene 3 digitos, ingrese uno valido"
		leer numero
	Fin Mientras
	si numero >= 100 y numero <= 999
		escribir "El numero ingresado tiene 3 digitos"
	FinSi
FinAlgoritmo