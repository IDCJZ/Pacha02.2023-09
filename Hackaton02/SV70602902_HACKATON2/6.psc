Proceso SUELDO
	BANDERA<-Verdadero
	Mientras BANDERA Hacer
		Escribir " ESCRIBE EL N° DE HORAS "
		LEER HORAS
		Si HORAS = TRUNC(HORAS) Entonces
			Si HORAS <= 40 Entonces
				Escribir " POR TRABAJAR ", HORAS, " HORAS, SE TE PAGARÁ ", (HORAS*20), "$"
			SiNo
				Si HORAS > 40  Entonces
					Escribir " ESTA SEMANA TRABAJASTE ", (HORAS-40), " HORAS EXTRA "
					Escribir " POR TRABAJAR ", HORAS, " HORAS, SE TE PAGARÁ ", ((HORAS-40)*25)+800, "$"
				Fin Si
			Fin Si
		SiNo
			Escribir " NUMERO DE HORAS NO VALIDO "
		Fin Si
	Fin Mientras
	
	
	
	
FinProceso
