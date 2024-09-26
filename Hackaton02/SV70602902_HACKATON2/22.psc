//22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.

Proceso PRIMEROS_NUM
	BANDERA<-Verdadero
	Mientras BANDERA Hacer
		Escribir " INGRESE UN NUMERO "
		Leer NUMBER
		SUMA_TOTAL<-0
		Para X<-1 Hasta NUMBER  Hacer
			SUMA_TOTAL<-SUMA_TOTAL+X
		Fin Para
		Escribir " LA SUMA TOTAL DE ", NUMBER," NUMEROS, ES ", SUMA_TOTAL
	Fin Mientras
	
FinProceso
