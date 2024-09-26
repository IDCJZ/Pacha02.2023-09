//Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
Algoritmo ConvertirUnidades
    Definir centimetros, pulgadas Como Real
    Definir libras, kilogramos Como Real

    Escribir "Conversión de centímetros a pulgadas y libras a kilogramos"
    
    Escribir "Ingrese la longitud en centímetros: "
    Leer centimetros

    Escribir "Ingrese el peso en libras: "
    Leer libras

    pulgadas <- centimetros / 2.54
    kilogramos <- libras * 0.45359237

    Escribir "Resultado de la conversión:"
    Escribir centimetros, " centímetros equivalen a ", pulgadas, " pulgadas."
    Escribir libras, " libras equivalen a ", kilogramos, " kilogramos."

FinAlgoritmo