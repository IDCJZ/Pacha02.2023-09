Proceso ejercicio03
	
	Escribir "Ingresa un numero: "
	Leer  numero0
	numero1<-ConvertirATexto(numero0)
	numero2<-Longitud(numero1)
	numero3<-SubCadena(numero1,numero2,numero2)
	Si numero3== "4" Entonces
		Escribir "El numero ingresado es correcto"
		Escribir "El ", numero0 " termina en : " , numero3
	SiNo
		Escribir "El numero ", numero0 " no termina en 4"
	Fin Si
	
FinProceso
