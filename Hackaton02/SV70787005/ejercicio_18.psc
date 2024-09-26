Algoritmo ejercicio_18
	// Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. 
	// Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
	// $10. Si se compran unidades separadas hasta 9.		
	// $8. Si se compran entre 10 unidades hasta 99.
	// $7. Entre 100 y 499 unidades.
	// $6. Para mas de 500 unidades.
	definir precio,cantidad Como Entero
	escribir "Ingrese la cantidad"
	leer cantidad
	si cantidad <= 9 Entonces
		escribir "Total a pagar: ",(cantidad*10)," USD"
	sino
		si cantidad <= 99 entonces
			escribir "Total a pagar: ",(cantidad*8)," USD"
		SiNo
			si cantidad <= 499 Entonces
				escribir "Total a pagar: ",(cantidad*7)," USD"
			SiNo
				si cantidad >= 500 entonces
					escribir "Total a pagar: ",(cantidad*6)," USD" 
				finsi
			FinSi
		FinSi
	FinSi
FinAlgoritmo