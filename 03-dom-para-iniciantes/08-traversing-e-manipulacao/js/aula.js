//Passando por cima só
//element.outerHTML //-Retona o HTML incluindo o prorpio elemento
//element.innerHTML - Retona o html excluinto o elemento
//element.innerText//-Traz somente o texto. Ao atribuir um valor texto com tags elas não serão renderizadas mas sim apresentadas como texto.
const h1 = document.querySelector(".animais h1");



//Traversing e Maniputlação
// Navegar sobre o dom. Selecionar um elemento e conseguir selecionar os filhos ou o paie e por aí vai.

const lista = document.querySelector(".animais-lista");
console.log(lista);
console.log(lista.parentElement); //pegando o pai do elemento
console.log(lista.previousElementSibling);//Pega o elemento anterior acima deste.
console.log(lista.nextElementSibling); //Pega o elemento ao lado abaixo.
console.log(lista.children); //Pega os filhos do elemnto
console.log(lista.children[lista.childElementCount -1 ]); //Pega os filhos do elemnto

//Posso ainda usar selectores html dentro deste elemento
console.log(lista.querySelectorAll("*"));// retonr todos os elementos filhos da lista;
console.log(lista.querySelectorAll("*:last-child"));// retonr todos os elementos filhos da lista;

//Se usarmos childNodes vamos ter varios elementos incluindo comentarios, sinais de enter, espaços e outras coisas.
console.log(lista.childNodes)


//Manipulando elementos
//Podemos pegar um elemento e colocar em outro lugar.
const animais =  document.querySelector(".animais");
const contacto = document.querySelector(".contacto");
const tituloContacto = contacto.children[0];

//animais.append(tituloContacto); //Move u ou adiciona um elemento dentro do elemento o qual chamamos o append.

//animais.insertBefore(contacto, animais.children[1]);//Estou inserindo um elemnto dentro a secao animais antes do segundo elemento da lista.

//contacto.removeChild(tituloContacto);
const elementReplaced = contacto.replaceChild(animais.firstElementChild, tituloContacto);

animais.insertBefore(elementReplaced, animais.children[0])

//Novos elementos 
//Podemos criar elemento e adicionar na tela dinamicamente.
const novoH1 = document.createElement("h1");

novoH1.innerText= "Edilson aprendendo JAVASCRIPT";
novoH1.classList.add("titulo");

animais.appendChild(novoH1);

//Clone de elementos
//element.cloneNode(true), o true indica que queremos fazer uma clonagem profunda com os elementos filhos.

const h1Clonado = h1.cloneNode(true);
h1.parentElement.appendChild(h1Clonado);


//Exercicios
const menuClone = document.querySelector(".menu").cloneNode(true);
document.querySelector(".copy").appendChild(menuClone);

const fdt=document.querySelector(".faq dl dt");
console.log(fdt);
console.log(fdt.nextElementSibling);

const faq = document.querySelector(".faq");
faq.innerHTML = document.querySelector(".animais").innerHTML;








