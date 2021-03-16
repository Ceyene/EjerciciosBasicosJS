// 3. Sumatoria
// 	Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.
// Ejemplo:
// sumattion(3) debe retornar 6 por que hace (1 +2 +3)
// sumattion(8) debe retornar 36

let numerillito = 3;
let numerillo = 8;

function sumattion(num) {
  var result = 0;
  for (let adder = 1; adder <= num; adder++) {
    result += adder;
  }
  console.log(result);
}

sumattion(numerillito); //6
sumattion(numerillo); //36
