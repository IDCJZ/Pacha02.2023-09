Algoritmo ejercicio_15
	// Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
	Definir centimetros, pulgadas, libras, kilogramos Como Real
    
    Escribir "Conversión de centímetros a pulgadas y libras a kilogramos"
    
    Escribir "Ingrese la cantidad en centímetros: "
    Leer centimetros
    
    Escribir "Ingrese la cantidad en libras: "
    Leer libras
    
    // Realizar las conversiones
    pulgadas <- centimetros / 2.54
    kilogramos <- libras * 0.453592
    
    Escribir "Resultados:"
    Escribir centimetros, " centímetros equivalen a ", pulgadas, " pulgadas."
    Escribir libras, " libras equivalen a ", kilogramos, " kilogramos."
FinAlgoritmo
