// Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.

Algoritmo SerieFibonacci
    Definir n, a, b, resultado como Entero

    Escribir "Ingrese la cantidad de términos de la serie de Fibonacci que desea calcular: "
    Leer n

    a <- 0
    b <- 1

    Escribir "Serie de Fibonacci con ", n, " términos:"

    Para i <- 1 Hasta n Hacer
        Escribir a
        resultado <- a + b
        a <- b
        b <- resultado
    FinPara

FinAlgoritmo