Proceso ejercicio20
	Escribir "INGRESE LOS DATOS: "
	Leer numero0
	Leer numero1
	Leer numero2
	Leer numero3
	
	Si numero0 es par Entonces
		Escribir "El numero: ",numero0," es par"
	SiNo
		Escribir "El numero: ",numero0," es impar"
	Fin Si
	Si numero1 es par Entonces
		Escribir "El numero: ",numero1," es par"
	SiNo
		Escribir "El numero: ",numero1," es impar"
	Fin Si
	Si numero2 es par Entonces
		Escribir "El numero: ",numero2," es par"
	SiNo
		Escribir "El numero: ",numero2," es impar"
	Fin Si
	Si numero3 es par Entonces
		Escribir "El numero: ",numero3," es par"
	SiNo
		Escribir "El numero: ",numero3," es impar"
	Fin Si
	Si numero0> numero1 y numero0> numero2 y numero0> numero3 Entonces
		Escribir "El numero mayor es: ",numero0
	SiNo
		Si numero1> numero0 y numero1> numero2 y numero1> numero3 Entonces
			Escribir "El numero mayor es: ",numero1
		SiNo
			Si numero2> numero0 y numero2> numero1 y numero2> numero3 Entonces
				Escribir "El numero mayor es: ",numero2
			SiNo
				Si numero3> numero0 y numero3> numero1 y numero3> numero2 Entonces
					Escribir "El numero mayor es: ",numero3
				Fin Si
			Fin Si
		Fin Si
	Fin Si
	Si numero2 es par Entonces
		cuadrado<- 2^numero1
		Escribir "El cuadrado del segundo es:  ", numero1
	Fin Si
	
	Si numero0< numero3  Entonces
		edia<-(numero0+numero1+numero2+numero3)/4
		Escribir "La media de los 4 es: ",media
	Fin Si
	Si numero1>numero2  Entonces
		uma4<-numero0+numero1+numero2+numero3
		Escribir "La suma de los 4 numeros es: ",suma4
	Fin Si
FinProceso
