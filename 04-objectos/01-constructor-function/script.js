//Para construir um objecto basta definir uma variavel e iniciar a definição do seu valor com as chaves {}.

const carro = {
  marca: "marca",
  preco: 0,
};

const honda = carro;
honda.marca = "BMW";
honda.preco = 100000;

const fiat = carro;
fiat.marca = "Fiat";
fiat.preco = 200000;

// Isso ajuda mas e se quisermos um objecto igual ao outro?

function Carro() {
  (this.marca = "marca"),
    (this.preco = 0),
    (this.ligar = () => {
      console.log("Ligar...");
    });
}

const bmw = new Carro();
bmw.marca = "BMW";
bmw.preco = 500000;

const vw = new Carro();
vw.marca = "VW";
vw.preco = 150000;

// {
// //O que o new faz?
// const audi = new Carro();
// //Cria uma instancia vazia
// audi = {};
// //Define o prototipo de bmw comom Carro.
// audi.prototype = Carro.prototype;
// //Aponta a variavel this para o bmw agora
// //this = audi;
// //executa a funcao e substitui i this
// audi.marca = "Audi";
// audi.audi = 0;

// //Retona o novo objecto
// // return audi = {
// //   marca: "Audi",
// //   preco: 0
// // }
// }

function Pessoa(nome, idade) {
  (this.nome = nome), (this.idade = idade);
  this.toString = function toString() {
    return this.nome + ", " + this.idade;
  };
}

const edilson = new Pessoa("Edilson", 27);
console.log(edilson.toString());

//this Keyword
//Faz referencia ao proprio objecto contruido com o function constructor

function Mota(marca, precoInicial) {
  const taxa = 1.5;
  const precoFinal = precoInicial * taxa;

  this.marca = marca;
  this.preco = precoFinal;
  this.comissao = this.preco * 0.05;
}

const suzuki = new Mota("Suzuki", 1000);

//Exemplo real
const DOM = {
  selector: "li",
  element() {
    return (elementoSelecionado = document.querySelector(this.selector));
  },
  activar() {
    this.element().classList.add("activar");
  },
};

function Dom(selector) {
  this.selector = selector;
  this.element = function () {
    return (elementoSelecionado = document.querySelector(this.selector));
  };
  this.activar = function () {
    this.element().classList.add("activar");
  };
}

const ulDom = new Dom("ul");
const lastLi = new Dom("ul li:last-child");

//Exercicios
const pessoa = {
  nome: "Pessoa nome",
  idade: 0,
  andar() {
    console.log(this.nome + " andou.");
  },
};

//constructorFunction
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = () => {
    console.log(this.nome + " andou...");
  };
}
console.log(Pessoa);

//pessoas
const joao = new Pessoa("Joao", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);
console.log(joao);
console.log(maria);
console.log(bruno);

//manipula dom
function Dom2(selector) {
  this.elements = function () {
    return document.querySelectorAll(selector);
  };
  this.addClass = function (classToAdd) {
    this.elements().forEach((element) => {
      element.classList.add(classToAdd);
    });
  };

  this.removeClass = (classToRemove) => {
    this.elements().forEach((element) => {
      element.classList.remove(classToRemove);
    });
  };
}
