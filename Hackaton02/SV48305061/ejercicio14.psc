Proceso ejercico14
	Escribir "INGRE UN NUMERO DEL 1 AL 10 PARA DETERMINAR SI ES PRIMO O COMPUESTO"
	Leer numero0

	Si numero0<=10 y numero0>0 Entonces
		Si numero0<>2 y numero0<>3 y numero0<>5 y numero0<>7 Entonces
			Escribir "El numero ingresado: ", numero0," es un compuesto"
		SiNo
			Escribir "El numero ingresado: ", numero0," es primo"
		Fin Si
	SiNo
		Escribir "El numero ingresado no esta en el rango"
	Fin Si
FinProceso
