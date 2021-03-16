// 2. Loop de impares con palabra
// Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra y haga un loop de 0 a 100 mostrando en la consola cada número del loop.
// Ahora, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.

const numerito = 1;
const palabrita = "Impar";

function loopDeImpares(num, palabra) {
  for (let i = 0; i <= 100; i++) {
    //primero, verificamos si es impar el resultado de la suma de num e i
    let suma = num + i;
    if (suma % 2 !== 0) {
      console.log(palabra);
    } else {
      //caso contrario, imprimimos el número en pantalla
      console.log(i);
    }
  }
}

loopDeImpares(numerito, palabrita);
