Proceso SueldoSemanal
	Escribir "Digitar el numero de horas semanal: "
	Leer numHoras
	si numHoras<=40 Entonces
		Escribir "Tu sueldo semanal sera de: ",numHoras*20," dolares"
	SiNo
		numHorasExtra <- numHoras - 40
		Escribir "Tu sueldo semanal sera de: ",(numHoras*20) + (numHorasExtra*25);
	FinSi
	
	
FinProceso
