Proceso sueldoSemanal
	definir ganancia,horas,horasExtras,horasNormal,sueldoBruto Como Entero
	horasExtras = 0
	pagoExtra = 0
	horasNormal = 0
	sueldoBruto = 0
	Escribir "Ingresar horas"
	leer horas
	
	si horas <= 40
		ganancia <- 20*horas
		Escribir "Sueldo total: ",ganancia
	SiNo
		horasExtras <- horas - 40
		horasNormal <- horas - horasExtras
		pagoExtra <- horasExtras * 25
		ganancia <- horasNormal * 20
		sueldoBruto <- ganancia + pagoExtra
		Escribir "Sueldo total: ",sueldoBruto
	FinSi
	
FinProceso

