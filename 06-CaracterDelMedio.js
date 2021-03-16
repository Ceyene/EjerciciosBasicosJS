// 6. Carácter del medio
// Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio.
// Ejemplo:
// middleCharacter(“plataforma5”) debe retornar “f”
// middleCharacter(“hola”) debe retornar “ol”
// middleCharacter(“cosas”) debe retornar “s”

const cadenitaImpar = "plataforma5";
const cadenitaPar = "hola";
const otraCadImpar = "cosas";

function middleCharacter(cadena) {
  let largo = cadena.length;
  let mid = largo / 2;

  //verificamos si la cadena es par o impar
  if (largo % 2 !== 0) {
    //en el caso de los impares, ajusto la posición y tomo un caracter
    let imp = mid - 0.5;
    console.log(cadena.charAt(imp));
  } else {
    //en el caso de los pares, tomo dos caracteres desde el medio
    let par = mid - 1;
    console.log(cadena.substring(par, par + 2));
  }
}

middleCharacter(cadenitaImpar);
middleCharacter(cadenitaPar);
middleCharacter(otraCadImpar);
