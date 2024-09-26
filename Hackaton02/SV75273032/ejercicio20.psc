//Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

¿Cuántos números son Pares?

¿Cuál es el mayor de todos?

Si el tercero es par, calcular el cuadrado del segundo.

Si el primero es menor que el cuarto, calcular la media de los 4 números.

Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

Algoritmo OperacionesConNumeros
    Definir num1, num2, num3, num4 Como Entero
    Definir pares Como Entero
    Definir mayor Como Entero
    Definir resultado Como Real

    Escribir "Ingrese el primer número entero positivo: "
    Leer num1

    Escribir "Ingrese el segundo número entero positivo: "
    Leer num2

    Escribir "Ingrese el tercer número entero positivo: "
    Leer num3

    Escribir "Ingrese el cuarto número entero positivo: "
    Leer num4

    pares <- 0

    Si num1 % 2 = 0 Entonces
        pares <- pares + 1
    Fin Si

    Si num2 % 2 = 0 Entonces
        pares <- pares + 1
    Fin Si

    Si num3 % 2 = 0 Entonces
        pares <- pares + 1
    Fin Si

    Si num4 % 2 = 0 Entonces
        pares <- pares + 1
    Fin Si

    mayor <- num1

    Si num2 > mayor Entonces
        mayor <- num2
    Fin Si

    Si num3 > mayor Entonces
        mayor <- num3
    Fin Si

    Si num4 > mayor Entonces
        mayor <- num4
    Fin Si

    Si num3 % 2 = 0 Entonces
        resultado <- num2 ^ 2
    Fin Si

    Si num1 < num4 Entonces
        resultado <- (num1 + num2 + num3 + num4) / 4
    Fin Si

    Si num2 > num3 Entonces
        Si num3 >= 50 Y num3 <= 700 Entonces
            resultado <- num1 + num2 + num3 + num4
        Fin Si
    Fin Si

    Escribir "Cantidad de números pares: ", pares
    Escribir "El mayor de todos es: ", mayor
    Si resultado <> 0 Entonces
        Escribir "Resultado de la operación: ", resultado
    Fin Si
FinAlgoritmo