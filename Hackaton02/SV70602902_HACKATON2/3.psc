Proceso TERMINAEN4
	BANDERA <- Verdadero
	Mientras BANDERA Hacer
		Escribir " INGRESA EL NUMERO : "
		Leer TERMINA
		Si TERMINA mod 10 = 4  Entonces
			Escribir " ESTE NUMERO TERMINA EN 4 "
		SiNo
			Escribir " ESTE NUMERO NO TERMINA EN 4 "
		Fin Si
		
		Escribir " SI DESEAS SALIR PRESIONA 0 SINO 1 "
		LEER OPCIONSALIR
		SI OPCIONSALIR = 0 Entonces
			BANDERA<-Falso
		FinSi
	Fin Mientras
	
	
FinProceso
