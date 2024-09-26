Proceso NumeroPerfecto
		Escribir "Ingrese un número:"
		Leer numero
		suma <- 0
		Para i <- 1 Hasta numero-1 Hacer
			res <- numero mod i
			Si res = 0 Entonces
				suma <- suma + i
			FinSi
		FinPara
		Si suma = numero Entonces
			Escribir "El número ", numero, " es un número perfecto."
		Sino
			Escribir "El número ", numero, " no es un número perfecto."
		FinSi
FinProceso
