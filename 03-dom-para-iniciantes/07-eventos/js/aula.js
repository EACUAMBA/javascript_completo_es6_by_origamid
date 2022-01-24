//Eventos
//Usamos para adicionar iteratividade ao site.

//Usamos o metodo addEventListener(nomedoevento, callback), passamos o nome do evento e a funcão acionadad caso o evento seja disparado.

//A funcao callbakc do lostener pode ter um parametro que é um objecto do tipo event com os detalhes sobre o clique.

const img = document.querySelector("img");
const callback = (event)=>{
  console.log("Clicou");
  console.log(event.target)
};

img.addEventListener("click", callback);

const listaAnimais = document.querySelector(".animais-lista");
function callbackLista(event){
  console.log(event.currentTarget); // retorna o elemento com o evento
  console.log(event.target); //retonr ao elemento clicado, as vezes são iguais as vezes não
}
listaAnimais.addEventListener("click", callbackLista);

//event.preventDefault();
//Impede o comportamento normal que o elemento tinha quando o evento era disparando, link externo deixa de levar o usuario para página externa.
const linkExterno = document.querySelector("a[href^='http']");
function callback_handleClickExterno(event){
  console.log(event);
  event.preventDefault();
}
linkExterno.addEventListener('click', callback_handleClickExterno);

//this
//Dentro do callback this referi-se ao currentTarget, ao elemtno que adicionamos o evento.

function callback_handleClickExterno(event){
  console.log(event.currentTarget);
  console.log(this);
  event.preventDefault();
}
linkExterno.addEventListener('click', callback_handleClickExterno);

//Diferentes eventos
//Existem diferentes eventos para diferentes ocasioes.
const h1 = document.querySelector("h1");
const callback_handleH1 = function(event){
  console.log(event.type, event);
}

// h1.addEventListener("click", callback_handleH1);
// h1.addEventListener("mouseenter", callback_handleH1);
// h1.addEventListener("mousemove", callback_handleH1);

//window.onscroll = callback_handleH1;
//window.onkeydown = callback_handleH1;

//Keyboard
//Podemos adicionar atalhos para facilitar a navegação no nosso site com keybord.
const callback_handleShortcut = function(event){
  if(event.key === "r"){
    console.log(event.key, event);
    document.querySelector(".menu").classList.toggle("menu-mobile")
  }
}

window.onkeydown= callback_handleShortcut;

//forEach e Eventos
//Podemos fazer um loop e adicionar eventos a muitos elementos de uma só vez.
const callback_handleImg = function(event){
  console.log("Handle IMG")
  console.log(event.currentTarget)
  console.log(event.target)
}
document.querySelectorAll("img").forEach((img)=>img.addEventListener('click', callback_handleImg));

// Exercicios
const linksInternos = Array.from(document.querySelectorAll("a[href^='#']"));

function handle_clickLink(event){
  //Desabilitando o comportamento padrao do elemnto com o click.
  event.preventDefault();

  //Removendo a classe activo dos links
  linksInternos.forEach((link)=>{
    link.classList.remove("activo");
  });

  //Adicionando o evento activo ao link clicado
  event.target.classList.add("activo");
  
}
//Adicionando o evento aos links internos
linksInternos.forEach((item)=>{
  item.addEventListener("click", handle_clickLink);
})

const elementoBody = document.querySelector("body");
const elementosAposBody = document.querySelectorAll("body *");

function callback_handleClickAnyElemento(event){
  console.log(event.target);
  //Remove o elemnto da página
 event.target.remove();
}
elementoBody.addEventListener("click", callback_handleClickAnyElemento);

window.onkeydown = function (event){
  if(event.key === "+"){
    // document.querySelectorAll("*")
    // .forEach((item)=>{
    //   item.style.fontSize = (+window.getComputedStyle(item).fontSize.replace("px", "") + 2) + 'px';
    // })
    document.documentElement.style.fontSize = "120%";
  }else if(event.key === "-"){
    document.querySelectorAll("*")
    .forEach((item)=>{
      item.style.fontSize = (+window.getComputedStyle(item).fontSize.replace("px", "") - 2) + 'px';
    })
  }
}