Proceso tiendaDEhelado
	Definir precioBruto, precioNeto Como Entero
	Definir membresia Como Caracter
	Escribir "Ingresar total a pagar"
	leer precioBruto
	Escribir "Ingresar tipo de membresia para descuento"
	leer membresia
	
	si membresia == "a"
		descuento <- precioBruto*10/100
	SiNo
		si membresia == "b"
			descuento <- precioBruto*15/100
		SiNo
			si membresia == "c"
				descuento <- precioBruto*20/100
			FinSi
		FinSi
	FinSi
	
	precioNeto <- precioBruto - descuento
	
	Escribir "Su descuento es de: ",descuento
	Escribir "Paga: ",precioNeto
	
FinProceso

