Proceso ejercicio10
	Escribir "Ingresa un numero: "
	Leer  numero0
	
	numero1<-Longitud(numero0)
	numero2<-SubCadena(numero0,numero1,numero1)
	numero3<-ConvertirANumero(numero2)
	Si numero3 <> 1 y numero3 <> 3 y numero3 <> 5 y numero3 <> 7 y numero3<>9 Entonces
		Escribir "el numero: ", numero0
		Escribir "es par"
	SiNo
		
		Escribir "el numero: ", numero0
		Escribir "es impar"
		
		
	Fin Si
	

	
FinProceso
