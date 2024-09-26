Proceso MediaParesImpares
		Definir numero, suma_pares, suma_impares, media_pares, media_impares Como Real
		Definir contador_pares, contador_impares Como Entero
		suma_pares <- 0
		suma_impares <- 0
		contador_pares <- 0
		contador_impares <- 0
		
		Para i <- 1 Hasta 10 Hacer
			Escribir "Ingrese un número:"
			Leer numero
			
			Si numero MOD 2 = 0 Entonces
				suma_pares <- suma_pares + numero
				contador_pares <- contador_pares + 1
			SiNo
				suma_impares <- suma_impares + numero
				contador_impares <- contador_impares + 1
			Fin Si
		Fin Para
		
		Si contador_pares > 0 Entonces
			media_pares <- suma_pares / contador_pares
			Escribir "La media de los números pares ingresados es:", media_pares
		SiNo
			Escribir "No se ingresaron números pares."
		Fin Si
		
		Si contador_impares > 0 Entonces
			media_impares <- suma_impares / contador_impares
			Escribir "La media de los números impares ingresados es:", media_impares
		SiNo
			Escribir "No se ingresaron números impares."
		Fin Si

FinProceso
