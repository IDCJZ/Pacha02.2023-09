//16. Hacer un algoritmo en Pseint que lea un número y según ese número, 
//indique el día que corresponde.


Proceso DIAS
	BANDERA<-Verdadero
	Mientras BANDERA Hacer
		Escribir " INGRESE UN NUMERO DEL 1 AL 7"
		Leer DIA
		Si DIA=1 Entonces
			Escribir " ES LUNES "
		SiNo
			Si DIA = 2 Entonces
				Escribir " ES MARTES "
			SiNo
				Si DIA = 3 Entonces
					Escribir " ES MIERCOLES "
				SiNo
					Si DIA = 4 Entonces
						Escribir " ES JUEVES "
					SiNo
						Si DIA = 5 Entonces
							Escribir " ES VIERNES "
						SiNo
							Si DIA = 6 Entonces
								Escribir " ES SABADO "
							SiNo
								Si DIA = 7 Entonces
									Escribir " ES DOMINGO "
								SiNo
									Si DIA<1 O DIA>7 Entonces
										Escribir "SOLO NUMEROS DEL 1 AL 7"
									Fin Si
								Fin Si
							Fin Si
						Fin Si
					Fin Si
				Fin Si
			Fin Si
		Fin Si
	Fin Mientras
	
FinProceso
