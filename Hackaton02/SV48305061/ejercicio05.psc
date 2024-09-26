Proceso ejercicio05
	Escribir "Ingrese la cantida de va a comprar: "
	Leer cantidad
	
	Si cantidad > 10 y cantidad < 20 Entonces
		promocion1<-cantidad*80-(cantidad*80*0.10)
		Escribir "precio total: ", cantidad*80
		Escribir "descuento del 10%: ", cantidad*80*0.10
		Escribir "El precio es: ", promocion1
	SiNo
		Si cantidad>20  y cantidad < 30 Entonces
			promocion1<-cantidad*80-(cantidad*80*0.20)
			Escribir "precio total: ", cantidad*80
			Escribir "descuento del 20%: ", cantidad*80*0.20
			Escribir "El precio es: ", promocion1
		SiNo
			Si cantidad >30 Entonces
				promocion1<-cantidad*80-(cantidad*80*0.40)
				Escribir "precio total: ", cantidad*80
				Escribir "descuento del 40%: ", cantidad*80*0.40
				Escribir "El precio es: ", promocion1
			SiNo
				
				promocion1<-cantidad*80
				Escribir "El precio es: ", promocion1
			Fin Si
		Fin Si
	Fin Si
	
FinProceso
