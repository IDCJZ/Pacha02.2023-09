//Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, 
// se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
//si generaba menos de $2000 su aumento será de un 10%.

Proceso AUMENTO
	BANDERA<-Verdadero
	Mientras BANDERA Hacer
		Escribir " ESCRIBA SU SUELDO ACTUAL "
		Leer  SUELDO
		Si SUELDO >= 2000 Entonces
			Escribir " SU AUMENTO SERA DEL 5%"
			Escribir "ASI QUE AHORA ESTARIA GANANDO ", (SUELDO+(SUELDO*0.05)), "$"
		SiNo
			Si SUELDO < 2000 Entonces
				Escribir " SU AUMENTO SERA DEL 10%"
				Escribir "ASI QUE AHORA ESTARIA GANANDO ", (SUELDO+(SUELDO*0.1)), "$"
			Fin Si
		Fin Si
	Fin Mientras
FinProceso
