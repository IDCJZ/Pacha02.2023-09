Proceso aumentoTrabajador
	Definir sueldo,aumento Como Entero
	Escribir "Ingresar sueldo"
	leer sueldo
	
	si sueldo > 2000
		aumento <- sueldo * 5/100
	SiNo
		si sueldo < 2000
			aumento <- sueldo * 10/100
		FinSi
	FinSi
	
	Escribir "El aumento del trabajador sera de: ",aumento
FinProceso

