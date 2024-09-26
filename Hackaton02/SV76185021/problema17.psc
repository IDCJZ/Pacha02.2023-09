Proceso problema17
	Escribir "Ingrese las horas"
	Leer hora
	Escribir "Ingrese los minutos"
	Leer minutos
	Escribir "Ingrese los segundos"
	Leer segundos
	
	segundos_t = (hora*3600)+(minutos*60)+segundos+1
	hora1 = Trunc(segundos_t/3600)
	residuo1 = segundos_t % 3600
	minutos1 = Trunc(residuo1/60)
	segundos1 = residuo1 % 60
	
	Escribir "El numero de horas es " hora1
	Escribir "El numero de minutos es " minutos1
	Escribir "El numero de segundos es " segundos1
	
FinProceso
