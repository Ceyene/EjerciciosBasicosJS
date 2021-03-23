// 17. Palindromo
// Debes crear una función llamada “palíndromo” que indique si una palabra es palíndroma o no, debe retornar true en el caso que sea, y false en el caso que no.
// Definición de palíndromo: Palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda.
// Ejemplo:
// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false

const palabraA = "aNiLiNa";
const palabraB = "Ada";
const palabraC = "Cynthia";
const palabraD = "oJo";
const palabraE = "Ñandú";

function palindromo(word) {
  //primero, paso la palabra original a minúsculas
  let minusculas = word.toLocaleLowerCase();
  //después, convierto la palabra a array, invierto las letras y lo vuelvo a unir en un string
  let inverso = minusculas.split("").reverse().join("");
  //entonces, comparo ambos, el original y el invertido para dar el mensaje de true o false
  minusculas === inverso
    ? console.log(`${minusculas} vs ${inverso}: true`)
    : console.log(`${minusculas} vs ${inverso}: false`);
}

palindromo(palabraA);
palindromo(palabraB);
palindromo(palabraC);
palindromo(palabraD);
palindromo(palabraE);
