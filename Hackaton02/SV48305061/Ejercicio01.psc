Proceso Ejercicio01
	Definir numero1 Como Numerica
	Escribir "digite un numero de 3 digitos"
	Leer numero1
	Si numero1< 99 Entonces
		Escribir "digitar un numero mayor"
	SiNo
		Si numero1> 999 Entonces
			Escribir "digite un numero menor"
		SiNo
			Escribir "Dato ingresado correcto", numero1
		Fin Si
	Fin Si
FinProceso
