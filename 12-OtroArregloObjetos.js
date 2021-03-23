// 12. Arreglo de objetos
// Debés crear una función llamada `arregloDeObjetos` que reciba un número y una palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.
// Ejemplo:
// arregloDeObjetos(5, “hola”) debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4}, {hola: 5 }]
// arregloDeObjetos(3, “chau”) debe retornar [{chau: 1}, {chau: 2}, {chau: 3}]

const numA = 5;
const numB = 4;

const saludoA = "hola";
const saludoB = "chau";

function arregloDeObjetos(num, saludo) {
  let arregloFinal = [];
  //tomo los parámetros y los incluyo iterando dentro del array
  for (let i = 1; i <= num; i++) {
    //primero, creo un nuevo objeto vacío
    let nuevoObj = new Object();
    //luego, ubico la propiedad del saludo y le doy el valor de i
    nuevoObj[`${saludo}`] = i;
    arregloFinal.push(nuevoObj);
  }
  console.log(arregloFinal);
}

arregloDeObjetos(numA, saludoA);
arregloDeObjetos(numB, saludoB);
