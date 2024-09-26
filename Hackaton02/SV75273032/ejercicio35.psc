// Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

Algoritmo EncontrarMayorYMenor
    Definir numero, mayor, menor como Entero

    mayor <- -9999  // Inicializar el mayor con un valor muy pequeño
    menor <- 9999   // Inicializar el menor con un valor muy grande

    Para i <- 1 Hasta 20 Hacer
        Escribir "Ingrese el número ", i, ": "
        Leer numero

        Si numero > mayor Entonces
            mayor <- numero
        FinSi

        Si numero < menor Entonces
            menor <- numero
        FinSi
    FinPara

    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
FinAlgoritmo