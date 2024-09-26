//13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.

function esVocal(letra) 
{
    letra = letra.toLowerCase(); 
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') 
    {
      return true; 
    } else 
    {
      return false; 
    }
}
  const letra = prompt('Ingrese una letra:');
  if (esVocal(letra)) 
  {
    alert('La letra ingresada es una vocal.');
  } 
  else 
  {
    alert('La letra ingresada no es una vocal.');
  }