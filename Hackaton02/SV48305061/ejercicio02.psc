Proceso ejercicio02
	Escribir "Digite un numero entero:" 
	Leer  numero1
	Si numero1 >= 0  Entonces
		Escribir "El numero ingresado es correcto"
	SiNo
		Escribir "el numero ingresado es negativo"
		Repetir
			Escribir "digite otra vez: "
			Leer numero1
		Hasta Que numero1 >= 0
			Escribir "El numero ingresado es correcto"
	Fin Si
FinProceso
