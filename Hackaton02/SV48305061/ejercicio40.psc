Proceso ejercicio40
	Definir nro Como Entero
	Definir i Como Entero
	Definir piaprox Como Real
	
	Escribir "ingrese el numero de terminos para la aproximacion de pi: "
	Leer  nro
	pis<- 3
	factores <- 2
	
	Para i=1 Hasta nro Hacer
		si (i mod 2 = 0) Entonces
			pis<- pis - 4/(factores*(factores+1)*(factores+2))
		SiNo
			
			pis<- pis + 4/(factores*(factores+1)*(factores+2))
		FinSi
		factores=factores+2
	FinPara
	Escribir "la aproximacion de pi con ", nro, " terminos es: ", pis
FinProceso
