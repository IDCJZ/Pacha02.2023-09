Proceso problema11
	Escribir "Ingrese 3 numeros: "
	Leer num1,num2,num3
	si num1 > num2 Entonces
		si num1 > num3 Entonces
			Escribir "El numero mayor es ",num1
		SiNo
			Escribir "El numero mayor es ",num3
		FinSi
	SiNo
		si num2 > num3 Entonces
			Escribir "El numero mayor es ",num2
		SiNo
			Escribir "El numero mayor es ",num3
		FinSi
	FinSi
	
FinProceso
