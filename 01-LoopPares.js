// 1. Loop de pares
// Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop.
// En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.

const numerito = 1;

function loopDePares(num) {
  for (let i = 0; i <= 100; i++) {
    //primero, verificamos si es par el resultado de la suma de num e i
    let suma = num + i;
    if (suma % 2 === 0) {
      console.log(`El numero ${suma} es par`);
    } else {
      //caso contrario, imprimimos el número en pantalla
      console.log(i);
    }
  }
}

loopDePares(numerito);
