Algoritmo ejercicio_35
	// Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
	Definir contador, numero, mayor, menor,temp Como Entero    
    Escribir "Ingrese 20 números:"
    mayor = 0
	menor = 0
	Para contador<-1 Hasta 20 Con Paso +1 Hacer
        Escribir "Número ", contador, ": "
        Leer numero
        temp <- numero
        Si numero > mayor Entonces
            mayor <- numero
        FinSi
        
        Si temp < menor Entonces
            menor <- temp
        FinSi
        
    FinPara
    
    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
FinAlgoritmo
