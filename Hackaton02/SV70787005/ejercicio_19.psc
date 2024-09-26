Algoritmo ejercicio_19
	// Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
	// Cajero (56$/día).
	// Servidor (64$/día).
	// Preparador de mezclas (80$/día).
	// Mantenimiento (48$/día).
	// El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
	Definir numIdentificador Como Entero
    Definir diasTrabajados Como Entero
    Definir salarioDiario Como Real
    Definir salarioTotal Como Real
    Escribir "Ingrese el número identificador del empleado:"
    Leer numIdentificador
	
    Escribir "Ingrese la cantidad de días que trabajó en la semana (máximo 6 días):"
    Leer diasTrabajados
	Segun numIdentificador Hacer
		1:
			salarioDiario = 56
		2:
			salarioDiario = 64
		3:
			salarioDiario = 80
		4:
			salarioDiario = 48
		De Otro Modo:
			Escribir "Número de identificador de empleado no válido."
	Fin Segun
	Si diasTrabajados > 6 Entonces
		Escribir "La cantidad de días trabajados no puede ser mayor a 6."
	Sino
		salarioTotal = salarioDiario * diasTrabajados
		Escribir "El salario a pagar al empleado es:", salarioTotal, " dólares."
	Fin Si
FinAlgoritmo
