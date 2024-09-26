Proceso numeroPrimo
	Definir x,n,c Como Entero
	
	Escribir "Escribe un numero"
	
	leer n
	
	c = 0
	
	para  x = 1 Hasta n Con Paso 1 hacer
		
		si n mod x == 0 Entonces
			
			c = c + 1
			
		FinSi
		
	Fin Para             
	
	si c == 2 Entonces
		
		Escribir "El numero ",n," es primo"
		
	SiNo
		
		Escribir "El numero ",n," no es primo"
		
	FinSi     
	
	   
FinProceso
