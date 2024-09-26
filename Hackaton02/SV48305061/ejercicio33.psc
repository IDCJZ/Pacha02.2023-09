Proceso ejercicio33
	Escribir "Bienvenidos a la suma de numero"
	Definir  nro como entero
	cont<-0
	respuesta<- "SI"
	Mientras Mayusculas(respuesta)="SI" Hacer
		Escribir "Ingresa un numero"
		Leer nro
		cont<-cont+nro
		Escribir "deseas continuar: "
		Leer respuesta
	Fin Mientras
	Escribir cont
FinProceso
