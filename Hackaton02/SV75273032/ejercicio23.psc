// Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.

Algoritmo SumaImpares
    Definir n, suma, numero Como Entero
    
    Escribir "Ingrese un número entero positivo (n):"
    Leer n
    
    suma <- 0  // Inicializamos la variable suma en cero
    
    Para numero <- 1 Hasta n Con Paso 2 Hacer
        suma <- suma + numero  // Sumamos el número impar a la suma
    FinPara
    
    Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
    
FinAlgoritmo