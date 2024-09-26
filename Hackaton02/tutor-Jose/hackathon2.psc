

///Ejemplo de Para
//FinAlgoritmo

//Algoritmo testPara


//	Para i<-0 Hasta 3 Con Paso 1 Hacer
//		Imprimir i
//	Fin Para


//FinAlgoritmo


///Hasta Que 

//Algoritmo Hasta_que

//	Definir  suma Como Entero

//	suma=0;
//	continuar=0;
//	Repetir
//		Escribir "digite un numero:";
//		leer continuar
//		suma =suma +continuar
//	Hasta Que continuar<10 
//	Escribir  "Suma de numeros ingresados: ",suma
//FinAlgoritmo

///Mientras 


//Algoritmo testMientras


//	Definir  continuar,suma Como Entero

//	Mientras continuar<10 Hacer
//		Escribir "digite un numero:";
//		leer continuar
//		suma =suma +continuar
//	Fin Mientras

//	Escribir  "Suma de numeros ingresados: ",suma
//FinAlgoritmo


///Selección Múltiple

//Algoritmo seleccionMultiple
	
//	Definir  opcionMenu Como Entero;
//	Escribir  "*********************Menu******************";
//	Escribir "1.Comprar Zapatos";
//	Escribir  "2. Ver Compra";
//	Escribir  "3. Vender Zapatos";
//	leer opcionMenu;
	
//	Segun  opcionMenu Hacer
//		Caso 1: 
//			Escribir  "Usted esta en el Area de Compras"
//		Caso 2:
//			Escribir "Usted Esta viendo su compra";
//		Caso 3: 
//			Escribir  "Usted esta en el area de venta";
//		De Otro Modo : 
//			Escribir "Usted no selecciono ninguna opcion valida";
			
//	FinSegun
	
	
//FinAlgoritmo
///Sistema de menu

//Algoritmo SeleccionDeMenu

//	Definir  opcionMenu Como Entero;
	
//	opcionMenu=0
	
//	Mientras opcionMenu<>4 Hacer
		
//		Limpiar Pantalla
//		Escribir  "*********************Menu******************";
//		Escribir "1.Comprar Zapatos";
//		Escribir  "2. Ver Compra";
//		Escribir  "3. Vender Zapatos";
//		Escribir  "4. Salir";
//		leer opcionMenu;
		
		
//		Segun  opcionMenu Hacer
//			Caso 1: 
//				Escribir  "Usted esta en el Area de Compras"
//				Escribir  "Presiona una Tecla Para continuar......"
//				Esperar Tecla
//			Caso 2:
//				Escribir "Usted Esta viendo su compra";
//				Escribir  "Presiona una Tecla Para continuar......"
//				Esperar Tecla
//			Caso 3: 
//				Escribir  "Usted esta en el area de venta";
//				Escribir  "Presiona una Tecla Para continuar......"
//				Esperar Tecla
			//De Otro Modo : 
			//	Escribir "Usted no selecciono ninguna opcion valida";
			//	Escribir  "Presiona una Tecla Para continuar......"
			//	Esperar Tecla
				
//		FinSegun
		
	
//	Fin Mientras
	

//FinAlgoritmo

///////////////////////////////////////////////////////////////////
// 1. Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos.
//Algoritmo determinar_digito
	
//	Definir n Como Entero
//	Imprimir "Ingrese un numero:"
//	leer n
//	si n >=100 y n <=999 Entonces
//		Imprimir  "El numero ", n , " tiene tres digitos"
//	SiNo
//		Imprimir  "El numero ", n , " no tiene tres digitos"
//	FinSi
//FinAlgoritmo


// 5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene 
//una promoción de descuento para vender al mayor, esta dependerá del
//número de zapatos que se compren. Si son más de diez, se les dará un 
//10% de descuento sobre el total de la compra; si el número de zapatos 
//es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento;
//y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

//Algoritmo  tienda_zapatos
//	Definir  precioZapato, numeroZapatos, precioTotal,precioTotalReal, descPorcentaje, precioDescuento Como Real
//	precioZapato = 80;
	
//	Imprimir  "Ingrese el numero de zapatos a comprar: "
//	Leer numeroZapatos;
	
//	si numeroZapatos > 30 Entonces
//		descPorcentaje = 0.4;
//	SiNo
//		si numeroZapatos > 20 Entonces
//			descPorcentaje = 0.2;
//		SiNo
//			si numeroZapatos >10 Entonces
//				descPorcentaje = 0.1;
//			FinSi
//		FinSi
//	FinSi
	
//	precioTotalReal = numeroZapatos * precioZapato;
//	precioDescuento = precioTotalReal * descPorcentaje;
//	precioTotal = precioTotalReal - precioDescuento
	
//	Imprimir  "Precio Real: ", precioTotalReal;
//	Imprimir  "Total Descuento: ", precioDescuento;
//	Imprimir  "Porcentaje de descuento: ", descPorcentaje;
//	Imprimir  "El precio total con descuento es: ", precioTotal


//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

//Algoritmo  CalcularPromedio

//	Definir nota, sumaNotas , promedio, valorParaAprobar Como Real
	
//	sumaNotas =0;
	
	
//	Para i<-1 Hasta 3 Con Paso 1 Hacer
//		Escribir  "Ingrese la nota ",i,": ";
//		leer nota
		
//		sumaNotas = sumaNotas +nota
//	Fin Para
	
//	promedio = sumaNotas / 3;
	
//	Escribir "Promedio es: ", promedio;
	
//	Escribir "Valor para aprobar: ";
//	Leer valorParaAprobar;
	
//	si promedio >= valorParaAprobar Entonces
//		Escribir  "El estudiante aprobo";
//	SiNo
//		Escribir "El Estudiante no aprobo";
		
//	FinSi
	
	
//FinAlgoritmo



//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.


//Proceso  Hora_mas_un_segundo

//	Escribir "Ingrese las horas"
//	Leer hora
//	Escribir "Ingrese los minutos"
//	Leer minutos
//	Escribir "Ingrese los segundos"
//	Leer segundos

//	segundos_t = (hora*3600)+(minutos*60)+segundos+1
//	hora1 = Trunc(segundos_t/3600)
//	residuo1 = segundos_t % 3600
//	minutos1 = Trunc(residuo1/60)
//	segundos1 = residuo1 % 60

//	Escribir "El numero de horas es " hora1
//	Escribir "El numero de minutos es " minutos1
//	Escribir "El numero de segundos es " segundos1

//FinProceso


//39 Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

//Algoritmo  AproximacionGregoryLeibniz
	
//	Definir  numTemrinos Como Entero
//	definir i Como Entero;
//	Definir  piAproximado Como Real
	
//	Escribir  "Ingrese el numero de terminos para la proximacion de pi: ";
//	leer numTemrinos;
	
//	piAproximado =0;
	
//	para i =0 Hasta  numTemrinos-1 Hacer
//		piAproximado = piAproximado +((-1)^i) * (4/((2*i) +1))
		
//	FinPara
	
//	Escribir  "La apromoximacion de pi con ",numTemrinos, " terminos es: ", piAproximado;
//FinAlgoritmo







//25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.(Funcion recursiva)



Funcion valorRetornar <- CalcularFactorialRecursivo(num)
	
	si num <=1 Entonces
		valorRetornar <-1
	SiNo
		valorRetornar <- num * CalcularFactorialRecursivo(num - 1 )
	FinSi
FinFuncion



Algoritmo  FactorialRecursivo 
	Definir num, resultado Como Entero
	Escribir  "Ingrese un numero para calcular su factorial";
	Leer  num;
	
	
	resultado = CalcularFactorialRecursivo(num);
	
	Escribir  "El Factorial de ", num, " es: ",resultado
	
FinAlgoritmo



