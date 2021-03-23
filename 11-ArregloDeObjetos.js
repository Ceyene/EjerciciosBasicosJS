// 11. Arreglo de objetos
// Debés crear una función llamada `arregloDeObjetos` que reciba un número como parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` que contenga el valor del número y sus anteriores.
// Ejemplo:
// arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
// arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]

const numerito = 5;
const numerillo = 10;

function arregloDeObjetos(num) {
  let arrObj = [];
  //tomo el número y voy iterando para rellenar el arreglo
  for (let i = 1; i <= num; i++) {
    arrObj.push({ valor: i });
  }
  console.log(arrObj);
}

arregloDeObjetos(numerito);
arregloDeObjetos(numerillo);
