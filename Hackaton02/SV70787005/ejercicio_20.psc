Algoritmo ejercicio_20
	
	Definir num1, num2, num3, num4 Como Entero
    Definir cantidadPares Como Entero
    Definir mayorNumero Como Entero
    Definir resultado Como Real
	
    Escribir "Ingrese el primer número entero positivo:"
    Leer num1
	
    Escribir "Ingrese el segundo número entero positivo:"
    Leer num2
	
    Escribir "Ingrese el tercer número entero positivo:"
    Leer num3
	
    Escribir "Ingrese el cuarto número entero positivo:"
    Leer num4
	
    cantidadPares = 0
	
    Si num1 % 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    Fin Si
	
    Si num2 % 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    Fin Si
	
    Si num3 % 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    Fin Si
	
    Si num4 % 2 = 0 Entonces
        cantidadPares = cantidadPares + 1
    Fin Si
	
    mayorNumero = num1
	
    Si num2 > mayorNumero Entonces
        mayorNumero = num2
    Fin Si
	
    Si num3 > mayorNumero Entonces
        mayorNumero = num3
    Fin Si
	
    Si num4 > mayorNumero Entonces
        mayorNumero = num4
    Fin Si
	
    Si num3 % 2 = 0 Entonces
        resultado = num2 ^ 2
        Escribir "El cuadrado del segundo número es:", resultado
    Fin Si
	
    Si num1 < num4 Entonces
        resultado = (num1 + num2 + num3 + num4) / 4.0
        Escribir "La media de los 4 números es:", resultado
    Fin Si
	
    Si num2 > num3 Y num3 >= 50 Y num3 <= 700 Entonces
        resultado = num1 + num2 + num3 + num4
        Escribir "La suma de los 4 números es:", resultado
    Fin Si
	
    Escribir "Cantidad de números pares:", cantidadPares
    Escribir "El mayor número es:", mayorNumero
FinAlgoritmo
