//Formas de pegar um elemento no DOM

//--Pelo ID
//ex: const elementoSelecionadoPeloId = window.document.getElementById("id-do-elemento");
//const animais = document.getElementById("animais");

//--Pela CLASSE
//Retorna uma lista de elementos com essa classe especificada no parametro, mesmo que somente tenha um elemento no DOM, ele vai retornar sempre uma lista.
//ex: const elementosSelecionadosPelaClasse = docuement.getElementsByClassName("classe-do-elemento");
//ex: const elementosSelecionadosPelaClasse = docuement.getElementsByClassName("classe-do-elemento class-do-outro-elemento"); - Seleciona os elementos que tiverem as duas classes.

//--Pela TagName
//Funciona como a seleção pela class name.
//ex: const elementosSelecionadosPelaTagName = document.getElementsByTagName("ul");
//Os metodos que selecionam elements, retornam uma HTMLCollection um array like;

//--Pelo querySelector e querySelectorAll
//Usamos o mesmo selector que usamos no CSS, o primeiro retorna apenas o primeiro e o ultimo retorna todos que conbinem com o selector passado.
//Este metodo All("") retorna uma array nodeList que é não viva, isso significa que já não esta vinculado com o a lista original, é uma copia.
//const primeiroElementoSelecionadoPeloSelectorCss = document.querySelector(".animais")
//const primeiroElementoSelecionadoPeloSelectorCss = document.querySelector("#contacto")
//const primeiroElementoSelecionadoPeloSelectorCss = document.querySelector("a[href^='https://']")
//const primeiroElementoSelecionadoPeloSelectorCss = document.querySelector(".animais")

//Array Like
// O metodo forEach de array so existe para array e alguns arrays like.

//Como converter array like para array normal.
// const array = Array.from(passa-array-like);

//Exercicios
const imagensDoSite = document.getElementsByTagName("img");
console.log(imagensDoSite);

const imagensDoSiteComecamComImagem = document.querySelectorAll("img[src^='./img/imagem']");
console.log(imagensDoSiteComecamComImagem);

const linksInterno = document.querySelectorAll("a[href^='#']");
console.log(linksInterno);

const priemrioH2 = document.querySelector(".animais-descricao h2");
const animais = document.querySelector(".animais-descricao");
console.log(animais);
const animaisH2 = animais.querySelector("h2");
console.log("Forma 2: ", animaisH2);
console.log("Forma 1: ", priemrioH2);

const ultimoPDoSite = document.querySelectorAll('p');
console.log("Ulimo p: ", ultimoPDoSite[ultimoPDoSite.length-1])
const arrayUltimoPDoSite = Array.from(ultimoPDoSite);
console.log(arrayUltimoPDoSite);
console.log("Ulimo p: ",arrayUltimoPDoSite.pop());








