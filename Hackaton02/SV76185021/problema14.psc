Proceso problema14
	Escribir "Escribir un numero entero entre 1 y 9: "
	Leer num1
	contador <- 2
	divExactos <- 0
	Mientras contador <= num1 Hacer
		si (num1 MOD contador) == 0 Entonces
			divExactos <- divExactos + 1
		FinSi
		contador <- contador +1
	FinMientras
	si divExactos > 1 Entonces
		Escribir "El numero no es primo"
	SiNo
		Escribir "El numero es primo"
	FinSi
FinProceso
