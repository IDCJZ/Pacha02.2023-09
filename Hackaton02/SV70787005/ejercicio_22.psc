Algoritmo ejercicio_22
	// Hacer un algoritmo en Pseint para calcular la suma de los n primeros números
	Definir n Como Entero
    Definir suma Como Entero
	
    Escribir "Ingrese un número entero positivo (n):"
    Leer n
	
    Si n <= 0 Entonces
        Escribir "Por favor, ingrese un número entero positivo."
    Sino
        suma = (n * (n+1)) / 2
        Escribir "La suma de los primeros ", n, " números enteros es: ", suma
    Fin Si
FinAlgoritmo
