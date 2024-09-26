// Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

Algoritmo MediaDeNumerosPositivos
    Definir numero, suma, contador como Real

    suma <- 0
    contador <- 0

    Escribir "Ingrese números positivos (para terminar, ingrese un número negativo):"

    Mientras Verdadero Hacer
        Escribir "Ingrese un número:"
        Leer numero

        Si numero < 0 Entonces
            Si contador > 0 Entonces
                media <- suma / contador
                Escribir "La media de los números positivos ingresados es: ", media
            Sino
                Escribir "No se ingresaron números positivos."
            FinSi
            Romper
        Sino
            Si numero >= 0 Entonces
                suma <- suma + numero
                contador <- contador + 1
            FinSi
        FinSi
    FinMientras
FinAlgoritmo