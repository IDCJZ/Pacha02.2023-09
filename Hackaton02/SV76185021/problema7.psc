Proceso Problema7
	Escribir "Escribir el tipo de membresia (A,B,C): "
	Leer tipoMemb
	Escribir "Ingresar el precio del helado: "
	Leer precHelado
	Definir desc Como Real
	si tipoMemb=='A' Entonces
		desc <- 0.1
	SiNo
		si tipoMemb == 'B' Entonces
			desc <- 0.15
		SiNo
			si tipoMemb == 'C' Entonces
				desc <- 0.2
			FinSi
		FinSi
	FinSi
	Escribir "El precio del helado es: ",precHelado;
	Escribir "El precio del helado con descuento es: ",precHelado-precHelado*desc;
	Escribir "El descuento aplicado es de: ",desc;
FinProceso
