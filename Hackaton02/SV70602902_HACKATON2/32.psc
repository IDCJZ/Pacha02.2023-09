Proceso CiudadConMayorPoblacion
	
	Definir poblacion_maxima Como Entero

	poblacion_maxima <- 0
	
	Para i <- 1 Hasta 11 Hacer
		Escribir "Ingrese la población de la ciudad ", i, ":"
		Leer poblacion_ciudad
		
		Si poblacion_ciudad > poblacion_maxima Entonces
			poblacion_maxima <- poblacion_ciudad
			ciudad_con_poblacion_maxima <- Ciudad + i
		Fin Si
	Fin Para
	
	Escribir "La ciudad con la población más alta es: ", ciudad_con_poblacion_maxima, " con una población de ", poblacion_maxima
FinProceso
