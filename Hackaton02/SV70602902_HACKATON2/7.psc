Proceso HELADOS
	BANDERA<-Verdadero
	Mientras BANDERA Hacer
		Escribir " ESCRIBE EL MONTO TOTAL EN SOLES"
		Leer MONTO
		Escribir " TIPO DE CLIENTE "
		Leer TIPO
		Si TIPO = "A" Entonces
			Escribir " Cliente tipo A 10% de descuento, el total a pagar seria ", (MONTO-(MONTO*0.1)), " SOLES"
		SiNo
			Si TIPO = "B" Entonces
				Escribir " Cliente tipo B 15% de descuento, el total a pagar seria ", (MONTO-(MONTO*0.15)), " SOLES"
			SiNo
				Si TIPO = "C" Entonces
					Escribir " Cliente tipo C 20% de descuento, el total a pagar seria ", (MONTO-(MONTO*0.2)), " SOLES"
				SiNo
					Si TIPO  <> " A " Y TIPO  <> " B " Y TIPO  <> " C " Entonces
						Escribir " SOLO EXITEN TIPOS DE CLIENTES A - B - C"
					Fin Si
				Fin Si
			Fin Si
		Fin Si
	Fin Mientras
	
FinProceso
