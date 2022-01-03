//Funções
/**
 *Um bloco de codigo que pode ser reutilizada, com valores que podem ser passados e retornados.
 *Não é obrigatorio passar argumento para um função que recebe argumento.
 *Argumentos podem ser funções, isso porque você pode imprimir uma função no console.log(funcao), então ele receb a função e executa ela. Essas funções chamam-se anônimas.
 *Callback - quando uma função ocorre após algo que acontece.
 *A função pode ou não retornar um valor, não é obrigatorio, quando não retorna o que retorn é undefined.
 *A função pode retornar diferentes tipos de dados.
*As instruções abaixo de uma instrução return não são executadas mais.
*Hoisting - as funções são carregadas primeiro para a memoria e depois as outras coisas por isso podemos usar uma função que vamos declarar após o seu uso; 

var nome = getNome();
function getNome(){
    return 'Edilson';
}

 */

//Exemplo: metodo que calcula a area deo quadrado.
function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado("Amem")); //1
console.log(areaQuadrado(25)); //625
console.log(areaQuadrado(50)); //2500

function pi() {
  return 3.14;
}
console.log("Imprimindo a função: ", pi);
console.log(pi());
console.log(pi() * 10);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}
console.log(imc(70, 1.68));

function corPredilecta(cor) {
  if (cor === "azul") {
    return "O mar e o céu são aliados.";
  } else if (cor === "vermelha") {
    return "Sangue é bom dentro do corpo na veia.";
  } else {
    return "Você não gosta de nenhuma cor?";
  }
}
console.log(corPredilecta);
console.log(corPredilecta());
console.log(corPredilecta("azul"));
console.log(corPredilecta("vermelha"));

console.log(window);
window.addEventListener("click", function () {
  this.alert("Você clicou!");
});

function retornaUndefined() {
  console.log("Eu retorno Undefined");
}
console.log(retornaUndefined());

//Não é uma boa pratica retornar diferentes tipos de dados.
function retornaDiferentesTiposDados(valor) {
  console.log(typeof valor);
  if (typeof valor !== "number") {
    return "Quero numero!";
  } else if (valor === 0) {
    return false;
  } else {
    return true;
  }
}
console.log(retornaDiferentesTiposDados("2"));

console.log("Ola");
function paisesQueFaltaVisitar(paisesVisitados) {
  if (typeof paisesVisitados !== "number") {
    console.log("Introduza um numero.");
    return;
  }
  var paisesNoMundo = 193;
  return `Você ainda deve visitar ${paisesNoMundo - paisesVisitados} países.`;
}
console.log(paisesQueFaltaVisitar(""));
// console.log(paisesNoMundo); Variavel inacessivel porque foi declarada dentro de um escopo diferente.

var profissao = "Developer";
function dados() {
  var nome = "Edilson";
  var idade = 22;
  function outrosDados() {
    var apelido = "Cuamba";
    var idade = 23;
    return `Dados de ${
      nome + ` ` + apelido
    }, ele tem ${idade} anos e a sua profissão é ${profissao}.`;
  }
  return outrosDados();
}

console.log(dados());

//Exercicios
function ehTruthy(valor) {
  return !!valor;
}
console.log("é truthy? Resp.: " + ehTruthy(0));

function getPerimetroQuadrado(lado) {
  return lado * 4;
}
var lado = 25;
var perimetroQuadrado = getPerimetroQuadrado(lado);
console.log(
  `O perimetro do quadrado de lado medindo ${lado} metro é ${perimetroQuadrado} metro.`
);

function isNumberEvenOrOdd(number) {
  if (typeof number !== "number") {
    console.log("Espero um número.");
  } else if (+number % 2 === 0) {
    console.log("é um numero par.");
  } else if (+number % 2 !== 0) {
    console.log("não é um numero par, é impar.");
  }
}
isNumberEvenOrOdd(9);

function whatIsTheTypeOf(value){
return typeof value;
}
console.log(whatIsTheTypeOf(''));

function mostraNomeConsole(){
console.log(('Edilson Alexandre Cuamba'));
window.document.body.innerHTML = `<h1 style='display:flex;justify-content: center; align-items:center; height: 100vh; background: crimson; color: white; font-family: Montserrat, sans-serif'>${('Edilson Alexandre Cuamba')}</h1>`;
}
window.addEventListener("scroll", mostraNomeConsole);

var totalPaises;
function precisoVisitar(paisesVisitados) {
  totalPaises = 193;
  return `Você ainda deve visitar ${totalPaises - paisesVisitados} países.`;
}
function jaVisitei(paisesVisitados){
return `Já visitei ${paisesVisitados} do total de ${totalPaises} países.`
}

console.log(
precisoVisitar(20),
jaVisitei(20)
);




