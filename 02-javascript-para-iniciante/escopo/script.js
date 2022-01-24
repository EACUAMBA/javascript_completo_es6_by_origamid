//Ecopo de função é uma area onde quando declaramos variaveis elas noa se encontram disponíveis fora desssa área.

function imprimir (){
  //Dentro do escopo do método imprimir quando declaramos uma variavel ela não estara disponível fora deste escopo.
  var valorEscopoFuncao = 'BMW X6 2022';
  console.log(valorEscopoFuncao);
}

//console.log(valorEscopoFuncao);//Teremos erro pois a variavel nao existe no escopo actual.

//O escopo ajuda a evitar o conflito de nome, para nao termos um nome de variavel sendo confundida com o outro, isso também é chamado de namespace uma forma de separar os espaços para as variáveis no PHP, C# e etc.
// variáveis globais podem ser criadas em qualquer lugar e sao acessiveis apartir de qualquer lugar. As variáveis globais sao declaradas assim " variavel = valor", isso é um erro, nao use desse jeito; para evitar que sem querer alguem use isso, no início do ficheiro script adiciona a instrução 'use strict' com as aspas simples, o JavaScript vai entrar no modo estrito dele.
'use strict'

function roda(){
  carro = 'MAZDA RX8';
  console.log(carro)
}
roda();
//console.log('forra do escopo nao devia funcionar mas, ', carro);

//escopo de bloco - quando uma variável esta declarada dentro de um escopo de uma instrucao if, while, for etc, isso é um vazamento de escopo, nao devia estar a funcionar. para evitar isso declare a variável com const ou let.
if(true){
  var sireneVar = 'amarelo';
  let sireneLet = 'amarelo';
  const sireneConst = 'amarelo';
}
console.log(sireneVar);


//Usando const
const semana ='Sexta';
console.log(semana);
//semena = 'sabado'; as instruções abxizo nao serão executados.
//const semana = 'domingo'; erro no hoisting nenhum codigo vai ser executado deste ficheiro.

const data = {
  dia : 15,
  mes : 01,
  ano : 2022
}
//data = '16, 01, 2022'; nao podemos re atribuir o valor a variável.
console.log(data);
//Você pode alterar os valores do objeto mas nao a referência na memória ram.
data.dia = 16;
console.log(data);

// let impede o vazamento de escopo e permite e re atribuição;
let ano = 2022;
ano=2024;
console.log(ano);

//Exercícios
 {
   var cor = 'preto';
   const marca = 'Fiat';
   let portas = 4;
   console.log(cor, marca, portas)
 }
 //console.log(var, marca, portas)
 //Temos erro porque queremos imprimir uma variavel que nao foi difinida a var e ela é uma palavra reservada var.
 //Outro erro é por tentar acessar variaveis de escopos diferentes, marca é uma variaval que nao existe no escopo actual.
 //portas tambem nao existe.
 
 
 const dois = 2;
 function somarDois(x){
   return x + dois;
 }
 
 function dividirDois(x){
   return x / dois;
 }

console.log(somarDois(4));
console.log(dividirDois(4));

var numero = 50;
for (let numero = 0; numero < 10; numero ++){
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

