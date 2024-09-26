//Escriba una función que convierta un objeto en una matriz de claves y valores.
//objectToArray({
    //likes: 2,
    //dislikes: 3,
    //followers: 10
  //}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
  function objectToArray(obj) {
    return Object.entries(obj);
}
const obj = { likes: 2, dislikes: 3, followers: 10 };
const result = objectToArray(obj);
console.log(result); // [["likes", 2], ["dislikes", 3], ["followers", 10]]
