Proceso media de numeros pares e impares
	Definir pares,impares Como Entero
	Definir i,n,suma_impares,suma_pares Como Real
	i = 1
	suma_pares = 0
	suma_impares = 0
	impares = 0
	pares = 0
	Mientras i <= 10  Hacer
		
		Escribir "Ingresa un numero"
		
		leer n
		i<-i+1
		si n <> 0 Entonces
			
			si n mod 2 == 0 Entonces
				
				suma_pares = suma_pares + n
				
				pares = pares + 1
				
			SiNo
				
				suma_impares = suma_impares + n
				
				impares = impares + 1
				
			FinSi
			
		FinSi
		
		
		
	FinMientras
	
Escribir "La suma de los numeros pares es:", suma_pares
	
Escribir "Numeros pares:" ,pares
	
Escribir "El promedio de numeros pares es:", suma_pares/pares
	
Escribir "La suma de los numeros impares es:" ,suma_impares
	
Escribir "Numeros impares:", impares
	
Escribir "El promedio de numeros impares es:", suma_impares/impares
	
FinProceso
