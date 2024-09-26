Proceso numerosEnterosPositivos
	Definir a,b,c,d,cuadrado,suma Como Entero
	definir med como real
	Escribir "Ingresar los 4 numeros"
	leer a,b,c,d
	
	contador <- 0
	
	si a mod 2 == 0
		contador <- contador + 1
	FinSi
	si b mod 2 == 0
		contador <- contador + 1
	FinSi
	si c mod 2 == 0
		cuadrado <- b^2
		contador <- contador + 1
		Escribir "El tercero es par y el cuadrado del segundo es: ",cuadrado
	FinSi
	si d mod 2 == 0
		contador <- contador + 1
	FinSi
	
	Escribir "Cantidad de numeros pares: ",contador
	
	
	si a > b & a > c & a > d
		Escribir "El numero mayor es: ",a
	SiNo
		si b > a & b > c & b > d
			Escribir "El numero mayor es: ",b
		SiNo
			si c > a & c > b & c > d
				Escribir "El numero mayor es: ",c
			SiNo
				Escribir "El numero mayor es: ",d
			FinSi
		FinSi
	FinSi
	
	si a < d
		med <- (a+b+c+d)/4
		Escribir "El primero es menor que el cuarto y la media aritmetica es: ",med
	FinSi
	
	si b > c
		si c > 50 & c < 700
			suma <- a+b+c+d
			Escribir "Suma de los cuatro numeros: ",suma
		FinSi
	FinSi
	
	
	
	
	
FinProceso
