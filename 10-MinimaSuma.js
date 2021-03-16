// 10. Mínima Suma
// Debés crear una función llamada `minSum` que reciba un arreglo de números desordenados  y devuelva la suma entre los dos números más chicos.
// Ejemplo:
// minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
// minSum([1, 10, 43, 900, 20, 8]) debe retornar 9

const numSumarA = [7, 6, 5, 4, 3, 2, 1];
const numSumarB = [1, 10, 43, 900, 20, 8];

function minSum(arr) {
  //primero, ordeno el array de menor a mayor
  let arrOrdenado = arr.sort((a, b) => a - b);
  //entonces, sumo las dos primeras posiciones del array ordenado
  let resultado = arrOrdenado[0] + arrOrdenado[1];
  console.log(resultado);
}

minSum(numSumarA);
minSum(numSumarB);
