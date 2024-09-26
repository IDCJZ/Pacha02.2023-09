Proceso MCDe
		Escribir "Ingrese el primer número:"
		Leer a
		Escribir "Ingrese el segundo número:"
		Leer b
		mcd <- a
		resto <- b
		Mientras resto <> 0 Hacer
			temp <- resto
			resto <- mcd % resto
			mcd <- temp
		FinMientras
		Escribir "El M.C.D de ", a, " y ", b, " es: ", mcd

FinProceso
