Proceso ejercicio19
	Escribir "INGRESE EL TIPO DE EMPLEADO: CAJERO(01), SERVIDOR(02), PREPARADOR DE MEZCLAS(03), MANTENIMIENTO(04): "
	Leer tipo
	Segun tipo Hacer
		01:
			Escribir "INGRESE LOS DIAS TRABAJADOS"
			Leer dia
			Si dia>= 0 y dia<=6 Entonces
				pago<-dia*56
				Escribir "Tipo de empleado: CAJERO"
				Escribir "Los dias trabajados: ", dia
				Escribir "Su pago es de: ", pago
			SiNo
				Escribir "SOLO SE ACEPTA COMO MAXIMO 6 DIAS"
			Fin Si
			
		02:
			Escribir "INGRESE LOS DIAS TRABAJADOS"
			Leer dia
			Si dia>= 0 y dia<=6 Entonces
				pago<-dia*64
				Escribir "Tipo de empleado: SERVIDOR"
				Escribir "Los dias trabajados: ", dia
				Escribir "Su pago es de: ", pago
			SiNo
				Escribir "SOLO SE ACEPTA COMO MAXIMO 6 DIAS"
			Fin Si
		03:
			Escribir "INGRESE LOS DIAS TRABAJADOS"
			Leer dia
			Si dia>= 0 y dia<=6 Entonces
				pago<-dia*80
				Escribir "Tipo de empleado: PREPARADOR DE MEZCLAS"
				Escribir "Los dias trabajados: ", dia
				Escribir "Su pago es de: ", pago
			SiNo
				Escribir "SOLO SE ACEPTA COMO MAXIMO 6 DIAS"
			Fin Si
		De Otro Modo:
		04:
			Escribir "INGRESE LOS DIAS TRABAJADOS"
			Leer dia
			Si dia>= 0 y dia<=6 Entonces
				pago<-dia*48
				Escribir "Tipo de empleado: MANTENIMIENTO"
				Escribir "Los dias trabajados: ", dia
				Escribir "Su pago es de: ", pago
			SiNo
				Escribir "SOLO SE ACEPTA COMO MAXIMO 6 DIAS"
			Fin Si
	Fin Segun
	
FinProceso
