var possuiGraduacao = false;

//if-else
if (possuiGraduacao) {
  console.log("Ele é graduado, parabens.");
} else {
  console.log("Ele não é graduado, estude mais.");
}

//if-else if
var possuiDoutorado = false;
if (possuiGraduacao) {
  console.log("Ele é graduado, parabens.");
} else if (possuiDoutorado) {
  console.log("Ele é graduado e é doutorado, que bom.");
} else {
  console.log("Ele não é graduado nem doutorado, estude mais.");
}

// Truthy e Falsy
if (false); //é falso
if (0); //é falso
if (NaN); //é falso
if (null); //é falso
if (undefined); //é falso
if (""); // ou "" ou `` //é falso

// -- Todo o resto diferente disso é truthy
if (true); //é verdadeiro
if (1); //é verdadeiro
if (" "); //é verdadeiro
if ("edilson"); //é verdadeiro
if (-5); //é verdadeiro
if ({}); //é verdadeiro

// A ! exclamação invverte o valor booleano de verdade para falso de falso em verdadeiro
console.log(!true);
console.log(!false);
console.log(!"");
console.log(!" ");

// Podemos usar dois sinais de inversão de valor booleano para saber se um valor é truthy ou falsy
console.log(!!"");
console.log(!!" ");

// Operadores de comparação - retornam um valor boolean
10 < 10; //menor que
10 > 7; //maior que
10 >= 7; //maior ou igual que
20 <= 6; // menor ou igual que
20 == 90; // Compara os valores independente do tipo, se os tipos forem diferentes e for possivel converter um tipo para o outros para poder comparar ele vai converter e comparar.
67 === 0; // Compara os dados e até os tipos de dados, o que significa que tipos diferentes como '5' === 5 serão sempre falsos;
70 !== 9; // verifica ate os tipos.

//Operadores Lógicos && -- retornam falso caso uma ou as duas operandos forem falsas.
true && true; // true
true && false; // false
false && true; // false
"Cão" && "Gato"; // false
5 - 5 && 5 + 5; // 0
"Gato" && false; // false;
5 >= 5 && 3 < 6; // true

//Operadores Lógicos || -- retornam verdadeiroa caso um dos operandos seja verdadeiro.
true || true; // true
true || false; // true
false || true; // true
"Cão" || "Gato"; // true 'Cão'
5 - 5 || 5 + 5; // 10
"Gato" || false; //  'Gato';
5 >= 5 || 3 < 6; // true

//Switch

var corF = "Azuls";

switch (corF) {
  case "Amarelo":
    console.log("Cor da manga madura.");
    break;

  case "Verde":
    console.log("Floresta");
    break;

  case "Azul":
    console.log("O mar lindo");
    break;

  default:
    console.log("Selecione algo!");
    break;
}

//Exercicios
var idade = 22, idadeParente = 54;
if(idade > idadeParente){
 console.log('É maior que do parente.');
}else if (idade === idadeParente){
 console.log('É igual que do parente.');
}else{
 console.log('É menor que do parente.');
}

var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //Pega o ultimo positivo
//              3           4            3
//                    4             3           
//                           3
console.log(expressao);

var nome = 'Edilson';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = -10000;

console.log(!!nome, !!idade, !!possuiDoutorado, !! empregoFuturo, !! dinheiroNaConta);

var MOZ = 1e20;
var CHI = 1e100;
if(MOZ > CHI){
console.log('Moz é mais populoso. com ', MOZ);
}else{
console.log('China é mais populoso. com ', CHI);
}

if(('Gato' === 'gato') && (5 > 2)){
console.log('Verdade')
}else {
console.log('Falso')
}

if(('Gato' === 'gato') || (5 > 2)){
console.log('Verdade')
}else {
console.log('Falso')
}