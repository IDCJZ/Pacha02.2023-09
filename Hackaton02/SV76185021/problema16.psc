Proceso problema16
	Definir num1 Como Entero
	Escribir "Escribir un numero para calcular una fecha: "
	Leer num1
	
	dia <- trunc(num1/1000000)
	num1 <- num1 MOD 1000000
	mes <- trunc(num1/10000)
	anio <- num1 MOD 10000
	Escribir "la fecha es el ",dia," del ",mes," del ",anio
FinProceso
