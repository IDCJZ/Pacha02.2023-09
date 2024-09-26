//Hacer un algoritmo en Pseint que diga si un número es par o impar

Proceso PAR_IMPAR
	BANDERA<-Verdadero
	Mientras BANDERA Hacer
		Escribir " INGRESE UN NUMERO "
		LEER NUMBER
		Si NUMBER MOD 2=1 Entonces
			Escribir " EL NUMERO ", NUMBER," ES IMPAR"
		SiNo
			Escribir " EL NUMERO ", NUMBER," ES PAR"
		Fin Si
	Fin Mientras
	
FinProceso
