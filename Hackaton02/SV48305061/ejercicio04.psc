Proceso ejercicio04
	Escribir "digite 3 numeros enteros"
	Leer numero1
	Leer numero2
	Leer numero3
	Si numero1 >  numero2 y numero1 > numero3 y numero2 >numero3 Entonces
		Escribir "EL orden de los numeros son: ", numero3,"-", numero2,"-", numero1
	SiNo 
		Si numero1 >  numero2 y numero1 > numero3 y numero3 >numero2 Entonces
			Escribir "EL orden de los numeros son: ", numero2,"-", numero3,"-", numero1
		SiNo
			Si numero2 >  numero1 y numero2 > numero3 y numero1 >numero3 Entonces
				Escribir "EL orden de los numeros son: ", numero3,"-", numero1,"-", numero2
			SiNo
				Si numero2 >  numero1 y numero2 > numero3 y numero3 >numero1 Entonces
					Escribir "EL orden de los numeros son: ", numero1,"-", numero3,"-", numero2
				SiNo
					Si numero3 >  numero1 y numero3 > numero2 y numero2 >numero1 Entonces
						Escribir "EL orden de los numeros son: ", numero1,"-", numero2,"-", numero3
					SiNo 
						Si numero3 >  numero1 y numero3 > numero2 y numero1 >numero2 Entonces
							Escribir "EL orden de los numeros son: ", numero2,"-", numero1,"-", numero3
						SiNo
							Escribir "datos invalidos"
						Fin Si
					Fin Si
				Fin Si
			Fin Si
		Fin Si
	Fin Si
	

	FinProceso
