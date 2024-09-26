//39 Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
Algoritmo  ejercicio_39
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
FinAlgoritmo
