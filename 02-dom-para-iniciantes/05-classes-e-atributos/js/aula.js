//Classes e atributos

//classList
//Retorna uma lista com as classes do elemento. Permitindo adicionar, remover e verificar se contem um determinada class.

const menu = document.querySelector(".menu");

console.log(menu.className);
console.log(menu.classList);
console.log(menu.classList.add(`class-nova`));
console.log(menu.classList.add("outra-clase", "outra-nova"));
console.log(menu.classList.remove("classe-nova"));
console.log(menu.classList.toggle("classe-toggle"));
console.log(menu.classList.contains("classe-contem"));
console.log(menu.classList.replace("classe-activa", "classe-inactiva"));

//Atributes
console.log(menu.attributes);
console.log(menu.attributes);
console.log(menu.getAttribute("class"));
//console.log(menu.setAttribute('class', 'Classe nova'));
console.log(menu.hasAttribute("class"));
//console.log(menu.removeAttribute('class'));

//Read Only vs Writable
//Existem atrributos que nao permitem a mudança de seus valores, essas são consideradas Read Only ou seja apenas leitura.

menu.attributes = null; //Read Only

//Exercicios
const itemsMenuArrayLike = document.querySelectorAll(".menu li");
const itemsMenu = Array.from(itemsMenuArrayLike);
itemsMenu.forEach((item) => {
  item.classList.add("activo");
});

itemsMenu.forEach((item, index) => {
  if (index) {
    item.classList.remove("activo");
  }
});

const imgsArrayLike = document.getElementsByTagName("img");
const imgs = Array.from(imgsArrayLike);
console.log(imgs)
imgs.forEach((img) => {
  if (img.hasAttribute("alt")) {
    console.log("Possui!", img);
  } else {
    console.log("Não possaui!", img);
  }
});

const link = document.querySelector('.menu a[href^="http"]');
link.setAttribute('href', 'https://leiacomercial.com')
