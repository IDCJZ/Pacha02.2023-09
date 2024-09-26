Algoritmo ejercicio_36
	Definir n, i, a, b, c Como Entero
    
    Escribir "Ingrese la cantidad de términos de la serie de Fibonacci a generar: "
    Leer n
    
    a <- 0
    b <- 1
    
    Escribir "Serie de Fibonacci:"
    
    Para i <- 1 Hasta n Hacer
        Escribir a
        c <- a + b
        a <- b
        b <- c
    FinPara
	
FinAlgoritmo
