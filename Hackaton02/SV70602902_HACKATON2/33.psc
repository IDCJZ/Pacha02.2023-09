Proceso ContinuarPrograma
	bandera<-Verdadero
	Mientras bandera Hacer
		Escribir "¿Deseas continuar con el programa? (si/no)"
		Leer respuesta
		Si respuesta = "si" o respuesta="SI" o respuesta="Si" Entonces
			Escribir "Continuando con el programa..."
			Escribir " Bienvenido de nuevo "
		SiNo
			bandera<-Falso
		FinSi
	Fin Mientras
FinProceso
