Proceso DeterminarMenorMayor
	
	Definir num1, num2, num3, highest, lowest Como Real
    
    Escribir "Ingrese el primer número: "
    Leer num1
    Escribir "Ingrese el segundo número: "
    Leer num2
    Escribir "Ingrese el tercer número: "
    Leer num3
    
    Si (num1 > num2) Entonces
        highest = num1
        lowest = num2
    Sino
        highest = num2
        lowest = num1
    FinSi
    
    Si (num3 > highest) Entonces
        highest = num3
    FinSi
    
    Si (num3 < lowest) Entonces
        lowest = num3
    FinSi
    
    Escribir "El número más alto es: ", highest
    Escribir "El número más bajo es: ", lowest
	
	
FinProceso
