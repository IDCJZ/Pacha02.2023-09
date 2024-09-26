/*Ejercicio1
    let variable = prompt('Ingresar numero');
    if (variable >= 100 & variable <= 999){
        console.log(`El numero, ${variable}, tiene tres digitos`)
    }else{
        console.log(`El numero, ${variable} ,no tiene tres digitos`)
    }

//Ejercicio2
    variable = prompt('Ingresar numero');
    if( n<0 ){
        console.log('El numero es negativo')
    }else{
        console.log('El numero es positivo')
    }

//Ejercicio3
    
    variable = prompt('Ingresar numero');
    
    if (variable % 10 == 4 ){
        console.log(`El numero ${variable} si termina en 4`)
    }else{
        console.log(`El numero ${variable} no termina en 4`)
    }

//Ejercicio4

    let numero1 = prompt('Ingresar numero');
    let numero2 = prompt('Ingresar numero');
    let numero3 = prompt('Ingresar numero');

    let numero_menor = 0
    let numero_mayor = 0

    if(numero1 < numero2 & numero1 < numero3){
        numero_menor = numero1;
    }else if(numero2 < numero1 & numero2 < numero3){
        numero_menor = numero2;
    }else if(numero3 < numero1 & numero3 < numero2){
        numero_menor = numero3;
    }

    if(numero1 > numero2 & numero1 > numero3){
        numero_mayor = numero1;
    }else if(numero2 > numero1 & numero2 > numero3){
        numero_mayor = numero2;
    }else if(numero3 > numero1 & numero3 > numero2){
        numero_mayor = numero3;
    }

    console.log(`El numero menor es ${numero_menor} y El numero mayor es ${numero_mayor}`);
    
//Ejercicio5

    const precioTotalReal = 0;
    const precioDescuento = 0;
    let precio_zapato = 80;
    let desc_porcentaje;
    let numero_zapatos = prompt('Ingrese el numero de zapatos a comprar:');
    if(numero_zapatos > 30){
        desc_porcentaje = 0.4 
    }else if(numero_zapatos > 20){
        desc_porcentaje = 0.2
    }else if(numero_zapatos >10){
        desc_porcentaje = 0.1
    }

    precioTotalReal = numero_zapatos * precio_zapato;
	precioDescuento = precioTotalReal * desc_porcentaje;
	console.log("Precio Real: ", precioTotalReal)
	console.log("Total Descuento: ", precioDescuento)
	console.log("Porcentaje de descuento: ", desc_porcentaje)
	console.log("El precio total con descuento es: ", precioTotalReal - precioDescuento);


//Ejercicio6

    let horas_extras,horas_normal,pago_extra,ganancia,sueldo_bruto
    const horas = prompt('Ingresar horas');

    if(horas <= 40){
        ganancia = 20*horas
        console.log(`Sueldo total: ${ganancia}`)
    }else{
        horas_extras = horas - 40
        horas_normal = horas - horas_extras
        pago_extra = horas_extras * 25
        ganancia = horas_normal * 20
        sueldo_bruto = ganancia + pago_extra
        console.log(`Sueldo total: ${sueldo_bruto}`)
    }

//Ejercicio7

    const precio_neto = 0;
    let descuento;
    const precio_bruto = prompt("Ingresar total a pagar");
    const membresia = prompt("Ingresar tipo de membresia para descuento");

    if(membresia === "a"){
        descuento = precio_bruto*10/100
    }else if(membresia === "b"){
        descuento = precio_bruto*15/100
    }else if(membresia === "c"){
        descuento = precio_bruto*20/100
    }

    precio_neto = precio_bruto - descuento

    console.log(`Su descuento es de: ${descuento}`);
    console.log(`Paga: "${precio_neto}`);

//Ejercicio8

    let nota1 = prompt('Ingresar nota1');
    let nota2 = prompt('Ingresar nota2');
    let nota3 = prompt('Ingresar nota3');
    let promedio;
    
    promedio = (nota1 + nota2 + nota3)/3;
    console.log(promedio);

    if(promedio >= 13){
        console.log('Aprobo el curso')
    }else{
        console.log('Desaprobo el curso')
    }

//Ejercicio9

    let aumento;
    let sueldo = prompt('Ingresar sueldo');

    if(sueldo > 2000){
        aumento = sueldo * 5/100
    }else if(sueldo < 2000){
        aumento = sueldo * 10/100
    }

    console.log(`El aumento del trabajador sera de: ${aumento}`);

/*Ejercicio10

    let numero = prompt('Ingresar numero');
    if(numero > 0 & numero < 100){
        if(numero % 2 == 0){
            console.log('El numero es par')
        }else{
            console.log('El numero es impar')
        }
    }

Ejercicio11


    let n1,n2,n3;
    let n_mayor;
    n1 = prompt('Ingresar primer numero');
    n2 = prompt('Ingresar segundo numero');
    n3 = prompt('Ingresar tercer numero');

    if(n1 > n2 & n1 > n3){
        n_mayor = n1;
    }else if(n2 > n1 & n2 > n3){
        n_mayor = n2;
    }else if(n3 > n1 & n3 > n2){
        n_mayor = n3;
    }

    console.log(`El numero mayor es ${n_mayor}`);

//Ejercicio12

    let n1,n2
    let n_mayor;
    n1 = prompt('Ingresar primer numero');
    n2 = prompt('Ingresar segundo numero');

    if(n1 > n2){
        n_mayor = n1;
    }else{
        n_mayor = n2;
    } 

    console.log(`El numero mayor es ${n_mayor}`);

//Ejercicio13

    let letra = prompt('Ingresar una letra');

    if(letra === 'a' & letra === 'e' & letra === 'i' & letra === 'o' & letra === 'u'){
        console.log('La letra es vocal')
    }else{
        console.log('La letra no es vocal')
    }

Ejercicio14

    let contador = 0;
    let numero = prompt('Escribir numero');

    for(i = 1; i <= numero ; i++){
        if(numero % i == 0){
            contador += 1
        }
    }

    if(contador == 2){
        console.log('El numero es primo')
    }else{
        console.log('El numero no es primo')
    }

Ejercicio15

    let kilos,pulgadas;
    let libras = prompt('Ingresar peso en libras');
    let centimetros = prompt('Ingresar los centimetros');

    kilos = libras * 0.453592;
    pulgadas = centimetros * 0.393701

    console.log(`Libras en kilos: ${kilos}`);
    console.log(`Centimetros en pulgadas ${pulgadas}`);

Ejercicio16

    let dia = prompt('Ingresar dia en numero');

    if(dia<8 & dia>0){
        switch(dia){
            case 1:
                console.log('lunes');
                break;
            case 2:
                console.log('martes');
                break;
            case 3:
                console.log('miercoles');
                break;
            case 4:
                console.log('jueves');
                break;
            case 5:
                console.log('viernes');
                break;
            case 6:
                console.log('sabado');
                break;
            case 7:
                console.log('viernes');
                break;
        }
    }

Ejercicio18

    let precio,ganancia_vendedor;     
    let cds = prompt('Cantidad de cds que lleva el cliente');

    if(cds <= 9){
        precio <- numeroCds * 10
    }else if(cds >= 10 & cds <= 99){
        precio <- numeroCds * 8   
    }else if(cds >= 100 & cds <= 499){
        precio <- numeroCds * 7
    }else{
        precio <- numeroCds * 6
    }

    ganancia_vendedor = precio * 8.25/100;
    console.log(`Ganancia vendedor: ${ganancia_vendedor}`);
    console.log(`Precio a pagar por el cliente: ${precio}`);

Ejercicio19

    let pago,empleado;
    let id = prompt("Ingrese ID del empleado:");
    let dias_trabajados = prompt("Dias trabajados:");

    if(dias_trabajados <= 6){
        if(id == 10){
            pago = 56 * dias_trabajados
            empleado = "cajero"
        }else if(identificador == 20){
            pago = 64 * diasTrabajados
            empleado = "servidor"
        }else if(identificador == 30){
            pago = 80 * diasTrabajados
            empleado = "preparador de mezclas"
        }else{
            pago = 48 * diasTrabajados
            empleado = "mantenimiento"
        }
        console.log(`Tipo de empleado: ${empleado}`);
        console.log(`Cantidad a pagar: ${pago}`);
    }else{
        console.log(`Mas de 6 dias no puede ingresar`);
    }

Ejercicio20

    let contador,cuadrado,media,suma;
    let n1,n2,n3,n4;
    n1 = prompt('Ingresar numero');
    n2 = prompt('Ingresar numero');
    n3 = prompt('Ingresar numero');
    n4 = prompt('Ingresar numero');

    if(n1 % 2 == 0){
        c += 1
    }
    if(n2 % 2 == 0){
        c += 1
    }
    if(n3 % 2 == 0){
        cuadrado = n2 ** 2
        c += 1
    }
    if(n4 % 2 == 0){
        c += 1
    }

    console.log(`Cantidad de numeros pares: ${c}`);

    if(n1 > n2 & n1 > n3 & n1 > n4){
        console.log(`El numero mayor es: ${n1}`)
    }else if(n2 > n1 & n2 > n3 & n2 > n4){
        console.log(`El numero mayor es: ${n2}`)
    }else if(n3 > n1 & n3 > n2 & n3 > n4){
        console.log(`El numero mayor es: ${n3}`)
    }else{
        console.log(`El numero mayor es: ${n4}`)
    }

    if(n1 < n4){
        media = (n1+n2+n3+n4)/4
        console.log(`El primero es menor que el cuarto y la media aritmetica es: ${media}`)
    }

    if(n2 > n3){
        if(n3 > 50 & n3 < 700){
            suma = n1+n2+n3+n4
            console.log(`Suma de los cuatro numeros: ${suma}`)
        }
    }

Ejercicio21

    let x,f;
    let numero = prompt('Ingresar numero');

    if(n < 0){
        console.log(`El numero ${numero} no se puede calcular`)
    }else{
        x = 1
        f = 1
        do{
            
            f = f*x
            x = x+1

        }while( x <= numero);

        console.log(`El factorial del numero es: ${f}`);
    }

Ejercicio22


    let suma,n;
    suma=0;
    n = prompt('Ingresar numero');

    for(let i=1;i<=n;i++){
        suma = suma + i
    }

    console.log(`Suma de los ${n} primeros numeros es de ${suma}`);

Ejercicio23

    let contador,suma,n;   
    contador=0
	suma=0
    n = prompt('Ingresar numero');

    do{
        contador=contador+1
        if(contador % 2 !== 0 ){
            suma=suma+contador   
        }
    } while(contador = n)

    console.log(`Suma de impares= ${suma}`);


Ejercicio24

    let contador,suma;
    contador=0
    suma=0
    
    while(contador<=1000){
        contador<-contador+1
        if (contador % 2 == 0){
            suma=suma+contador
        }
        contador += 1
    } 

    console.log(`Suma de pares= ${suma}`);

Ejercicio25

    let n;
    n = prompt('Ingresar numero');

    if( n<0 ){
        console.log('El numero es negativo')
    }else{
        console.log('El numero es positivo')
    }

//Ejercicio27

	let suma,n,c,media; 
	suma = 0;
	c = 0;
    n = 1;
    
    
        while( n>=0 ){
            n = prompt('Ingresar numero');
            if(n>=0){
                suma = suma + n
                c += 1
            }
        }
        media = suma/c
        console.log(`La media de los numeros es ${media}`);

Ejercicio28

    let contador,suma;
    contador = 1
    suma = 0

    do{
        
        suma = suma + contador
        contador = contador + 1 
        
    } while(contador <= 101)

    console.log(`La suma de los 100 primeros n�meros es: ${suma}`);

Ejercicio29

    let contador,suma 
    contador = 1
    suma = 0
    while(contador <= 101){
        suma = suma + contador
        contador = contador + 1 
    }

    console.log(`La suma de los 100 primeros n�meros es: ${suma}`);

Ejercicio30

    let suma;
        
    suma = 0

    for(let i=1;i<=100;i++){
        suma = suma +i
    }

    console.log(`La suma del 1 al 100 es: ${suma}`);

Ejercicio31

    let i,n,suma_impares,suma_pares,pares,impares;
    i = 1
    suma_pares = 0
    suma_impares = 0
    impares = 0
    pares = 0

    while(i <= 10){
        n = prompt('Ingresa un numero');
        i += 1
        if(n != 0){
            if(n % 2 == 0){
                suma_pares = suma_pares + n
                
                pares = pares + 1
            }else{
                suma_impares = suma_impares + n
                
                impares = impares + 1 
            }
        }
    }

    console.log(`La suma de los numeros pares es: ${suma_pares}`);
    console.log(`Numeros pares: ${pares}`);
    console.log(`El promedio de numeros pares es: ${suma_pares/pares}`);
    console.log(`La suma de los numeros impares es: ${suma_impares}`);
    console.log(`Numeros impares: ${impares}`);
    console.log(`El promedio de numeros impares es: ${suma_impares/impares}`);

Ejercicio33

    let contrasena, usuario;
    usuario = prompt("Ingresa un usuario");
    contrasena = prompt("Ingresa una contrasena");

    if( usuario == "gerson" & contrasena == "backend" ){
        console.log('Los datos son correctos');
    }

Ejercicio34

    for(let a = 1; a <+ 9 ; a++){
        for(let b = 1; b <= 10 ; b++){
            console.log(`${a} x ${b} = ${a*b}`)
        }
    }

Ejercicio35

    let i,n,ns,may,men,t;
    may = 0
    men = 0
    i = 1
    ns =   prompt("Ingrese la cantidad de numeros");

    while (i <= ns ){
        t = prompt("Ingres eel numero:");
        if(i==1){
            may=t
            men=t    
        }else{
            if(t>may){
                may=t
            }
            if(t<men){
                men=t
            }
        }
        i += 1
    }
    
    console.log(`numero mayor ${may}`);
    console.log(`numero menor ${men}`);

Ejercicio36

    let x,a,b,c;

    a = 0

    b = 1

    for( x = 1 ; x<=100 ; x++){
        console.log(a);
        c = a + b
        a = b
        b = c
    } */


