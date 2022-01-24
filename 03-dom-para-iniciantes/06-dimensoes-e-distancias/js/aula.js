//Dimensões e Distancias

//Height e Width
//Estas são propriedade e métodos dos objectos Element e HTMLElement, a maioria delas são ReadOnly

const section = document.querySelector(".animais-lista");

console.log(section.clientHeight);
console.log(section.offsetHeight);
console.log(section.scrollHeight); //Use este para ter o tamanho total do elemento incluindo a parte oculta.

//O mesmo acontece para width.

const animaisTop = section.offsetTop; // Retorna a distancia entre a borda superior da tela, do windows, e o elemento. Tem outros como left, right, bottom.
console.log(animaisTop);

//getBoundingClienteRect();
//Retorna um objecto com valores de distancia de uma elemento.
const rect = document.querySelector("h2").getBoundingClientRect();
console.log(rect);

//Window
//Retorna dados sobre a janela (windows) do usuario, podemos saber o tamanho da tela do usuario.
console.log(
  window.innerHeight,
  window.innerWidth,
  window.outerHeight,
  window.outerWidth,
  window.pageXOffset, //dinstancia entre o topo do window e o inicio do scroll
  window.pageYOffset
); //Não utilize isto, utilize matchMedia()

const mobile = window.matchMedia("(max-width: 600px)");
if (mobile.matches) {
  console.log("É mobile.");
} else {
  console.log("Não é mobile.");
}

//Assim já podemos verir ficar se um elemento está na tela ou já saio.
if (
  section.getBoundingClientRect().top +
    section.getBoundingClientRect().height <= //Pegando a distancia entre o elemento e o tamanho do elemento e comparando com 0 se o valor for maior que sezo o elemento está embaixo do top e for negativo esta acima, já passou do topo.
  0
) {
  console.log(`O elemento não está visivel.`);
}

//Exercicios
const firstImageRect = document.querySelector("img").getBoundingClientRect();
console.log(
  "A distancia da primeira imagem com o topo é de: ",
  firstImageRect.top,
  "px"
);

//Colocamos no window.load para ele ser acionado somente quando a página já for tudo carregado.
window.onload = ()=>{
  const imgSum = Array.from(document.querySelectorAll("img"))
  .map((img) => img.getBoundingClientRect().width)
  .reduce((anterior, actual) => {
    return anterior + actual;
  });
console.log("A soma é ", imgSum);
}

window.onscroll = ()=>{
  const links = Array.from(document.querySelectorAll("a"))
.filter((link)=> {
  return ((link.getBoundingClientRect().height < 48) || (link.getBoundingClientRect().width < 48));
});
links.forEach((link)=>{
  console.log("Links que não seguem o recomendado: ", link);
});
}

const browserWidth = window.matchMedia("(max-width: 720px)");
if(browserWidth.matches){
  console.log(browserWidth);
  document.querySelector(".menu").classList.add("menu-mobile");
}