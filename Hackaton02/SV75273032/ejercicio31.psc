// Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.

Algoritmo MediaParesImpares
    Definir numero, sumaPares, sumaImpares, contadorPares, contadorImpares, mediaPares, mediaImpares como Real

    sumaPares <- 0
    sumaImpares <- 0
    contadorPares <- 0
    contadorImpares <- 0

    Para i <- 1 Hasta 10 Hacer
        Escribir "Ingrese el número ", i, ": "
        Leer numero
        Si numero MOD 2 = 0 Entonces
            sumaPares <- sumaPares + numero
            contadorPares <- contadorPares + 1
        Sino
            sumaImpares <- sumaImpares + numero
            contadorImpares <- contadorImpares + 1
        FinSi
    FinPara

    Si contadorPares > 0 Entonces
        mediaPares <- sumaPares / contadorPares
    Sino
        mediaPares <- 0
    FinSi

    Si contadorImpares > 0 Entonces
        mediaImpares <- sumaImpares / contadorImpares
    Sino
        mediaImpares <- 0
    FinSi

    Escribir "La media de los números pares ingresados es: ", mediaPares
    Escribir "La media de los números impares ingresados es: ", mediaImpares
FinAlgoritmo