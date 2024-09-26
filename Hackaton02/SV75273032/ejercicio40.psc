// Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...


Algoritmo AproximacionPiNilakantha
    Definir n como Entero
    Definir piAproximado como Real

    piAproximado <- 3.0

    Escribir "Ingrese el número de términos para calcular la aproximación de Pi: "
    Leer n

    Para i <- 1 Hasta n Hacer
        denominador1 <- 2 * i
        denominador2 <- 2 * i + 1
        termino <- 4.0 / (denominador1 * denominador2 * (denominador1 + denominador2))
        
        Si i MOD 2 = 0 Entonces
            piAproximado <- piAproximado + termino
        Sino
            piAproximado <- piAproximado - termino
        FinSi
    FinPara

    Escribir "La aproximación de Pi con", n, "términos de la serie de Nilakantha es:", piAproximado
FinAlgoritmo
