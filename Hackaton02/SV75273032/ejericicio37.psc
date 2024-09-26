// Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

Algoritmo MCDdeEuclides
    Definir num1, num2, temp como Entero

    Escribir "Ingrese el primer número: "
    Leer num1
    Escribir "Ingrese el segundo número: "
    Leer num2

    Mientras num2 <> 0 Hacer
        temp <- num2
        num2 <- num1 MOD num2
        num1 <- temp
    FinMientras

    Escribir "El MCD de los dos números es:", num1
FinAlgoritmo