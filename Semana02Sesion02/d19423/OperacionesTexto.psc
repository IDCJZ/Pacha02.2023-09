Proceso OperacionesTexto
	
	Escribir "Escribe una palabra"
	Leer palabra
	lon<- Longitud(palabra)
	Escribir "La palabra ", palabra, " tiene ", lon, " de caracteres"
	subcad<- Subcadena(palabra,2,6)
	Escribir subcad
	Escribir "Escribe tu nombre"
	Leer Nombre
	Escribir "Escribe tu apellido"
	Leer Apellido
	nomcompleto <- Concatenar(Nombre,Apellido)
	Escribir nomcompleto
	mayus = Mayusculas(Nombre)
	Escribir  mayus
	minus = Minusculas(Apellido)
	Escribir minus
	Escribir "Escribe un numero grande"
	Leer numgrande 
	txtnum = ConvertirATexto(numgrande)
	logNum = Longitud(txtnum)
	ultimoCaracter = Subcadena(txtnum,logNum,logNum)
	Escribir ultimoCaracter
FinProceso
