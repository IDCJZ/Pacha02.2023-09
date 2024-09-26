// Crea una función que tome números y devuelva la suma de sus cubos. 
// sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
function sumOfCubes(num1,num2,num3){
    console.log(parseInt(Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3)))
}
sumOfCubes(3,4,5);