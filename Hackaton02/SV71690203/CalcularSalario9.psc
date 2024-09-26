Proceso CalcularSalario
	
	Definir salarioActual, aumento, salarioNuevo Como Real
    
    Escribir "Ingrese el salario actual del trabajador: "
    Leer salarioActual
    
    Si (salarioActual > 2000) Entonces
        aumento = salarioActual * 0.05
    Sino
        aumento = salarioActual * 0.10
    FinSi
    
    salarioNuevo = salarioActual + aumento
    
    Escribir "Salario actual: $", salarioActual
    Escribir "Aumento aplicado: $", aumento
    Escribir "Nuevo salario: $", salarioNuevo
	
FinProceso
