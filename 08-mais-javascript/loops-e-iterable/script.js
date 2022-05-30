//Iterable
//Objectos que tem Symbol.iterator, maior parte dos arrays são iteraveis.

const frutas = ['Ananaz', 'Banana', 'Cominho'];
const frase = 'Edilson Alexandre Cuamba';

//Com iterators podemos usar o o loop for..of
for(const fruta of frutas){
    console.log(fruta);
}

//Podemos usar let para alterar a variaveil durante a iteracao

for(const char of frase){
    console.log(char);
}

// Só funciona com iteraveis.

const carro = {
    fabricante: 'toyota',
    modelo: 'fortuner',
}

//O for in so funciona com propriedades enumeraveis.
Object.defineProperties(carro, {
    rodas:{
        value: 4,
        enumerable: true
    }
})

for (const key in carro){
    console.log(key, carro[key])
}


const button = document.querySelector("button")

const btnStyle = getComputedStyle(button);

for(const style of btnStyle){
    console.log(`estilo ${style}: valor ${btnStyle[style]}`)
    break
}

for(const index in btnStyle){
    console.log(`indice ${index}: estilo ${btnStyle[index]}: valor ${btnStyle[btnStyle[index]]}`)
    break
}

//Do while
let index = 0;
do{
    console.log(index++)
}while(index<5)


//Exercicios
// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const body = document.body;
const ul = document.createElement("ul");
let i = 1;
do{
    const li = document.createElement("li");
    li.innerText = 'Eu sou o numero ' + i;
    ul.append(li)
    i++;
}while (i <= 4)
body.append(ul)

const lis = document.querySelectorAll('li')
for(const li of lis){
    li.classList.add('classe')
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(const prop in window){
    console.log(`Propriedade ${prop}, valor ${window[prop]}`)
}

