Algoritmo ejercicio_6
	// Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, 
	// se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, 
	// pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
	Definir sueldoSemanal, horasTotal, horasExtras Como Entero
	escribir "Ingrese la cantidad de horas trabajadas por semana"
	leer horasTotal
	Mientras horasTotal < 0 Hacer
		Escribir  "Ingrese una cantidad valida, mayor que 0"
		leer horasTotal
	Fin Mientras
	
	si horasTotal <= 40 Entonces
		horasExtras <-- 0
		sueldoSemanal <- horasTotal * 20
	SiNo
		horasExtras = horasTotal - 40
		sueldoSemanal = (40 * 20) + (horasExtras * 25)
	FinSi
	Escribir "Total de Horas: ",horasTotal
	Escribir  "Horas extras: ",horasExtras
	Escribir "SUELDO TOTAL: ", sueldoSemanal
FinAlgoritmo
