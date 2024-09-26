//Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.

Algoritmo DeterminarTresDigitos
    Definir numero Como Entero
    
    Escribir "Ingrese un número:"
    Leer numero
    
    Si numero >= 100 y numero <= 999 Entonces
        Escribir "El número tiene tres dígitos."
    Sino
        Escribir "El número no tiene tres dígitos."
    Fin Si
    
FinAlgoritmo