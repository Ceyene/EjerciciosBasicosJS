// 5. Similar String.split()
// Debés crear una función llamada `split` que reciba un `string` y simule el comportamiento de la función original Si no sabés cómo funciona, Google puede ayudarte.
// Importante: No podés usar el String.split()
// Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

const palabra = "Ceyene";
const otraPalabra = "Marcos";

function split(palabra) {
  let caracteres = [];
  let largo = palabra.length;

  for (let i = 0; i < largo; i++) {
    let agregar = palabra.charAt(i);
    caracteres.push(agregar);
  }
  console.log(caracteres);
}

split(palabra);
split(otraPalabra);
