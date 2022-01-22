const imgs = document.querySelectorAll("img");

//Usado para iterar sobre um array, ele recebe como parametro um objecto function que chamamos de callback.
imgs.forEach(function(item, index, array){
console.log(item, index, array);
})

//Se estivermos a usar um array like, um array sem metodos de array, vamos transformar o array like para array com Array.from(array like) que retorna um array.
const titulos = document.getElementsByClassName("titulo");

//Convertendo para array
const titulosArray = Array.from(titulos);

//com arrowfunction
titulosArray.forEach((item) => {
  console.log(item);
});

//Arrow Function
//Se tiver so um argumento não precisa de parenteses. ex: item => {instrução}
// Se não tiver argumento precisa ter parenteses. ex: () => {instrução}
//Se o codigo so tiver uma instrução posso remover  a instrução return. ex (item)=>{intrução}
//Se tiver somente uma instrução não precisa de chavetas {}.
//Se a instrução não ticer chavetas não precisa de ponto e virgula. ex: ()=> intrução

//Exercicios
const pArrayLike = document.getElementsByTagName("p");
const pArray = Array.from(pArrayLike);
pArray.forEach(item=>console.log(item));

pArray.forEach(item=>console.log(item.innerText));

const imgs2 = document.querySelectorAll("img");
imgs2.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs2.forEach(() =>{
  console.log(i++)
});

imgs.forEach(() => i++);
