Proceso sumadeimpares__menoresoigualesaN
	Definir contador,suma,n como entero
	contador=0
	suma=0
	Escribir "Ingresar un numero"
	leer n
	
	
	Repetir
		
			contador<-contador+1
			si contador % 2 <> 0 
				suma<-suma+contador
			FinSi
		
	Hasta Que contador = n
	
	Escribir "Suma de impares= ",suma 
	
FinProceso
