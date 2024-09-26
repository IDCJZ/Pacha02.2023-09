//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
Algoritmo OrdenarNumeros
    Definir num1, num2, num3, temp Como Entero
    
    Escribir "Ingrese el primer número:"
    Leer num1
    
    Escribir "Ingrese el segundo número:"
    Leer num2
    
    Escribir "Ingrese el tercer número:"
    Leer num3
    
    // Ordenar los números usando un algoritmo de selección
    Si num1 > num2 Entonces
        temp <- num1
        num1 <- num2
        num2 <- temp
    FinSi
    
    Si num2 > num3 Entonces
        temp <- num2
        num2 <- num3
        num3 <- temp
    FinSi
    
    Si num1 > num2 Entonces
        temp <- num1
        num1 <- num2
        num2 <- temp
    FinSi
    
    // Mostrar los números ordenados
    Escribir "Los números ordenados de menor a mayor son:"
    Escribir num1
    Escribir num2
    Escribir num3
FinAlgoritmo