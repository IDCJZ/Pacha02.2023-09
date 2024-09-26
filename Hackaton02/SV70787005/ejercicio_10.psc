Algoritmo ejercicio_10
	// Hacer un algoritmo en Pseint que diga si un número es par o impar.
	Definir numero,resultado Como entero
	Escribir "Ingrese un numero"
	leer numero;
	resultado = numero % 2;
	si (resultado == 0) Entonces
		Escribir "El numero es PAR"
	SiNo
		Escribir "El numero es IMPAR"
	FinSi
FinAlgoritmo