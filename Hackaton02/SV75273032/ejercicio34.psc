// Hacer un algoritmo en Pseint que imprima la tabla de multiplicar de los números del uno nueve.

Algoritmo TablasDeMultiplicar
    Para numero <- 1 Hasta 9 Hacer
        Escribir "Tabla de multiplicar del", numero, ":"
        Para multiplicador <- 1 Hasta 10 Hacer
            resultado <- numero * multiplicador
            Escribir numero, " x ", multiplicador, " = ", resultado
        FinPara
        Escribir ""  // Agregar una línea en blanco para separar las tablas
    FinPara
FinAlgoritmo