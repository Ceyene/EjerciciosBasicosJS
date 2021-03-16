//Manejando dos arreglos
//Intercalar los elementos de dos arrays para formar uno nuevo.

const arregloUno = ["b", "l", "a", "n", "c", "o"];
const arregloDos = ["n", "e", "g", "r", "o"];

function handleArray(arrA, arrB) {
  let arregloTres = [];
  let largoA = arrA.length;
  let largoB = arrB.length;

  //primero, validamos cuál de los dos arreglos es más largo
  let largo = largoA < largoB ? largoA : largoB;

  //entonces, combino ambos tomando el más corto como base
  for (let i = 0; i < largo; i++) {
    arregloTres.push(arrA[i]);
    arregloTres.push(arrB[i]);
  }
  console.log(arregloTres);
}

handleArray(arregloUno, arregloDos);
