// Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.

Algoritmo FactorialRecursivo
    Definir numero, resultado como Entero

    Escribir "Ingrese un número para calcular su factorial: "
    Leer numero

    resultado <- CalcularFactorial(numero)

    Escribir "El factorial de ", numero, " es: ", resultado
FinAlgoritmo

Funcion CalcularFactorial(numero como Entero) como Entero
    Si numero <= 1 Entonces
        Devolver 1
    Sino
        Devolver numero * CalcularFactorial(numero - 1)
    FinSi
FinFuncion