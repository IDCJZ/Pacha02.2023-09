Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.

Algoritmo ProgramaConOpcionDeContinuar
    Definir opcion como Caracter

    Repetir
        Escribir "Este es el cuerpo principal del programa."
        Escribir "¿Desea continuar? (S/N): "
        Leer opcion

        Si opcion = "N" Opcion = "n" Entonces
            Escribir "Saliendo del programa."
        FinSi
    Hasta Que opcion = "N" Opcion = "n"
FinAlgoritmo