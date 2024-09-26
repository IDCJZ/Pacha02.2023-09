Proceso CalcularPromedio
	Definir nota, sumaNotas , promedio, valorParaAprobar Como Real
	
	sumaNotas =0;
	
	
	Para i<-1 Hasta 3 Con Paso 1 Hacer
		Escribir  "Ingrese la nota ",i,": ";
	leer nota
	
	sumaNotas = sumaNotas +nota
	Fin Para
	
	promedio = sumaNotas / 3;
	
	Escribir "Promedio es: ", promedio;
	
	Escribir "Valor para aprobar: ";
	Leer valorParaAprobar;
	
	si promedio >= valorParaAprobar Entonces
		Escribir  "El estudiante aprobo";
	SiNo
		Escribir "El Estudiante no aprobo";
	
	FinSi
	
FinProceso
