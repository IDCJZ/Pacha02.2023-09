//Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.

Algoritmo DeterminarTerminaEn4
    Definir numero Como Entero
    
    Escribir "Ingrese un número:"
    Leer numero
    
    // Obtener el último dígito del número
    Definir ultimoDigito Como Entero
    ultimoDigito <- numero Mod 10
    
    Si ultimoDigito = 4 Entonces
        Escribir "El número termina en 4."
    Sino
        Escribir "El número no termina en 4."
    FinSi
FinAlgoritmo