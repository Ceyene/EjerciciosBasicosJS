// 14. Guerra de palabras
//  	Utils:
//  var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
// Debés crear una función llamada `warWords` que reciba dos palabras como parámetro y devuelva la ganadora según la suma del valor de sus letras (dado por su posición en el abecedario).
// Ejemplo:
// warWord(“hola”, “chau”) debe retornar  “hola” (36 > 33)
// warWord(“love”, “friendship”) debe retornar “friendship”

const abc = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};
const ceyene = "ceyene";
const marquillos = "marcos";
const mina = "minilla";
const teo = "teillo";
const chau = "chau";
const hola = "hola";

function warWords(wordA, wordB, abc) {
  let resultA = 0;
  let resultB = 0;
  let arrayPalabraA = wordA.split("");
  let arrayPalabraB = wordB.split("");
  arrayPalabraA.map((letraA) => {
    resultA += abc[letraA];
  });
  arrayPalabraB.map((letraB) => {
    resultB += abc[letraB];
  });
  if (resultA === resultB) {
    console.log("Ambas palabras tienen el mismo valor");
  } else {
    resultA > resultB
      ? console.log(`El mayor es ${wordA} con ${resultA} puntos`)
      : console.log(`El mayor es ${wordB} con ${resultB} puntos`);
  }
}

warWords(ceyene, marquillos, abc);
warWords(mina, teo, abc);
warWords(chau, hola, abc);
