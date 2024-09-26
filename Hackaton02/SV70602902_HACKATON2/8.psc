Proceso NOTAS
	BANDERA<-Verdadero
	Mientras BANDERA Hacer
		Escribir " INGRESE LA PRIMERA NOTA "
		LEER NOTA1
		Si 0<NOTA1 Y 20>=NOTA1 Entonces
			Escribir " INGRESE LA SEGUNDA NOTA "
			Leer NOTA2
			Si 0<NOTA2 Y 20>=NOTA2 Entonces
				Escribir " INGRESE LA TERCER NOTA "
				Leer NOTA3
				Si 0<NOTA3 Y 20>=NOTA3 Entonces
					Si ((NOTA1 + NOTA2 + NOTA3)/3)>=13 Y ((NOTA1 + NOTA2 + NOTA3)/3)<=20 Entonces
						Escribir  " FELICIDADES APROBASTE CON UN ", redon(NOTA1 + NOTA2 + NOTA3)/3, " DE PROMEDIO"
					SiNo
						Si ((NOTA1 + NOTA2 + NOTA3)/3)<13 Entonces
							Escribir  " TU NOTA FINAL ES ", redon(NOTA1 + NOTA2 + NOTA3)/3, " DE PROMEDIO, DESAPROBASTE"
						Fin Si
					Fin Si
				SiNo
					Escribir  " LAS NOTAS SOLO SON DEL 0 AL 20"
				Fin Si
			SiNo
				Escribir  " LAS NOTAS SOLO SON DEL 0 AL 20"
			Fin Si
		SiNo
			Escribir  " LAS NOTAS SOLO SON DEL 0 AL 20"
		Fin Si
	Fin Mientras
	
FinProceso
