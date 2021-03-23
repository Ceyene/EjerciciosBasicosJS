// 16. {value: key} kelue: vay
// Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro. Si ese paŕametro no es un objeto, deberá devolver un string que indique qué tipo de dato fue ingresado como input y por qué no es válido.
// Si el parámetro es un objeto, la función deberá devolver otro objeto. Deberá tener todas las propiedades que sean un string puestas como key y el value deberá ser el key anterior.
// 	Ejemplo:
// reverseKeys(344) debería devolver “error, input can’t be a number”
// reverseKeys([ ]) debería devolver “error, input can’t be an Array”
// reverseKeys(‘hola’) debería devolver “error, input can’t be a string”
// var prueba = {
// 	nombre: "Cyn",
// 	edad: 35,
// 	nacionalidad: "Arg",
// 	documento: 32323232
// }
// reverseKeys(prueba) debería devolver:
// {
// Cyn: "nombre",
// 35: "edad",
// Arg: "nacionalidad",
// 32323232: "documento",
// }

const objCyn = {
  nombre: "Cyn",
  edad: 35,
  nacionalidad: "Arg",
  dni: 32323232,
};

function reverseKeys(objeto) {
  let finalObj = {};
  let tipo = typeof objeto;
  let esArray = Array.isArray(objeto);
  //primero, valido que el parámetro ingresado sea un objeto
  if (tipo !== "object" || esArray) {
    //si no es un objeto o es un array, envío un mensaje de error correspondiente
    esArray
      ? console.log("Error, input can't be an array")
      : console.log(`Error, input can't be a ${tipo}`);
  } else {
    //si es un objeto, invierto keys y values
    Object.entries(objeto).forEach(([key, value]) => {
      finalObj[value] = key;
    });
    console.log(finalObj);
  }
}

reverseKeys(344);
reverseKeys([1, 2, 3]);
reverseKeys("hola");
reverseKeys(new Function("5+2"));
reverseKeys(objCyn);
