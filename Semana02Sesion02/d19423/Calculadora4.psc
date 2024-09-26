Proceso Calculadora4
	Escribir "Bienvenido a la calculadora"
	Escribir "Selecciona la operacion:"
	Escribir "Para Sumar digita 1"
	Escribir "Para Restar digita 2"
	Escribir "Para Multiplicar digita 3"
	Escribir "Para Dividir digita 4"
	Leer Operador
	si Operador < 0 y Operador > 5 Entonces
		Escribir "Operacion no valida"
	SiNo
		Escribir "Digita el primer numero para calcular:"
		Leer PrimerNumero
		Escribir "Digita el segundo numero para calcular:"
		Leer SegundoNumero
		Segun Operador Hacer
			1:
				respuesta <- PrimerNumero + SegundoNumero
			2:
				respuesta <- PrimerNumero - SegundoNumero
			3:
				respuesta <- PrimerNumero * SegundoNumero
			De Otro Modo:
				si SegundoNumero = 0 Entonces
					Escribir "El segundo numero no puede ser 0"
				sino
					respuesta <- PrimerNumero / SegundoNumero
				FinSi
		Fin Segun
		Escribir "La respuesta es: ", respuesta
	FinSi
FinProceso