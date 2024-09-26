Proceso sumadepares
	Definir contador,suma como entero
	contador=0
	suma=0
	Mientras contador<=1000 Hacer
		contador<-contador+1
		si contador % 2 = 0
			suma<-suma+contador
		FinSi
	Fin Mientras
	
	Escribir "Suma de pares= ",suma 
	
FinProceso
