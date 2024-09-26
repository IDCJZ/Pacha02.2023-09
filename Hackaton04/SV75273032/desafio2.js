
//1) Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33

const saludar = (nombre, apellido, edad) => {
    return `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;
  };
  
  // Ejemplo de uso
  const nombre = "Juan";
  const apellido = "Malca";
  const edad = 33;
  
  const mensajeSaludo = saludar(nombre, apellido, edad);
  console.log(mensajeSaludo);


//2) Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

function sumOfCubes() {
  
  let sum = 0;
  
  for (let i = 0; i < arguments.length; i++) {
    
    sum += Math.pow(arguments[i], 3);
  }
  
  return sum;
}


const resultadoo = sumOfCubes(1, 5, 9);
console.log(resultadoo); 


//3) Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

function getDataType(value) {
  if (Array.isArray(value)) {
    return 'array';
  } else if (typeof value === 'string') {
    return 'string';
  } else if (typeof value === 'number') {
    return 'number';
  } else if (typeof value === 'boolean') {
    return 'boolean';
  } else if (typeof value === 'function') {
    return 'function';
  } else if (value === null) {
    return 'null';
  } else if (typeof value === 'object') {
    return 'object';
  } else if (typeof value === 'undefined') {
    return 'undefined';
  } else {
    return 'unknown';
  }
}


console.log(getDataType(42)); // "number"
console.log(getDataType("Hola")); // "string"
console.log(getDataType(true)); // "boolean"
console.log(getDataType([1, 2, 3])); // "array"
console.log(getDataType({ key: "value" })); // "object"
console.log(getDataType(function() {})); // "function"
console.log(getDataType(null)); // "null"
console.log(getDataType(undefined)); // "undefined"
console.log(getDataType(Symbol("foo"))); // "unknown"


//4) Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

function sumaDeArgumentos(...args) {
  let suma = 0;

  for (let i = 0; i < args.length; i++) {
    suma += args[i];
  }


  return suma;
}

const resultado = sumaDeArgumentos(1, 2, 3, 4, 5);
console.log(resultado);

//5) Crear una función que reciba un array de valores y filtre los valores que no son string

function filtrarStrings(array) {
  const stringsFiltrados = array.filter((valor) => typeof valor === 'string');
  
  return stringsFiltrados;
}

const valores = [1, 'Hola', true, 'Mundo', 42, 'JavaScript'];
const strings = filtrarStrings(valores);
console.log(strings); 

//6) Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

function minMax(arr) {
  if (arr.length === 0) {
    return [];
  }

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return [min, max];
}

const resultadooo = minMax([1, 2, 3, 4, 5]);
console.log(resultadooo);

//7) Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
//formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

function formatPhoneNumber(numbers) {
  
  if (numbers.length !== 10) {
    return "La matriz debe contener 10 números.";
  }

  
  const areaCode = numbers.slice(0, 3).join('');
  const firstPart = numbers.slice(3, 6).join('');
  const secondPart = numbers.slice(6).join('');

  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

const resultadoooo = formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(resultadoooo);

//8) Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

function findLargestNums(matrix) {
  
  const largestNums = [];

 
  for (let i = 0; i < matrix.length; i++) {
    const submatrix = matrix[i];
    
    const maxNum = Math.max(...submatrix);
    
    largestNums.push(maxNum);
  }
  return largestNums;
}

const resultadooooo = findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);
console.log(resultadooooo);

//9)Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
//charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.
//charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.

function charIndex(word, char) {
  const indices = [];
  
  
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      indices.push(i);
    }
  }
  
  if (indices.length === 0) {
    return indices;
  }
  
  return [indices[0], indices[indices.length - 1]];
}

const resultado1 = charIndex("hello", "l");
console.log(resultado1); 

const resultado2 = charIndex("circumlocution", "c");
console.log(resultado2);

//10) Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

function toArray(obj) {

  return Object.entries(obj);
}

const objeto = { a: 1, b: 2 };
const matriz = toArray(objeto);
console.log(matriz); 

//11)Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

//getBudgets([
//  { name: "John", age: 21, budget: 23000 },
//  { name: "Steve",  age: 32, budget: 40000 },

function getBudgets(personas) {
 
  let sumaPresupuestos = 0;
  
  for (let i = 0; i < personas.length; i++) {
    sumaPresupuestos += personas[i].budget;
  }
  
  return sumaPresupuestos;
}

const personas = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },

];

const sumaTotal = getBudgets(personas);
console.log(sumaTotal);

//12) Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
//getStudentNames([
//  { name: "Steve" },
//  { name: "Mike" },
//  { name: "John" }
//]) ➞ ["Becky", "John", "Steve"]
function getStudentNames(students) {
  let names = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].name) {
      names.push(students[i].name);
    }
  }

  return names;
}
const studentArray = [
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
];

const studentNames = getStudentNames(studentArray);
console.log(studentNames); 

//13) Escriba una función que convierta un objeto en una matriz de claves y valores.
//objectToArray({
//  likes: 2,
//  dislikes: 3,
//  followers: 10
//}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

function objectToArray(obj) {
  
  const result = [];

  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      
      result.push([key, obj[key]]);
    }
  }

  return result;
}

const inputObject = {
  likes: 2,
  dislikes: 3,
  followers: 10
};

const outputArray = objectToArray(inputObject);
console.log(outputArray); 


//14)Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
//squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14

function squaresSum(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }

  return sum;
}

const result = squaresSum(3);
console.log(result); 

//15) Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
//multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

function multiplyByLength(arr) {
  const length = arr.length; 
  
  
  const result = arr.map((value) => value * length);

  return result;
}


const inputArray = [2, 3, 1, 0];
const outputArrayy = multiplyByLength(inputArray);
console.log(outputArrayy); // [8, 12, 4, 0]

//16) Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
//countdown(5) ➞ [5, 4, 3, 2, 1, 0]

function countdown(n) {
  const result = [];
  
  
  for (let i = n; i >= 0; i--) {
    result.push(i);
  }

  return result;
}

const inputNumber = 5;
const countdownArray = countdown(inputNumber);
console.log(countdownArray);

//17)Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

function diffMaxMin(arr) {
  if (arr.length === 0) {
    return 0; 
  }
  
  let min = arr[0]; 
  let max = arr[0]; 
  
 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  
  const difference = max - min;

  return difference;
}


const inputArrayy = [10, 4, 1, 4, -10, -50, 32, 21];
const resultt = diffMaxMin(inputArray);
console.log(result); 

//18) Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
//filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

function filterList(arr) {
  
  const result = arr.filter((element) => typeof element === "number");

  return result;
}

const inputArrayyy = [1, 2, 3, "x", "y", 10];
const filteredArray = filterList(inputArray);
console.log(filteredArray);

//19) Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
//repeat(13, 5) ➞ [13, 13, 13, 13, 13]

function repeat(element, times) {
 
  const result = [];

 
  for (let i = 0; i < times; i++) {
    result.push(element);
  }

  return result;
}
const elementToRepeat = 13;
const numberOfTimes = 5;
const resultArray = repeat(elementToRepeat, numberOfTimes);
console.log(resultArray); 


//20)Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
//"apples and bananas".vreplace("u") ➞ "upplus und bununus"

String.prototype.vreplace = function (newVowel) {
  return this.replace(/[aeiouAEIOU]/g, newVowel);
};

// Ejemplo de uso:
const originalString = "apples and bananas";
const modifiedString = originalString.vreplace("u");
console.log(modifiedString); 

//22) Cree una función que capitalice la última letra de cada palabra.
//capLast("hello") ➞ "hellO"

function capLast(str) {
  
  const words = str.split(" ");

  
  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      const lastLetter = word[word.length - 1].toUpperCase();
      return word.slice(0, -1) + lastLetter;
    } else {
      return word;
    }
  });

  // Unir las palabras en una cadena nuevamente.
  const result = capitalizedWords.join(" ");

  return result;
}


const inputString = "hello world";
const outputString = capLast(inputString);
console.log(outputString); 