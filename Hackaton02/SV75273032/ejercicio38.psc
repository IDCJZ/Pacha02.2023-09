// Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.

Algoritmo NumeroPerfecto
    Definir numero, sumaDivisores, divisor como Entero

    Escribir "Ingrese un número para verificar si es un número perfecto: "
    Leer numero

    sumaDivisores <- 0

    Para divisor <- 1 Hasta numero / 2 Hacer
        Si numero MOD divisor = 0 Entonces
            sumaDivisores <- sumaDivisores + divisor
        FinSi
    FinPara

    Si sumaDivisores = numero Entonces
        Escribir numero, " es un número perfecto."
    Sino
        Escribir numero, " no es un número perfecto."
    FinSi
FinAlgoritmo