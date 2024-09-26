Proceso factorial
	Definir n,f,x Como Real
	Escribir "Ingresa un numero"
	
	leer n
	
	si n < 0 Entonces
		
		Escribir "EL numero ",n," no se puede calcular"
		
	SiNo
		
		x = 1
		
		f = 1
		
		Repetir
			
			f = f * x
			
			x = x +1
			
		Hasta Que x > n
		
	Escribir "El factorial del numero ",n," es: ",f
		
	FinSi     
	
FinProceso

