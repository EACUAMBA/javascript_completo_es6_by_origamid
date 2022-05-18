//Destructuring
// Desestruração de arrays e objectos e colocar em objectos.
//Os nomes das propriedades devem ser os mesmos.

//Exemplo
const carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: "2021"
};

// const marcaCarro = carro.marca;
// const modeloCarro = carro.modelo;
// const anoCarro = carro.ano;

//Desestruturamos e armazenamos em variaveis as propriedades do classe, ou objecto.
const {marca, modelo, ano} = carro;

console.log(marca, modelo, ano);

//Exemplo prático
const cliente = {
    nome: 'Andre',
    compras: {
        digitais: {
            livros: ['Livro 1', 'Livro 2'],
            videos: ['Video JS', 'Video HTML']
        },
        fisicas: {
            cadernos: ['Caderno 1']
        }
    }
}

// Forma repetitiva
// const livros = cliente.compras.digitais.livros;
// const videos = cliente.compras.digitais.videos;

// Forma intelgente, astuta
const {livros, videos} = cliente.compras.digitais;
const {digitais, fisicas} = cliente.compras;

console.log(livros)
console.log(videos)
console.log(digitais)
console.log(fisicas)

// Podemos definir um valor padrão para caso a var não esteja definida.
const {email = 'Edilson@boostpro.co.mz', nome} = cliente;
console.log(email, nome)

// Destructing Array, para desestruturar devemos colocar dentro de colchete

const frutas = Array.of("Banana", "Maça", "Pera");
const [primeira] = frutas;
console.log(primeira);

// Para um array grande
const [edilson, alcidio] = Array.of('Honda', "BMW");
console.log(edilson, alcidio);

//Destruturing Arguments
// Para isso

document.addEventListener("keyup", function ({key, keyCode}){
    console.log(key)
    console.log(keyCode)

})

//Exercicio
// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = window.getComputedStyleCustom(btn);
console.log(btnStyles)
function getComputedStyleCustom(btn) {
    const {color, backgroundColor, margin} = window.getComputedStyle(btn);
    return {
        color, backgroundColor, margin
    }
}



// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
console.log("cursoAtivo: " + cursoAtivo, "cursoInativo: " + cursoInativo)

// Corrija o erro abaixo
const cachorro = {
    nome: 'Bob',
    raca: 'Labrador',
    cor: 'Amarelo'
}

const {cor: bobCor} = cachorro;

console.log(bobCor)

