Proceso ejercicio11
	Escribir "INGRESE EL PRIMER NUMERO: "
	Leer numero1
	Escribir "INGRESE EL SEGUNDO NUMERO: "
	Leer numero2
	Escribir "INGRESE EL TERCER NUMERO: "
	Leer numero3
	
	Si numero1>numero2 y numero1> numero3 Entonces
		Escribir "el numero mayor es: ",numero1
	SiNo
		Si numero2>numero1 y numero2> numero3 Entonces
			Escribir "el numero mayor es: ",numero2
		SiNo
			Si numero3>numero1 y numero3> numero2 Entonces
				Escribir "el numero mayor es: ",numero3
			Fin Si
		Fin Si
	Fin Si
FinProceso
