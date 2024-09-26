Algoritmo ejercicio_40
	Definir n Como Entero
    Definir p Como Real
    p <- 3.0  // Inicializamos la aproximación de pi con 3.0
    Escribir "Ingrese la cantidad de términos para la aproximación de Pi: "
    Leer n
    Para i <- 1 Hasta n Con Paso +1 Hacer
		p <- p + 4.0 / ((2 * i) * (2 * i + 1) * (2 * i + 2))
	Fin Para
    Escribir "La aproximación de Pi con ",n, "términos es: ", p
FinAlgoritmo