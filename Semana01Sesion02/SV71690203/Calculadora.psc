Proceso Calculadora
	
	Escribir "Bienvenido a la calculadora"
	Escribir "Digite la operacion a realizar"
	Escribir "Para sumar digita 1"
	Escribir "Para restar digita 2"
	Escribir "Para Multiplicar digita 3"
	Escribir "Para dividir digita 4"
	Leer Operador
	Escribir "Digita el primer numero para calcular"
	Leer PrimerNumero
	Escribir "Digita el segundo numero para calcular"
	Leer SegundoNumero
	Si Operador == "1" Entonces
		respuesta<- PrimerNumero + SegundoNumero
		Escribir "La respuesta es ", respuesta
	SiNo
		Si Operador == "2" Entonces
			respuesta<- PrimerNumero - SegundoNumero
			Escribir "La respuesta es ", respuesta
		SiNo
			Si Operador == "3" Entonces
				respuesta<- PrimerNumero * SegundoNumero
				Escribir "La respuesta es ", respuesta
			SiNo
				Si Operador == "4" Entonces
					respuesta<- PrimerNumero / SegundoNumero
					Escribir "La respuesta es ", respuesta
				SiNo
					Escribir "Operacion no valida"
				Fin Si
			Fin Si
		Fin Si
	Fin Si
	
FinProceso
