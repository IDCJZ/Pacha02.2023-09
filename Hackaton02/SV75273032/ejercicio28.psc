// Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo repetir.

Algoritmo SumaPrimerosCienNumeros
    Definir numero, suma como Entero
    numero <- 1
    suma <- 0
    Repetir
        suma <- suma + numero
        numero <- numero + 1
    Hasta Que numero > 100
    Escribir "La suma de los primeros cien números es:", suma
FinAlgoritmo