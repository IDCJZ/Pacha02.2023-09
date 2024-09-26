//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

Cajero (56$/día).

Servidor (64$/día).

Preparador de mezclas (80$/día).

Mantenimiento (48$/día).

El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

Algoritmo CalcularPagoEmpleado
    Definir numeroIdentificador Como Entero
    Definir diasTrabajados Como Entero
    Definir salarioDiario Como Real
    Definir salarioTotal Como Real

    Escribir "Ingrese el número identificador del empleado (56, 64, 80 o 48): "
    Leer numeroIdentificador

    Escribir "Ingrese la cantidad de días trabajados en la semana (1-6): "
    Leer diasTrabajados

    Segun numeroIdentificador Hacer
        56:
            salarioDiario <- 56
        64:
            salarioDiario <- 64
        80:
            salarioDiario <- 80
        48:
            salarioDiario <- 48
        De Otro Modo:
            Escribir "Número identificador no válido."
            FinAlgoritmo
    Fin Segun

    Si diasTrabajados < 1 O diasTrabajados > 6 Entonces
        Escribir "Cantidad de días trabajados no válida."
    Sino
        salarioTotal <- salarioDiario * diasTrabajados
        Escribir "El empleado debe recibir $", salarioTotal
    Fin Si
FinAlgoritmo