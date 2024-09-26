Proceso ejercicio07
	Escribir "Ingrese el tipo de cliente: A, B,C o sin menbrecia"
	Leer tcliente
	Si tcliente=="A" Entonces
		Escribir "Ingrese el precio a cobrar: "
		Leer precio
		vuelto<-precio-(precio*0.10)
		Escribir "Precio total: ", precio
		Escribir "descuento 10%: ",precio*0.10
		Escribir "Total a pagar: ",vuelto
	SiNo
		Si tcliente=="B" Entonces
			Escribir "Ingrese el precio a cobrar: "
			Leer precio
			vuelto<-precio-(precio*0.15)
			Escribir "Precio total: ", precio
			Escribir "descuento 15%: ",precio*0.15
			Escribir "Total a pagar: ",vuelto
		SiNo
			Si tcliente=="C" Entonces
				Escribir "Ingrese el precio a cobrar: "
				Leer precio
				vuelto<-precio-(precio*0.20)
				Escribir "Precio total: ", precio
				Escribir "descuento 15%: ",precio*0.20
				Escribir "Total a pagar: ",vuelto
			SiNo
				Escribir "Ingrese el precio a cobrar: "
				Leer precio
				Escribir "Precio total: ", precio
			Fin Si
		Fin Si
	Fin Si
FinProceso
