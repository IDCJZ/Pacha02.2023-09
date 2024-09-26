Algoritmo ejercicio_7
// Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo 
// de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
// Tipo A 10% de descuento
// Tipo B 15% de descuento
// Tipo C 20% de descuento
	definir tipo Como Caracter
	Escribir "Ingrese tipo de cliente (A, B o C)"
	leer tipo

	Segun tipo Hacer
		"A" o "a":
			escribir "Le corresponde 10 % de descuento" 
		"B" o "b":
			escribir "Le corresponde 15 % de descuento" 
		"C" o "c":
			escribir "Le corresponde 20 % de descuento" 
		De Otro Modo:
			escribir "No le corresponde descuento" 
	Fin Segun
FinAlgoritmo
