//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma 
//con su número identificador y salario diario correspondiente:

Proceso HELADERIA
	
	BANDERA<-Verdadero
	Mientras BANDERA Hacer
		Escribir " INGRESE EL NUMERO IDENTIFICADOR "
		Leer IDENTIFICADOR
		Si IDENTIFICADOR <> TRUNC(IDENTIFICADOR) Entonces
			Escribir " SOLO NUMEROS ENTEROS "
		SiNo
			Si IDENTIFICADOR > 49 O IDENTIFICADOR < 10 Entonces
				Escribir " ERROR, MAXIMO 49 "
			SiNo
				Escribir " INGRESE EL NUMERO DE DIAS QUE TRABAJÓ "
				Leer DIA
				Cajero = (56*DIA)
				Servidor = (64*DIA)
				Preparador_de_mezclas = (80*DIA)
				Mantenimiento = (48*DIA)
				Si DIA < 7 Entonces
					Si IDENTIFICADOR >= 10 Y IDENTIFICADOR < 20 Entonces
						Escribir " EL NUMERO INGRESADO REPRESENTA AL TIPO CAJERO"
						Escribir " EL TOTAL A PAGAR ES DE ", Cajero, " $ "
					SiNo
						Si IDENTIFICADOR >= 20 Y IDENTIFICADOR < 30 Entonces
							Escribir " EL NUMERO INGRESADO REPRESENTA AL TIPO SERVIDOR"
							Escribir " EL TOTAL A PAGAR ES DE ", Servidor, " $ "
						SiNo
							Si IDENTIFICADOR >= 30 Y IDENTIFICADOR < 40 Entonces
								Escribir " EL NUMERO INGRESADO REPRESENTA AL TIPO PREPARADOR DE MEZCLA"
								Escribir " EL TOTAL A PAGAR ES DE ", Preparador_de_mezclas, " $ "
							SiNo
								Si IDENTIFICADOR >= 40 Y IDENTIFICADOR < 50 Entonces
									Escribir "EL NUMERO INGRESADO REPRESENTA AL TIPO MANTENIMIENTO"
									Escribir " EL TOTAL A PAGAR ES DE ", Mantenimiento, " $"
								FinSi
								
							Fin Si
						Fin Si
					Fin Si
				SiNo
					Escribir " ERROR, MAXIMO DE DIAS 6"
				Fin Si
			Fin Si
		Fin Si
		
			
	Fin Mientras
	
FinProceso
