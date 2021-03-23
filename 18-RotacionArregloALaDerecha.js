// 18. Rotación de arreglo a la derecha
// Debes crear una función llamada “rotar” que reciba un arreglo y un número, y debera retornar un nuevo arreglo con los elementos rotados la cantidad de veces como sea el número a la derecha.
// Ejemplo:
// rotar([1, 2, 3, 4, 5], 2) debe retornar [4, 5, 1, 2, 3]
// rotar([1, 2, 3, 4, 5], 3) debe retornar [3, 4, 5, 1, 2]

const arregloA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arregloB = ["a", "b", "c", "d", "e"];

function rotar(arr, num) {
  let nuevoArreglo = [];
  let largo = arr.length;
  let porcion = largo - num;
  //primero, completo la primera parte del nuevo array con los elementos rotados
  for (let i = 0; i < num; i++) {
    let position = largo - num + i;
    nuevoArreglo[i] = arr[position];
  }
  //después, completo el resto del array con los elementos rotados restantes
  for (let i = 0; i < porcion; i++) {
    let position = i + num;
    nuevoArreglo[position] = arr[i];
  }
  console.log(nuevoArreglo);
}

rotar(arregloA, 2);
rotar(arregloA, 5);
rotar(arregloB, 3);
