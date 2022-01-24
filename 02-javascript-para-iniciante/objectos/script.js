/**
 *Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
 *Tudo no JavaScript é objecto
 *Você pode adicionar novas propriedades por chamar essas propriedades objecto.novapropriedade = valor
 * O objecto tem acesso as variaveis que foram criadas fora dele, então use sempre o this.propriedade ou this.metodo
 *Qualquer objecto é filho de Object que é uma função ou objecto e podemos acessar esses metodos no nosso método.
 */

var pessoa = {
  nome: "Edilson",
  apelido: "Cuamba",
  dataNascimento: `27-10-1999`,
};
console.log(typeof pessoa);
console.log(pessoa.nome);
console.log(pessoa.apelido);
console.log(pessoa.dataNascimento);

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return lado * this.lados;
  },
  getLados() {
    return this.lados;
  },
};
console.log(quadrado.area(10));
console.log(quadrado.perimetro(10));
console.log(quadrado.getLados());

var menu = {
  propriedade: "Propriedades existente",
};
menu.novaPropriedade = "nova propriedade";
var valorDoObjecto = menu.propriedade;
console.log(valorDoObjecto);
console.log(menu.hasOwnProperty("color"));

//Exercicios
var edilson = {
  primeiroNome: "Edilson",
  nomesDoMeio: "Alexandre",
  apelido: `Cuamba`,
  dataNascimento: "27-10-1999",
};
console.table(edilson);

edilson.getFullName = function () {
  return `${edilson.primeiroNome} ${edilson.nomesDoMeio} ${edilson.apelido}`;
};
console.log(edilson.getFullName());

var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",

  getInformation: function () {
    return `${this.marca} com ${this.portas} portas está a venda por um preço de ${this.preco} MZN.`;
  },
  obterInformacao() {
    return `${this.marca} com ${this.portas} portas está a venda por um preço de ${this.preco} MZN.`;
  },
};
console.log(carro.getInformation());
console.log(carro.obterInformacao());
carro.preco = 3000;
console.log(carro.getInformation());
console.log(carro.obterInformacao());

var cachoro = {
  raca: "Labrador",
  cor: "preto",
  idade: 10,
  viuHomem: true,
  latir: function (pessoa) {
    if (pessoa === "homem") {
      return `${this.raca} viu um homem, auh, auh, auh`;
    }
  },
};
if (cachoro.viuHomem) {
  console.log(cachoro.latir('homem'));
}
