Proceso AproximacionGregoryLeibniz
	Definir  numTemrinos Como Entero
	definir i Como Entero;
	Definir  piAproximado Como Real
	
	Escribir  "Ingrese el numero de terminos para la proximacion de pi: ";
	leer numTemrinos;
	
	piAproximado =0;
	
	para i =0 Hasta  numTemrinos-1 Hacer
		piAproximado = piAproximado +((-1)^i) * (4/((2*i) +1))
	
	FinPara
	
	Escribir  "La apromoximacion de pi con ",numTemrinos, " terminos es: ", piAproximado;
	
FinProceso
