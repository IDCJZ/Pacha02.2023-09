//Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
Algoritmo IndicarDiaDeLaSemana
    Definir numero Como Entero
    Definir dia Como Caracter

    Escribir "Ingrese un número del 1 al 7: "
    Leer numero

    Segun numero Hacer
        1:
            dia <- "Domingo"
        2:
            dia <- "Lunes"
        3:
            dia <- "Martes"
        4:
            dia <- "Miércoles"
        5:
            dia <- "Jueves"
        6:
            dia <- "Viernes"
        7:
            dia <- "Sábado"
        De Otro Modo:
            dia <- "Número fuera de rango"
    Fin Segun

    Escribir "El número ", numero, " corresponde a ", dia, "."
FinAlgoritmo
