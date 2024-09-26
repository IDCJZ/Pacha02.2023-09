Proceso AproximacionPi
		Escribir "Ingrese el número de términos para la aproximación:"
		Leer n
		suma <- 3
		signo <- -1
		denominador <- 2
		Para i <- 1 Hasta n Hacer
			termino <- 4 / (denominador * (denominador + 1) * (denominador + 2))
			suma <- suma + (signo * termino)
			signo <- signo * (-1)
			denominador <- denominador + 2
		FinPara
		Escribir "La aproximación de pi con ", n, " términos es: ", suma
FinProceso
