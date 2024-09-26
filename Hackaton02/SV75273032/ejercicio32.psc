// Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)

Algoritmo CiudadConMasPoblacion
    Definir provincias[3][11] como Entero  // Matriz para almacenar la población de cada ciudad
    Definir maxPoblacion, ciudadMax as Entero
    
    // Aquí debes llenar la matriz provincias con los datos de población de cada ciudad

    maxPoblacion <- -1  // Inicializar con un valor negativo para comparar con la población real

    // Recorre todas las provincias y ciudades para encontrar la población máxima
    Para provincia <- 1 Hasta 3 Hacer
        Para ciudad <- 1 Hasta 11 Hacer
            Si provincias[provincia][ciudad] > maxPoblacion Entonces
                maxPoblacion <- provincias[provincia][ciudad]
                ciudadMax <- ciudad
            FinSi
        FinPara
    FinPara

    Escribir "La ciudad con la población más grande es la ciudad ", ciudadMax, " con una población de ", maxPoblacion, " habitantes."
FinAlgoritmo