Proceso ejercicio06
	Escribir "escribir las horas trabajadas: "
	Leer horas
	Si horas<=40 Entonces
		sueldo<-horas*20
		Escribir "su horas echas son: ",horas
		Escribir "su sueldo semanal es: ", sueldo
	SiNo
		sueldo<-((horas-40)*25)+40*20
		Escribir "su horas echas son: ", horas
		Escribir "su horas extras son: ",horas-40
		Escribir "su sueldo semanal es: ",sueldo
	Fin Si
	
FinProceso
