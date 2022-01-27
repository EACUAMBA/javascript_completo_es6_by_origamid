//Prototype
//É como se fosse o nucleo do JS. Ele sempre está ligado a função, não importa o que seja ela sempre está lá.
//Prototype só está na função.

function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
}

//Exste porque é uma função
console.log(Pessoa.prototype);
//não existe porque é um objecto
const edilson = new Pessoa('Edilson', '23');
console.log(edilson.prototype);

//Podemos adicionar funcoes aos prototipos que serão associadas a cada objecto que criamos.
Pessoa.prototype.comer = function (){
  return this.nome + " comeu hoje " + new Date().toISOString();
}

console.log(edilson.prototype);

//Agora todos objectos criados tem o metodo do prototipe. olha;
console.log(edilson.comer());

//Assim ao chamarmos o comer o JS vai procurar o metodo no nosso objecto e se não achar vai verificar no prototypr

// O que o __proto__, isso é algo que o chrome está a gerar pessoalmente, nos não usamos isso-

//é por causa do prototype que conseguimos acessar os metodos dos outros objecto.

// Heranca de prototipo
// O objecto possui acesso aos metodos do prototype do construtor object.

// Cotrutores Nativos
//Todas funcoes possuem um rpototipo nela. por isso tem muitos metodos, isso é heranca de metodos.

//Estamos criando um String que não é objecto mas que em um momento muito rápido étransformado em objecto para acessar os metodos do prototype.
const nome = "Edilson";
//Este é um objecto com prototype
const pais = new String("Mocambique");

console.log(nome);
console.log(pais);

//Mas como todos tem acesso aos memos metodos, isso é por causa do prototype da String, ela é que estasendo usada.
console.log(nome.toUpperCase());
console.log(pais.toUpperCase());

//Podemos acessar a funcao do prototipo - usando o nome da funcao construtora e prototype.funcao()

const listaAnimais = ["Gravatar", "Kigulo", "Opertyou", "Yutiru", "Kortywety"];
console.log(listaAnimais);

//Object.getOwnPropertyNames(onject)
//Podemos ver as propriedades do objecto
Object.getOwnPropertyNames(edilson);

//Entenda o que está sendo retornado
//O objecto é do que esta sendo retornado.

const carro = {
  marca : "Ford",
  ano: 2022,
  andar : function(){
    return "andar";
  }
}

//Exercicios
function Pessoa2(nome, sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade =  idade;
}
Pessoa2.prototype.getFullName = function(){
  return this.nome + " " +this.sobrenome;
}

const luis = new Pessoa2("Luis", "Figu", 23);
console.log(luis.getFullName());

console.log(Object.getOwnPropertyNames(NodeList.prototype))
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype))
console.log(Object.getOwnPropertyNames(Document.prototype))
 
const li = document.querySelector("li");

console.log(li.constructor)
console.log(li.click.constructor)
console.log(li.innerText.constructor)
console.log(li.value.constructor)
console.log(li.hidden.constructor.constructor)
console.log(li.offsetLeft.constructor.constructor)
console.log(li.click())

console.log(li.hidden.constructor.name)

//Não existe constructor de undefined e null

