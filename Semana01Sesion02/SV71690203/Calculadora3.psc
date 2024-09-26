Proceso Calculadora3
	Escribir "Bienvenido a la calculadora"
	Escribir "Digite la operacion a realizar"
	Escribir "Para sumar digita 1"
	Escribir "Para restar digita 2"
	Escribir "Para Multiplicar digita 3"
	Escribir "Para dividir digita 4"
	Leer Operador
	Si Operador <> 1 y Operador <> 2 y Operador <> 3 y Operador <> 4 Entonces
		Escribir "Operacion no valida"
	SiNo
		Escribir "Digita el primer numero para calcular"
		Leer PrimerNumero
		Escribir "Digita el segundo numero para calcular"
		Leer SegundoNumero
		Segun Operador Hacer
			1:
				respuesta<- PrimerNumero + SegundoNumero
			2:
				respuesta<- PrimerNumero - SegundoNumero
			3:
				respuesta<- PrimerNumero * SegundoNumero
			De Otro Modo:
				respuesta<- PrimerNumero / SegundoNumero
		Fin Segun
		Escribir "La respuesta es: ", respuesta
		
	FinSi
	
FinProceso
