Proceso Calcularfactorial
	
	Definir numero, factorial Como Entero
    
    Escribir "Ingrese un número para calcular su factorial: "
    Leer numero
    
    factorial = 1
    
    Si (numero < 0) Entonces
        Escribir "No se puede calcular el factorial de un número negativo."
    Sino Si (numero == 0) Entonces
			Escribir "El factorial de 0 es 1."
		Sino
			Para i = 1 Hasta numero
				factorial = factorial * i
			FinPara
			Escribir "El factorial de ", numero, " es ", factorial
		FinSi
	fin si
FinProceso
