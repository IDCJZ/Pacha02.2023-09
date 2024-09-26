Proceso ejercicio31
	escribir "INGRESE LOS 10 NUMEROS:"
	Dimension dimen[10]
	cont<-0
	cont1<-0
	Para i<-1 Hasta 10 Con Paso 1 Hacer
		Leer nro
		
		dimen[i] = nro
		Si dimen[i] es par  Entonces
			pares <-dimen[i] 
			cont<-cont+pares
			Escribir "es par: ", pares
		SiNo
			Si dimen[i] es impar Entonces
				impares<-dimen[i]
				cont1<-cont1+impares
				Escribir "es impar: ", impares
			FinSi
		Fin Si
	Fin Para
	Escribir "los suma de numeros impares es: ", cont1
	Escribir "los suma numeros pares es: ", cont
	

FinProceso
