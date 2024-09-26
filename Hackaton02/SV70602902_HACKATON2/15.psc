//Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.

Proceso CONVERTIR
	BANDERA<-Verdadero
	Mientras BANDERA Hacer
		Escribir " SI QUIERES CONVERTIR CENTIMEROS A PULGADAS PRESIONA 1"
		Escribir " SI QUIERES CONVERTIR LIBRAS A KILOGRAMOS PRESIONA 2"
		Leer CONVERSOR
		Si CONVERSOR = 1 Entonces
			Escribir " INGRESA LOS CM A CONVERTIR  "
			Leer CM
			Escribir CM," CENTIMETROS, SON ", (CM/2.54), " PULGADAS"
		SiNo
			Si CONVERSOR = 2 Entonces
				Escribir " INGRESA LAS LIBRAS A CONVERTIR  "
				Leer LIBRAS
				Escribir LIBRAS," LIBRAS, SON ", (LIBRAS*0.453592), " KILOGRAMOS"
			SiNo
				Si CONVERSOR <>1 O CONVERSOR <>2 Entonces
					Escribir " OPERACION NO VALIDA"
					
				Fin Si
			Fin Si
		Fin Si
		Escribir " PARA SALIR APRIEBA 0, PARA SEGUIR 1"
		Leer OPCIONSALIR
		Si OPCIONSALIR = 0 Entonces
			BANDERA<-Falso
		FinSi
		
	Fin Mientras
	
FinProceso
