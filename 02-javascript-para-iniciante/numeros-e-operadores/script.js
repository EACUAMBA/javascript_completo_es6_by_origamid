//Numeros
var idade = 22; //Inteiro
var saldo = 1000; //Inteiro
var preco = 25.45; //  Número decimal, com ponto flutuante.
var exp = 2e10; // Isto vai formar um número mais ou menos assim. 2 0000000000 com 10 zeros. 

console.log(idade);
console.log(saldo);
console.log(preco);
console.log(exp);

//Operadores Aritméticos Binários
var soma = 100 + 50; //150
var subtracao = 100 - 50; //50
var multiplicacao = 100 * 2; //200
var divisao = 100 / 4; //25
var expoente = 2 ** 4; //16
var modulo = 14 % 5; //4 

// Soma em Strings serve para concatenar.
// Operadores com strings
var soma = '100' + 50; // 10050
var subtracao = '100' - 50; //50
var multiplicacaoString = '100' * '2'; //200
var divisaoString = 'Comprei 10' / 2; //NaN; podes usar isNaN() para verificar se uma variável é ou não NaN.

// A ordem importa, o interpretador do JS vai executar primeiro Multiplicação e Divisão e depois Soma e Subtração, lembrando que o que está dentro de parentesis tem muita prioridade.
var somaMuilti = 10 + 20 * 2;
var subMulti = 50 - 40 / 2;
var parentesis = (10 +20 -15) * 2 / 3;

//Operadores Unarios
//Incremento
var valorInit = 1;
console.log(valorInit++);
console.log(++valorInit);

//Decremento
var valorInit = 100;
console.log(valorInit--);
console.log(--valorInit);

//Transformação - Os sinais + e - seguidos de uma variavel do tipo String temtam transformar o valor dessa variavel em Number; com o sinal q

var valor = '700';
console.log(typeof valor);
valor = +valor;
console.log(typeof valor);
console.log(valor);

// Exercicios
var total = 10 + 5 * 2 / 2 + 20; // res: 35

var resNaN1 = 'Valor 1' / 2;
var resNaN2 = +'Valor 1';

var somaString = +'200' + 50;

var o = 5;
++o;
console.log(o);

var numero = '80';
var unidade = 'kg';
var peso = +numero;
var pesoPorDois = peso / 2;
console.log(pesoPorDois + unidade);







