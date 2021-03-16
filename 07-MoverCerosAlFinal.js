// 7. Mover ceros a lo último
// Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.
// Ejemplo:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
// moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]

const arreglito = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
const otroArreglito = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];

function moveZeros(arreglo) {
  let nuevoArrCero = arreglo.filter((elemento) => elemento === 0);
  let nuevoArrSinCero = arreglo.filter((elemento) => elemento !== 0);
  let nuevoArr = nuevoArrSinCero.concat(nuevoArrCero);
  console.log(nuevoArr);
}

moveZeros(arreglito);
moveZeros(otroArreglito);
