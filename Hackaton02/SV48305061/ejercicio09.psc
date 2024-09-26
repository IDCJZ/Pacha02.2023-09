Proceso ejercicio09
	Escribir "ingrese el nombre y apellido del trabajador"
	Leer nombre
	Escribir "ingrese el sueldo que gana"
	Leer sueldo
	Si sueldo> 2000 Entonces
		paga<- sueldo+(sueldo*0.05)
		Escribir "El nombre del trabajador: ", nombre
		Escribir "Su sueldo es: ",sueldo
		Escribir "aumento de 5%: ",sueldo*0.05
		Escribir "total neto a ganar: ",paga
	SiNo
		paga<- sueldo+(sueldo*0.10)
		Escribir "El nombre del trabajador: ", nombre
		Escribir "Su sueldo es: ",sueldo
		Escribir "aumento de 5%: ",sueldo*0.10
		Escribir "total neto a ganar: ",paga
	Fin Si
	
FinProceso
