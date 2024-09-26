// Hacer un algoritmo en Pseint que permita calcular el factorial de un número.

Algoritmo CalcularFactorial
    Definir n, factorial Como Entero
    factorial <- 1

    Escribir "Ingrese un número para calcular su factorial: "
    Leer n

    Si n < 0 Entonces
        Escribir "El factorial no está definido para números negativos."
    Sino
        Para i <- 1 Hasta n Hacer
            factorial <- factorial * i
        FinPara

        Escribir "El factorial de ", n, " es ", factorial
    FinSi
FinAlgoritmo