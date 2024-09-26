Proceso MayorMenor
	Dimension numeros(20)
	Escribir "Ingrese los 20 números:"
	Para i <- 1 Hasta 20 Hacer
		Escribir "Número ", i, ":"
		Leer numeros(i)
	FinPara
	mayor <- numeros(1)
	menor <- numeros (1)
	Para i <- 2 Hasta 20 Hacer
		Si numeros(i) > mayor Entonces
			mayor <- numeros(i)
		FinSi
		Si numeros(i) < menor Entonces
			menor <- numeros(i)
		FinSi
	FinPara
	Escribir "El número mayor es: ", mayor
	Escribir "El número menor es: ", menor
FinProceso
