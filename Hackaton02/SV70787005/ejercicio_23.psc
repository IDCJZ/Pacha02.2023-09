Algoritmo ejercicio_23
	// Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
	Definir n Como Entero
    Definir suma Como Entero
	
    Escribir "Ingrese un número entero positivo (n):"
    Leer n
	
    Si n <= 0 Entonces
        Escribir "Por favor, ingrese un número entero positivo."
    Sino
        suma = 0
        Para i = 1 Hasta n Hacer
            Si i % 2 <> 0 Entonces
                suma = suma + i
            Fin Si
        Fin Para
        Escribir "La suma de los números impares menores o iguales a ", n, " es : ", suma
    Fin Si
FinAlgoritmo
