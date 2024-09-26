//Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.

Algoritmo EncontrarNumeroMayor
    Definir num1, num2, mayor Como Entero
    
    Escribir "Ingrese el primer número:"
    Leer num1
    
    Escribir "Ingrese el segundo número:"
    Leer num2
    
    Si num1 > num2 Entonces
        mayor <- num1
    Sino
        mayor <- num2
    FinSi
    
    Escribir "El número mayor es: " + ConvertirATexto(mayor)
FinAlgoritmo