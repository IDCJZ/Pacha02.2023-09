Proceso ODERNAR_DE_MENOR_A_MAYOR
	BANDERA <- Verdadero
	Mientras BANDERA Hacer
		Escribir " INGRESA TRES NUMEROS PARA PODER ORDENARLOS :"
		Escribir " INGRESA EL PRIEMER NUMERO : "
		LEER PRIMER
		Si PRIMER = TRUNC(PRIMER) Entonces
			Escribir " INGRESA EL SEGUNDDO NUMERO : "
			Leer SEGUND
			Si SEGUND = TRUNC(SEGUND) Entonces
				Escribir " INGRESA EL TERCER NUMERO : "
				Leer TERCER
				Si TERCER = TRUNC(TERCER) Entonces
					Si PRIMER < SEGUND Y SEGUND < TERCER Entonces
						Escribir " EL ORDEN ES ", PRIMER "<" SEGUND "<" TERCER
					SiNo
						Si PRIMER > SEGUND Y SEGUND > TERCER Entonces
							Escribir " EL ORDEN ES ", TERCER "<" SEGUND "<" PRIMER
						SiNo
							Si PRIMER > SEGUND Y TERCER < PRIMER Entonces
								Escribir " EL ORDEN ES ", SEGUND "<" TERCER "<" PRIMER
							SiNo
								Si PRIMER < SEGUND Y PRIMER < TERCER Entonces
									Escribir " EL ORDEN ES ", PRIMER "<" TERCER "<" SEGUND
								SiNo
									Si PRIMER > TERCER Y SEGUND > PRIMER Entonces
										Escribir " EL ORDEN ES ", TERCER "<" PRIMER "<" SEGUND
									SiNo
										Si PRIMER > SEGUND Y TERCER > PRIMER Entonces
											Escribir " EL ORDEN ES ", SEGUND "<" PRIMER "<" TERCER
										Fin Si
									Fin Si
								Fin Si
							Fin Si
						Fin Si
					Fin Si
				SiNo
					ESCRIBIR " ESTE NUMEOR NO ES ENTERO "
				Fin Si
			SiNo
				ESCRIBIR " ESTE NUMEOR NO ES ENTERO "
			Fin Si
			
		SiNo
			ESCRIBIR " ESTE NUMEOR NO ES ENTERO "
		Fin Si
		Escribir " SI DESEAS SALIR PRESIONA 0 SINO 1 "
		LEER OPCIONSALIR
		SI OPCIONSALIR = 0 Entonces
			BANDERA<-Falso
		FinSi
	
	Fin Mientras
	
FinProceso
