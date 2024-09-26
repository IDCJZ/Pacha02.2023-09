//Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

Algoritmo CalcularAumentoSalario
    Definir salarioActual, aumento, nuevoSalario Como Real
    
    Escribir "Ingrese el salario actual del trabajador:"
    Leer salarioActual
    
    Si salarioActual > 2000 Entonces
        aumento <- salarioActual * 0.05  // Aumento del 5% para salarios mayores a $2000
    Sino
        aumento <- salarioActual * 0.10  // Aumento del 10% para salarios menores o iguales a $2000
    FinSi
    
    nuevoSalario <- salarioActual + aumento
    
    Escribir "El aumento salarial es: $" + ConvertirATexto(aumento)
    Escribir "El nuevo salario es: $" + ConvertirATexto(nuevoSalario)
FinAlgoritmo