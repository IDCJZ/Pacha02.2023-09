Algoritmo ejercicio_27
	// Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
	Definir numero Como Real
    Definir suma Como Real
    Definir contador Como Entero
    suma = 0
    contador = 0
    Escribir "Ingrese números positivos (ingrese un número negativo para terminar):"
    Mientras Verdadero Hacer
        Leer numero
        Si numero < 0 Entonces
            Si contador = 0 Entonces
                Escribir "No se han ingresado números positivos."
            Sino
                media = suma / contador
                Escribir "La media de los números ingresados es:", media
            Fin Si
        Sino
            suma = suma + numero
            contador = contador + 1
        Fin Si
    Fin Mientras
FinAlgoritmo