// Algoritmo AproximacionPiGregoryLeibniz
    Definir n como Entero
    Definir piAproximado como Real

    piAproximado <- 0

    Escribir "Ingrese el número de términos para calcular la aproximación de Pi: "
    Leer n

    Para i <- 0 Hasta n-1 Hacer
        termino <- 4 / (1 + 2 * i)
        Si i MOD 2 = 0 Entonces
            piAproximado <- piAproximado + termino
        Sino
            piAproximado <- piAproximado - termino
        FinSi
    FinPara

    Escribir "La aproximación de Pi con", n, "términos de la serie de Gregory-Leibniz es:", piAproximado
FinAlgoritmo