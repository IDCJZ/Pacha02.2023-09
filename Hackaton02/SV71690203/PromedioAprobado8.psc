Proceso PromedioAprobado
	
	Definir nota1, nota2, nota3, promedio Como Real
    Definir notaMinima Como Real 
    
    notaMinima = 12 
    
    Escribir "Ingrese la primera nota: "
    Leer nota1
    Escribir "Ingrese la segunda nota: "
    Leer nota2
    Escribir "Ingrese la tercera nota: "
    Leer nota3
    
    promedio = (nota1 + nota2 + nota3) / 3
    
    Escribir "El promedio de las notas es: ", promedio
    
    Si (promedio >= notaMinima) Entonces
        Escribir "El estudiante ha aprobado."
    Sino
        Escribir "El estudiante ha reprobado."
    FinSi
	
FinProceso
