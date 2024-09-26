Algoritmo ejercicio_38
	// Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
	Definir numero, sumaDivisores, divisor Como Entero
    
    Escribir "Ingrese un número: "
    Leer numero
    
    sumaDivisores <- 0
    
    Para divisor <- 1 Hasta numero - 1 Hacer
        Si numero % divisor = 0 Entonces
            sumaDivisores <- sumaDivisores + divisor
        FinSi
    FinPara
    
    Si sumaDivisores = numero Entonces
        Escribir "El número ", numero, " es un número perfecto."
    Sino
        Escribir "El número ", numero, " no es un número perfecto."
    FinSi
FinAlgoritmo
