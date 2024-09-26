//Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
Algoritmo CalcularHoraEnUnSegundo
    Definir hora_actual, hora_futura Como Caracter
    Definir hh, mm, ss Como Entero

    Escribir "Ingrese la hora actual en formato HH:MM:SS: "
    Leer hora_actual

    Extraer hora_actual[1..2] Como Entero -> hh
    Extraer hora_actual[4..5] Como Entero -> mm
    Extraer hora_actual[7..8] Como Entero -> ss

    ss <- ss + 1

    Si ss >= 60 Entonces
        ss <- 0
        mm <- mm + 1
    Fin Si

    Si mm >= 60 Entonces
        mm <- 0
        hh <- hh + 1
    Fin Si

    Si hh >= 24 Entonces
        hh <- 0
    Fin Si

    hora_futura <- Concatenar(hh, ":", mm, ":", ss)

    Escribir "La hora dentro de un segundo será: ", hora_futura
FinAlgoritmo