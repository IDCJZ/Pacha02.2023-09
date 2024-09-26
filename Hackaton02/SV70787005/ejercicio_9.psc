Algoritmo ejercicio_9
	// Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
	// si generaba menos de $2000 su aumento será de un 10%.
	definir ganancia Como Entero
	escribir "Ganancia generada"
	leer ganancia
	si ganancia >= 2000 Entonces
		escribir "Aumento del 5 %"
		escribir "Ganancia generada : ", ganancia
		escribir "Ganancia con aumento : ",(ganancia + ganancia*0.05)
	sino 
		escribir "Aumento del 10 %"
		escribir "Ganancia generada : ", ganancia
		escribir "Ganancia con aumento : ",(ganancia + ganancia*0.1)
	FinSi
FinAlgoritmo
