Proceso ejercicio38
	Escribir "ESCRIBE UN NUMERO: "
	Leer nro
	x<-2
	Mientras x <= nro Hacer
		si nro mod x == 0 Entonces
			perf<- perf+(nro/x)
		FinSi
		x=x+1
	Fin Mientras
	si perf==nro Entonces
		Escribir "El numero: ",nro," es perfecto"
	SiNo
		Escribir "El numero: ",nro," no es perfecto"
	FinSi

	
FinProceso
