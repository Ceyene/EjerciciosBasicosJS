// 9. Mezclando arreglos I
// Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.
// Ejemplo:
// mezclarArreglos([1,2,3,4],[“h”,”o”,”l”,”a”]) debe retornar [1, “h”, 2,”o”, 3,”l”,4,”a”]
// mezclarArreglos([1,2,3,4], [“h”,”p”]) debe retornar [1, “h”, 2, “p”, 3 , 4]
// mezclarArreglos([“h”,”p”], [1,2,3,4]) debe retornar [“h”, 1, “p”, 2, 3 , 4]

const arregloUno = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arregloDos = ["y", "e", "y", "e", "y", "e"];
const arregloA = ["ma", "me", "mi"];
const arregloB = [true, false, true, true, true];

function mezclarArreglos(arrA, arrB) {
  let arregloTres = [];
  let largoA = arrA.length;
  let largoB = arrB.length;

  //primero, valido cuál de los dos arreglos es más largo
  let largo = largoA < largoB ? largoA : largoB;
  let sobra = largoA < largoB ? largoB - largoA : largoA - largoB;
  console.log(sobra);

  //entonces, combino ambos tomando el más corto como base
  for (let i = 0; i < largo; i++) {
    arregloTres.push(arrA[i]);
    arregloTres.push(arrB[i]);
  }

  //valido si han sobrado elementos de uno de los dos arrays
  if (sobra !== 0) {
    //valido de cuál de los arrays ha sobrado y agrego el sobrante al array final
    if (largoA > largoB) {
      for (let i = largo; i < largoA; i++) {
        arregloTres.push(arrA[i]);
      }
    } else {
      for (let i = largo; i < largoB; i++) {
        arregloTres.push(arrB[i]);
      }
    }
  }
  console.log(arregloTres);
}

mezclarArreglos(arregloUno, arregloDos);
mezclarArreglos(arregloA, arregloB);
