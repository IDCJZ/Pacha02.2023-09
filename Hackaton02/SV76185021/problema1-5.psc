
//Proceso Hackaton02
//	Imprimir  "Escribe un numero entero: ";
//	Leer variable1;
//	si variable1 < 0 Entonces
//		Escribir "El numero es negativo"
//	SiNo
//		Escribir "El numero no es negativo"
//	FinSi
//	Escribir "El numero es: ",variable1
//	
//FinProceso


//Proceso Problema1
//	Escribir "Digitar un numero: "
//	Leer numero1
//	si numero1 >= 100 y numero1 <= 999 Entonces
//		Escribir "El numero tiene 3 digitos"
//	SiNo
//		Escribir "El numero no tiene 3 digitos"
//	FinSi
//	
//FinProceso


//Proceso Problema3
//	Escribir "Digite un numero: "
//	Leer numero1
//	numero1 <- numero1 MOD 10
//	si numero1 == 4 Entonces
//		Escribir "El numero acaba en 4"
//	SiNo
//		Escribir "El numero no acaba en 4"
//	FinSi
//	
//FinProceso

//Proceso Problema4
//	Escribir "Digite 3 numeros enteros : "
//	Leer num1 num2 num3
//	si num1 < num2 Entonces
//		si  num3 < num2 Entonces
//			si num1<num3 Entonces
//				Escribir "El orden de menor a mayor seria: ",num1," < ",num3," < ",num2
//			SiNo
//				Escribir "El orden de menor a mayor seria: ",num3," < ",num1," < ",num2
//			FinSi
//		SiNo
//			Escribir "El orden de menor a mayor seria: ",num1," < ",num2," < ",num3
//		FinSi
//	SiNo
//		si num3<num1 Entonces
//			si num3<num2 Entonces
//				Escribir "El orden de menor a mayor seria: ",num3," < ",num2," < ",num1
//			SiNo
//				Escribir "El orden de menor a mayor seria: ",num2," < ",num3," < ",num1
//			FinSi
//		SiNo
//			Escribir "El orden de menor a mayor seria: ",num2," < ",num1," < ",num3
//		FinSi
//		
//	FinSi
//	
//FinProceso

Proceso problema5
	Definir  precioZapato, numeroZapatos, precioTotal,precioTotalReal, descPorcentaje, precioDescuento Como Real
	precioZapato = 80;
	
	Imprimir  "Ingrese el numero de zapatos a comprar: "
	Leer numeroZapatos;
	
	si numeroZapatos > 30 Entonces
		descPorcentaje = 0.4;
	SiNo
		si numeroZapatos > 20 Entonces
			descPorcentaje = 0.2;
		SiNo
			si numeroZapatos >10 Entonces
				descPorcentaje = 0.1;
			FinSi
		FinSi
	FinSi
	
	precioTotalReal = numeroZapatos * precioZapato;
	precioDescuento = precioTotalReal * descPorcentaje;
	precioTotal = precioTotalReal - precioDescuento
	
	Imprimir  "Precio Real: ", precioTotalReal;
	Imprimir  "Total Descuento: ", precioDescuento;
	Imprimir  "Porcentaje de descuento: ", descPorcentaje;
	Imprimir  "El precio total con descuento es: ", precioTotal
FinProceso

