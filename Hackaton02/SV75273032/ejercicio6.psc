//Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
Algoritmo CalcularSueldoSemanal
    Definir horasTrabajadas, sueldoSemanal Como Real
    Definir tarifaNormal, tarifaExtra Como Real
    
    tarifaNormal <- 20  // Tarifa por hora normal
    tarifaExtra <- 25   // Tarifa por hora extra
    
    Escribir "Ingrese las horas trabajadas esta semana:"
    Leer horasTrabajadas
    
    Si horasTrabajadas <= 40 Entonces
        sueldoSemanal <- horasTrabajadas * tarifaNormal
    Sino
        sueldoSemanal <- (40 * tarifaNormal) + ((horasTrabajadas - 40) * tarifaExtra)
    FinSi
    
    Escribir "El sueldo semanal del trabajador es: $" + ConvertirATexto(sueldoSemanal)
FinAlgoritmo