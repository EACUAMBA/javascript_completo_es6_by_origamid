//O que é dom?
// Document Object Model - uma interface que vai representar um documento HTML ou XML atravez de objetos. Com ele podemos manipular a estrutura, estilo e conteúdo destes documentos.

//window é um objecto global do browser e possui diferentes metodos e propriedades.
console.log(window);

//O window tem diversas propriedades e funções, uma delas é o documento, que representa um documento HTML.

dom = window.document;
//Dentro desse objeto temos muitas funções e propriedades wue representam os nossos elementos HTML no documento.

//para podermos trabalhar com os elementos do dom devemos obter os elementos da página com uma função ex: querySelector(".nome"); wue retorna um array de elementos wue tem a classe .nome;
const nome1 = dom.querySelector(".nome");
console.log(nome1);

//Nem sempre precisamos usar o window para chamar as funções e propriedades, o window é um objeto global e so de fazer document o motor JavaScript ja sabe que falamos da propriiedade do window document.

window.console.log(document.querySelectorAll("body"));

//todos os elementos do dom herdam da classe Element por isso tem varios metodos e propriedades dessa classe.

const nome = document.querySelector('.nome');
console.log(nome.innerText);
console.log(nome.classList);
console.log(nome.id);
console.log(nome.offsetHeight);

function callbackH1(){
  console.log(nome.innerHTML);
}
nome.addEventListener('click', callbackH1);

//Exercícios
let url = window.location.href;
console.log(url);

const activo = document.querySelector('.activo');
console.log(activo);

const language = window.navigator.language;
console.log(language);

const windowWidth = window.innerWidth;
console.log(windowWidth);

const screenWidth = window.screen.width;
console.log(screenWidth);
