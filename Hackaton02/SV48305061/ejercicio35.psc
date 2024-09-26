Proceso ejercicio35
	escribir "INGRESE LOS 20 NUMEROS:"
	Dimension dimen[20]
	Para i<-1 Hasta 20 Con Paso 1 Hacer
		Leer nro
		dimen[i] = nro
	Fin Para
	
	Para i<-1 Hasta 20 Con Paso 1 Hacer
		Si (i==1) Entonces
			mayors<-dimen[i]
			menors<-dimen[i]
		SiNo
			Si (dimen[i]>mayors) Entonces
				mayors<-dimen[i]
			FinSi
			Si (dimen[i]<menors) Entonces
				menors<-dimen[i]
			FinSi
		Fin Si
	Fin Para
	Escribir "El numero mayor es: ", mayors
	
FinProceso
