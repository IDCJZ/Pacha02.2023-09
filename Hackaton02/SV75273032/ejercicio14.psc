//Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
Algoritmo DeterminarPrimo
    Definir numero Como Entero
    Definir esPrimo Como Logico

    Escribir "Ingrese un número entero del 1 al 10: "
    Leer numero

    Si numero >= 1 Y numero <= 10 Entonces
        esPrimo <- Verdadero
        Si numero = 1 Entonces
            esPrimo <- Falso
        Sino Si numero = 4 Entonces
            esPrimo <- Falso
        Sino
            Para i <- 2 Hasta numero - 1 Hacer
                Si numero % i = 0 Entonces
                    esPrimo <- Falso
                    Salir
                Fin Si
            Fin Para
        Fin Si

        Si esPrimo = Verdadero Entonces
            Escribir numero, " es un número primo."
        Sino
            Escribir numero, " no es un número primo."
        Fin Si
    Sino
        Escribir "El número ingresado no está en el rango válido (1 al 10)."
    Fin Si
FinAlgoritmo