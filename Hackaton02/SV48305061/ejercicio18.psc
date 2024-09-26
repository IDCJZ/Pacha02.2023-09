Proceso ejercicio18
	Escribir "SELECCIONAR LA CANTIDAD  0-9(OPCION 1),10-99(OPCION 2),100-499(OPCION 3),500 A MAS(OPCION 4)"
	Leer cd
	Segun cd Hacer
		1:
			Escribir "INGRESE LA CANTIDAD DE LA COMPRA DE CD"
			leer cantidad
			Si cantidad>= 0 y cantidad<10 Entonces
				venta<-cantidad*10
				ganacia<- venta*0.0825
				Escribir "El precio de paga el cliente es: ", venta
				Escribir "La ganacia del vendedor es: ", ganacia
			SiNo
				Escribir "el dato ingresado en invalido"
			Fin Si
			
		2:
			Escribir "INGRESE LA CANTIDAD DE LA COMPRA DE CD"
			leer cantidad
			Si cantidad>= 10 y cantidad<100 Entonces
				venta<-cantidad*8
				ganacia<- venta*0.0825
				Escribir "El precio de paga el cliente es: ", venta
				Escribir "La ganacia del vendedor es: ", ganacia
			SiNo
				Escribir "el dato ingresado en invalido"
			Fin Si
		3:
			Escribir "INGRESE LA CANTIDAD DE LA COMPRA DE CD"
			leer cantidad
			Si cantidad>= 100 y cantidad<500 Entonces
				venta<-cantidad*7
				ganacia<- venta*0.0825
				Escribir "El precio de paga el cliente es: ", venta
				Escribir "La ganacia del vendedor es: ", ganacia
			SiNo
				Escribir "el dato ingresado en invalido"
			Fin Si
		De Otro Modo:
		4:
			Escribir "INGRESE LA CANTIDAD DE LA COMPRA DE CD"
			leer cantidad
			Si cantidad>= 500  Entonces
				venta<-cantidad*6
				ganacia<- venta*0.0825
				Escribir "El precio de paga el cliente es: ", venta
				Escribir "La ganacia del vendedor es: ", ganacia
			SiNo
				Escribir "el dato ingresado en invalido"
			Fin Si
	Fin Segun
	
FinProceso
