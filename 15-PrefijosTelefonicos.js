// 15. Prefijos Telefónicos
// 	Utils:
// 	var prefijos = [54, 55, 56, 57, 58]
//  var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
// Debés crear una función llamada `validarPrefijo` que reciba un número por parámetro. Deberá:
// Generar un objeto desde dos arreglos dados. Deberá tener como propiedades, los números de prefijos, y como valor, el país correspondiente a cada prefijo.
// ejemplo :
// {
// 	54: “Argentina”,
// 	55: ”Brasil”,
// 	56: ”Ecuador”,
// 	57: ”Bolivia”
// }
// Validar si los dos primeros números del pasado por parámetro existen en el objeto de prefijos telefónicos. En caso de ser correcto, deberá retornar “Este número pertenece a X”.
// En caso de ser incorrecto deberá retornar “El número no pertenece a nuestros países”
// Ejemplo:
// validarPrefijo(“5412345678”) debe retornar “Este número pertenece a Argentina”
// validarPrefijo(“5712345678”) debe retornar “Este número pertenece a Bolivia”
// validarPrefijo(“8012345678”) debe retornar “El número no pertenece a nuestros países”

const numAr = "543516000000";
const numBol = "573864000000";
const numRandom = "863749000000";

function validarPrefijo(number) {
  //primero, genero el objeto combinando ambos arrays dados
  let infoPrefijos = {};
  const prefijos = [54, 55, 56, 57, 58];
  const paises = ["Argentina", "Brasil", "Chile", "Colombia", "Venezuela"];
  const largo = prefijos.length;
  for (let i = 0; i < largo; i++) {
    infoPrefijos[prefijos[i]] = paises[i];
  }
  //luego, separo el prefijo del número ingresado en un string
  const pref = number.substring(0, 2);
  //entonces, valido si el prefijo existe en mi objeto combinado
  if (infoPrefijos.hasOwnProperty(pref)) {
    //si existe, entonces busco a cuál país corresponde
    console.log(`El número pertenece a ${infoPrefijos[pref]}`);
  } else {
    //si no existe, entonces doy un mensaje de error
    console.log("El número no pertenece a nuestros países");
  }
}

validarPrefijo(numAr);
validarPrefijo(numBol);
validarPrefijo(numRandom);
