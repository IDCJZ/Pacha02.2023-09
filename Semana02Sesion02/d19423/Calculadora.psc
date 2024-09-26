Proceso Calculadora
	Escribir "Bienvenido a la calculadora"
	Escribir "Selecciona la operacion:"
	Escribir "Para Sumar digita 1"
	Escribir "Para Restar digita 2"
	Escribir "Para Multiplicar digita 3"
	Escribir "Para Dividir digita 4"
	Leer Operador
	Escribir  "Digita el primer numero para calcular:"
	Leer PrimerNumero
	Escribir "Digita el segundo numero para calcular"
	Leer SegundoNumero
	Si Operador == "1" Entonces
		respuesta <- PrimerNumero + SegundoNumero
		Escribir "La respuesta de la suma es ", respuesta
	SiNo
		Si Operador == "2" Entonces
			respuesta <- PrimerNumero - SegundoNumero
			Escribir "La respuesta de la resta es ", respuesta
		SiNo
			Si Operador == "3" Entonces
				respuesta <- PrimerNumero * SegundoNumero
				Escribir "La respuesta de la multiplicacion es ", respuesta
			SiNo
				Si Operador == "4" Entonces
					respuesta <- PrimerNumero / SegundoNumero
					Escribir "La respuesta de la division es ", respuesta
				SiNo
					Escribir "Operacion no valida"
				Fin Si
			Fin Si
		Fin Si
	Fin Si
FinProceso