Proceso TresDigitos 
	bandera <- Verdadero
	Mientras bandera Hacer
	Escribir "Ingrese un número: "
		Leer digitos
		Si digitos == TRUNC(digitos) Entonces
			Si digitos >= 100 Y digitos <= 999 Entonces
				Escribir "EL NÚMERO ", digitos , " TIENE TRES DÍGITOS "
			SiNo
				Escribir "EL NÚMERO ", digitos , " NO TIENE TRES DÍGITOS "
			Fin Si
		SiNo
			Escribir "ESTE NÚMERO NO ES ENTERO "
		Fin Si
			Escribir " si deseas salir 0 sino 1 "
			Leer opcionsalir
			Si opcionsalir = 0 Entonces
				bandera<-Falso
		Fin Si
	Fin Mientras
FinProceso

