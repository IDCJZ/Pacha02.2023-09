Proceso ejercicio39
	Definir nro Como Entero
	Definir i Como Entero
	Definir piaprox Como Real
	Escribir "ingrese el numero de terminos para la aproximacion de pi: "
	Leer  nro
	piaprox<-0
	Para i=0 Hasta nro-1 Hacer
		
		piaprox<- piaprox+((-1)^i)*(4/((2*i)+1))
	FinPara
	Escribir "la aproximacion de pi con ", nro, " terminos es: ", piaprox
	
FinProceso
