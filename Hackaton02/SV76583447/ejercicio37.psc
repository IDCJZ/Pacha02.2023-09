Proceso MCD
	Definir a,b,aux,residuo Como Entero
	
	Repetir
		Escribir "Ingrese el primer numero entero positivo:"
		leer a
	Hasta Que a>0
	
	Repetir
		Escribir "Ingrese el segundo numero entero positivo"
		leer b
	Hasta Que b>0 
	
	si b>a Entonces
		aux=b
		b=a
		a=aux
	FinSi
	Escribir "a=", a
	Escribir "b=", b
	Residuo= a mod b
	
	Mientras Residuo>0 Hacer
		aux=b
		b=Residuo
		a=aux
		Residuo= a mod b
	FinMientras
	
	Escribir "MCD= ", B
FinProceso
