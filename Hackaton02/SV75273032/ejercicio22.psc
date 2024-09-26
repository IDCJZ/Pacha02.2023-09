// Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.

Algoritmo SumaNumeros
    Definir n, suma, contador Como Entero
    
    Escribir "Ingrese la cantidad de números que desea sumar:"
    Leer n
    
    suma <- 0  // Inicializamos la variable suma en cero
    
    Para contador <- 1 Hasta n Con Paso 1 Hacer
        suma <- suma + contador  // Sumamos el valor del contador a la suma
    FinPara
    
    Escribir "La suma de los primeros ", n, " números es: ", suma
    
FinAlgoritmo  