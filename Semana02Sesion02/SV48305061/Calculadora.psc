Proceso Calculadora
	Escribir "bienvenido a la calculadora"
	Escribir "selecciona la operacion: "
	Escribir "para sumas digita 1"
	Escribir "para restar digita 2"
	Escribir "para multiplicar digita 3"
	Escribir "para dividir digita 4"
	Leer operador
	Escribir "digita el primer numero para calcular"
	Leer primernumero
	Escribir "digita el segundo numero para calcular"
	Leer segundonumero
	Si operador== "1" Entonces
		Escribir "voy a sumar"
		respuesta<-primernumero + segundonumero
		Escribir  "La respuesta de la suma es: ", respuesta
		
	SiNo
		Si operador== "2" Entonces
			Escribir "voy a restar"
			respuesta<-primernumero - segundonumero
			Escribir  "La respuesta de la resta es: ", respuesta
		SiNo
			Si operador== "3" Entonces
				respuesta<-primernumero * segundonumero
				Escribir  "La respuesta de la multiplicacion es: ", respuesta
			SiNo
				Si operador== "4" Entonces
					respuesta<-primernumero / segundonumero
					Escribir  "La respuesta de la division es: ", respuesta
				SiNo
					Escribir "no es suma, resta, ni multiplicacion y ni division"
				Fin Si
			Fin Si
		Fin Si
	Fin Si
FinProceso
