Proceso FACTORIAL2
	Definir numero, factorial Como Entero
	
    Escribir "Ingrese un número:"
    Leer numero
	
    factorial <- 1
	
    Mientras numero > 1 Hacer
        factorial <- factorial * numero
        numero <- numero - 1
    Fin Mientras
	
    Escribir "El factorial de ", numero, " es: ", factorial
FinProceso
