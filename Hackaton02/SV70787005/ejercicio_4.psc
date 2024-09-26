Algoritmo ejercicio_4
	// Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
	Definir num1, num2, num3, temp Como Entero
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el segundo número:"
    Leer num2
    Escribir "Ingrese el tercer número:"
    Leer num3
    Si num1 > num2 Entonces
        temp = num1
        num1 = num2
        num2 = temp
    Fin Si
    Si num2 > num3 Entonces
        temp = num2
        num2 = num3
        num3 = temp
    Fin Si
    Si num1 > num2 Entonces
        temp = num1
        num1 = num2
        num2 = temp
    Fin Si
	
    Escribir "Los números ordenados de menor a mayor son:"
	escribir num1
	escribir num2
	escribir num3

FinAlgoritmo
