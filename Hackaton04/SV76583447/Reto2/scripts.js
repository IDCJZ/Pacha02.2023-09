/*//Ejercicio1
let nombre,apellido,edad,respuesta;
nombre = prompt('Ingresar nombre:');
apellido = prompt('Ingresar apellido:');
edad = prompt('Ingresar edad:');

respuesta = (nombre,apellido,edad)=>{
    console.log(`Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`);
}

respuesta(nombre,apellido,edad);

//Ejercicio2
let n1,n2,n3,suma_de_cubos;
n1 = parseInt(prompt('Ingresar numero 1:'));
n2 = parseInt(prompt('Ingresar numero 2:'));
n3 = parseInt(prompt('Ingresar numero 3:'));

suma_de_cubos = (n1,n2,n3)=>{
    console.log(n1**3 + n2**3 + n3**3);
}

suma_de_cubos(n1,n2,n3);

//Ejercicio4

let array,argumento,argumentos,suma;
suma = 0;
argumentos=[]

array = (...argumentos)=>{
    argumentos.forEach(argumento=>suma += argumento);
    console.log(suma);
};

array(1,2,3,4,5);

//Ejercicio5

let array,respuesta;
array = [1,2,'Javascript','Desarrollo Web',2.5,true];

for(let i=0;i<array.length;i++){
    if(typeof(array[i])!=='string'){
        console.log(typeof(array[i]));
    }   
}

//Ejercicio6

let n1,n2,n3,array,mayor,menor,res;

n1 = parseInt(prompt('Ingresar n1'));
n2 = parseInt(prompt('Ingresar n2'));
n3 = parseInt(prompt('Ingresar n3'));

array = [n1,n2,n3];

function max_min(array){
    mayor = n1;
    menor = n1; 
    for(let i=1;i<array.length;i++){
        if(array[i] > mayor){
            mayor = array[i];
        }
        if(array[i] < menor){
            menor = array[i];
        }
    }
    return console.log(`${mayor},${menor}`);
}
max_min(array);

//Ejercicio7

let matriz,respuesta;
let texto = '';
matriz = ['1','2','3','4','5','6','7','8','9','0'];

function numero_telefono(matriz){
    for(let i=0;i<matriz.length;i++){
        if( i == 0){
            texto += '(';
        }
        if( i == 3){
            texto += ') ';
        }
        if( i == 6){
            texto += '-';
        }
        texto += matriz[i];
    }
    console.log(texto);
}

numero_telefono(matriz);

//Ejercicio8

let a,b,c;
let mayor1 = 0;
let mayor2 = 0;
let mayor3 = 0;

function mayores([a,b,c]){
    for(let i=0;i<a.length;i++){
        if(a[i]>mayor1){
            mayor1=a[i];
        }
    }
    for(i=0;i<b.length;i++){
        if(b[i]>mayor2){
            mayor2=b[i];
        }
    }
    for(i=0;i<c.length;i++){
        if(c[i]>mayor3){
            mayor3=c[i];
        }
    }
    return [mayor1,mayor2,mayor3];
}

let respuesta = mayores([[4,2,7,1],[20,70,40,90],[1,2,0]])
console.log(respuesta);

//Ejercicio9

let palabra,array,array2,array3,caracter;
array2 = [];

function primer_ultimo_indice(array,caracter){
    for(let i=0;i<array.length;i++){
        if(array[i] === caracter){
            array2.push(i);
        }
    }
    return [array2[0],array2[array2.length - 1]];
}

palabra = prompt('Ingresar palabra');
array = palabra.split("");
caracter = prompt('Ingresar caracter');

array3 = primer_ultimo_indice(array,caracter);
console.log(array3);

//Ejercicio10

const objeto = {
    a : 1,
    b : 2
}

let matriz = (objeto) => {return Object.entries(objeto)};
let respuesta = matriz(objeto);
console.log(respuesta);

//Ejercicio11

clientes = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
]

function suma_presupuesto(clientes){
    let suma = 0;
    clientes.forEach((cliente) => {
        suma += cliente.budget;
    });
    console.log(suma);
}

suma_presupuesto(clientes);

//Ejercicio12

estudiantes = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }  
]

function matriz_estudiantes(estudiantes){
    let array = [];
    estudiantes.forEach((alumno)=>{
        array.push(alumno.name);
    })
    console.log(array);
}

matriz_estudiantes(estudiantes);

//Ejercicio13

const objeto = {
    likes : 2,
    dislikes : 3,
    followers : 10
}

let matriz = (objeto) =>{ return Object.entries(objeto); }
let respuesta = matriz(objeto);
console.log(respuesta);

//Ejercicio14

let n = parseInt(prompt('Ingresar numero'));

let suma_numeros_cuadrados = (n) => {
    let suma = 0;
    for(let i=1;i<=n;i++){
        suma += i**2;
    }
    console.log(suma);
}

suma_numeros_cuadrados(n);

//Ejercicio15

const matriz = [2, 3, 1, 0];

let indices_x_cantidad = (matriz) => {
    let matriz2 = [];
    let cantidad = matriz.length;
    for(let i=0;i<matriz.length;i++){
        matriz2.push(matriz[i]*cantidad);
    }
    console.log(matriz2);
}

indices_x_cantidad(matriz);

//Ejercicio16

let n = parseInt(prompt('Ingresar numero'));

let matriz_numeros = (n) => {
    let array = [];
    for(let i=n;i>=0;i--){
        array.push(i);
    }
    console.log(array);
}

matriz_numeros(n);

//Ejercicio17

let array = [10, 4, 1, 4, -10, -50, 32, 21];

let resta_mayor_menor = (array) => {
    let mayor = 0;
    let menor = 0;
    for(let i=0;i<array.length;i++){
        if(i == 0){
            mayor = array[i];
            menor = array[i];
        }else{
            if(array[i]>mayor){
                mayor = array[i];
            }else if(array[i]<menor){
                menor = array[i];
            }
        }  
    }
    console.log(mayor - menor);
}

resta_mayor_menor(array);

//Ejercicio18

let matriz = [1, 2, 3, "x", "y", 10];

let matriz_entero = (matriz) => {
    let matriz2 = [];
    for(let i=0;i<matriz.length;i++){
        if(typeof(matriz[i]) === 'number'){
            matriz2.push(matriz[i]);
        }
    }
    console.log(matriz2);
}

matriz_entero(matriz);

//Ejercicio19

let arg1,arg2;
arg1 = parseInt(prompt('Numero 1 :'));
arg2 = parseInt(prompt('Numero 2 :'));

let veces_elemento = (arg1,arg2) => {
    let matriz = [];
    for(let i=0;i<arg2;i++){
        matriz.push(arg1); 
    }
    console.log(matriz);
}

veces_elemento(arg1,arg2);

//Ejercicio21

let texto = "I am finding Nemo !";


let findNemo = (texto) => {
    let posicion;
    let array = texto.split(' ');
    for(let i=0;i<array.length;i++){
        if(array[i] === 'Nemo'){
            posicion = i+1;
        }
    }
    console.log(`Encontre a Nemo en la posicion ${posicion}!`);
}

findNemo(texto);

//Ejercicio22

let texto = prompt('Ingresar palabra');

let capitalizar = (texto) => {
    let texto2 = '';
    let array = texto.split('');
    let mayuscula = array[array.length - 1].toUpperCase();
    array.pop();
    array.push(mayuscula);
    for(let i=0;i<array.length;i++){
        texto2 += array[i];
    }
    console.log(texto2);
}

capitalizar(texto);*/























