Proceso Ejercicio6
	
	Definir horasTrabajadas, sueldoBase, sueldoTotal Como Real
    Definir tarifaHoraNormal, tarifaHoraExtra Como Real
    
    tarifaHoraNormal = 20.0 
    tarifaHoraExtra = 25.0  
    
    Escribir "Ingrese el número de horas trabajadas: "
    Leer horasTrabajadas
    
    Si (horasTrabajadas <= 40) Entonces
        sueldoBase = horasTrabajadas * tarifaHoraNormal
    Sino
        sueldoBase = 40 * tarifaHoraNormal + (horasTrabajadas - 40) * tarifaHoraExtra
    FinSi
    
    sueldoTotal = sueldoBase
    
    Escribir "El sueldo semanal del trabajador es: ", sueldoTotal
	
FinProceso
