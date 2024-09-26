//Hacer un algoritmo en Pseint que lea un número entero por el teclado y determinar si es negativo.
Algoritmo DeterminarNegativo
    Definir numero, esNegativo Como Entero
    
    Escribir "Ingrese un número entero:"
    Leer numero
    
    Si numero < 0 Entonces
        esNegativo <- Verdadero
    Sino
        esNegativo <- Falso
    FinSi
    
    Si esNegativo Entonces
        Escribir "El número ingresado es negativo."
    Sino
        Escribir "El número ingresado no es negativo."
    FinSi
FinAlgoritmo