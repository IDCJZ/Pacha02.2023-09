Proceso ejercicio37
	Escribir "INGRESAR DATO 1:"
	Leer DATO1
	Escribir "INGRESAR DATO 2: "
	Leer DATO2
	si DATO1<DATO2 Entonces
		DATO3=DATO1
		DATO1=DATO2
		DATO2=DATO3
		Mientras DATO2<>0 Hacer
			RESIT<- DATO1 mod DATO2
			DATO1=DATO2
			DATO2=RESIT
		Fin Mientras
	FinSi
	Escribir DATO1
FinProceso
