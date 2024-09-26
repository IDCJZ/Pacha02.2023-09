Funcion valorRetornar <- CalcularFactorialRecursivo ( num )
	si num <= 1 Entonces
		valorRetornar <- 1
	SiNo
		valorRetornar <- num * CalcularFactorialRecursivo(num - 1)
	FinSi
Fin Funcion
Algoritmo ejercicio_25
	// Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
	definir num, resultado Como Entero
	escribir "ingrese un numero para calcular su factorial"
	leer num
	resultado = CalcularFactorialRecursivo(num)
	escribir "El factorial de ",num," es ", resultado
FinAlgoritmo