// 13. Única propiedad
// Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string.
// Ejemplo:
//  var  arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ]
// oneProperty(arreglo, “edad”) debe retornar [ { edad: 20 }, { edad: 22 } ]
// oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ]

const misGatos = [
  { nombre: "Isis", edad: 8.0 },
  { nombre: "Nino", edad: 7.0 },
  { nombre: "Grisecita", edad: 0.1 },
  { nombre: "Renzo", edad: 3.0 },
  { nombre: "Bruno", edad: 8.2 },
  { nombre: "Ciro", edad: 10.1 },
  { nombre: "Carey", edad: 4.2 },
  { nombre: "Mina", edad: 1.4 },
  { nombre: "Teo", edad: 0.2 },
];
const propiedadA = "nombre";
const propiedadB = "edad";
const propiedadC = "color";

function oneProperty(arr, propiedad) {
  let arrFinal = [];

  for (let i = 0; i < arr.length; i++) {
    Object.entries(arr[i]).forEach(([key, value]) => {
      let objetoNuevo = new Object();
      if (key === propiedad) {
        objetoNuevo[propiedad] = value;
        arrFinal.push(objetoNuevo);
      }
    });
  }
  arrFinal.length > 0
    ? console.log(arrFinal)
    : console.log("La propiedad solicitada no se encuentra en el objeto dado");
}

oneProperty(misGatos, propiedadA);
oneProperty(misGatos, propiedadB);
oneProperty(misGatos, propiedadC);
