Proceso NumeroNegativo
	bandera <- Verdadero
	Mientras bandera Hacer
		Escribir " ingrese un numero entero : "
		Leer NUMBERNEGATIVE
		Si NUMBERNEGATIVE == TRUNC(NUMBERNEGATIVE) Entonces
			Si NUMBERNEGATIVE < 0 Entonces
				Escribir  " ESTE NUMEOR ES NEGATIVO "
			SiNo
				Escribir  " ESTE NUMERO ES POSITIVO "
			Fin Si
		SiNo
			Escribir " ESTE NUMERO NO ES ENTERO "
		Fin Si
		Escribir  " si deseas continuar presiona 1 si deseas salir 0 "
		Leer opcionsalir
		si opcionsalir = 0 Entonces
			bandera <- falso
		FinSi
	Fin Mientras
	
FinProceso
