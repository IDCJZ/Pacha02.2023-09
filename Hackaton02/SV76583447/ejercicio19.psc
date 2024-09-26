Proceso heladeria
	Definir identificador,diasTrabajados Como Entero
	Definir pago Como Real
	Definir  empleado como caracter
	Escribir "Ingrese ID del empleado:"
	leer identificador
	Escribir "Dias trabajados:"
	leer diasTrabajados
	
	Si diasTrabajados <= 6
		si identificador == 10
			pago <- 56 * diasTrabajados
			empleado <- "cajero"
		SiNo
			si identificador == 20
				pago <- 64 * diasTrabajados
				empleado <- "servidor"
			SiNo
				si identificador == 30
					pago <- 80 * diasTrabajados
					empleado <- "preparador de mezclas"
				SiNo
					pago <- 48 * diasTrabajados
					empleado <- "mantenimiento"
				FinSi
			FinSi
		FinSi
		Escribir "Tipo de empleado: ",empleado
		Escribir "Cantidad a pagar: ",pago
	SiNo
		Escribir "Mas de 6 dias no puede ingresar"
	FinSi

	
	
	
	
	
FinProceso
