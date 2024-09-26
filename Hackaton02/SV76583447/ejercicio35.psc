Proceso mayor_menor
	definir i,n,ns,may,men Como entero
	may <-0
	men <-0
	i <-1
	escribir "Ingrese la cantidad de numeros"
	leer ns
	Mientras (i <== ns ) Hacer
		escribir "Ingres eel numero:"
		leer t
		si(i==1) Entonces
			may<-t
			men<-t
		SiNo
			si(t>may) Entonces
				may<-t
			FinSi
			si(t<men) Entonces
				men<-t
			FinSi
		FinSi
		i<-i+1
	Fin Mientras
	
FinProceso
