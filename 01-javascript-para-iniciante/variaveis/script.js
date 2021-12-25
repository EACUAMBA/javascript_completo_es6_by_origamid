var nome = "Edilson";
var idade = 22;
var possuiFaculdade = false;
console.log(nome, idade, possuiFaculdade);

var precoUnitario = 250;
var quantidadeAdquirida = 7;
var totalPagar = precoUnitario * quantidadeAdquirida;
console.log("O preço que você vai pagar é ", totalPagar, "MZN");

var nomeCompleto = "Edilson Alexandre Cuamba",
  morada = "Maputo em Moçambique";
console.log("Meu nome é ", nomeCompleto, "moro em ", morada);

var valorUndefined;
console.log(`este valor não foi definido ${valorUndefined}`);

/*
Declarações de variaveis inválidas
var !nome;
var function;
var 1nome;
 */

//Declaraões válidas
var $selecionado;
var _nome;
var possuiFamiliares;

//Hoisting - ao declarar um variavel em baixao de onde usar a declaração será movida para cima.
console.log(variavelNaoDefinida);
var variavelNaoDefinida = "Não definida.";
console.log(variavelNaoDefinida);

var primeiroNome = "Edilson";
primeiroNome = "David";
console.log(primeiroNome);

let apelido = "Alexandre";
apelido = "Cuamba";
console.log(apelido);

const imutavel = "Chocolate";
// imutavel = 'Caramelo'; não podemos mudar o valor de uma variavel const
console.log(imutavel);

//Exercicios
var nome = "Edilson";
var idade = 22;
var comida;
comida = "Feijoada";

var sexo, nacionalidade, email, nomedamae, nomedopai;
