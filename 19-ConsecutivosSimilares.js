// 19. Consecutivos similares
// Debes crear una función llamada “consecutivosSimilares” que reciba un string y retorne cuantos consecutivos similares hay en un string.
// Ejemplo:
// consecutivosSimilares(“AAAA”) debe retornar 3
// consecutivosSimilares(“BBBBB”) debe retornar 4
// consecutivosSimilares(“ABABABAB”) debe retornar 0
// consecutivosSimilares(“BABABA”) debe retornar 0
// consecutivosSimilares(“AAABBB”) debe retornar 4

const cadenaA = "AAAA";
const cadenaB = "BBBBBBBBBB";
const cadenaC = "ABCDEFG";
const cadenaD = "AAABBB";

function consecutivosSimilares(str) {
  let similares = 0;
  let letraAnterior = "";
  const cadena = str.split("");
  const largo = cadena.length;
  for (let i = 0; i < largo; i++) {
    cadena[i] === letraAnterior && similares++;
    letraAnterior = cadena[i];
  }
  console.log(
    `En este string hay ${similares} caracteres consecutivos iguales`
  );
}

consecutivosSimilares(cadenaA);
consecutivosSimilares(cadenaB);
consecutivosSimilares(cadenaC);
consecutivosSimilares(cadenaD);
