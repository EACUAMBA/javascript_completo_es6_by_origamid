//É uma forma de criar função usando uma expressão de atribuição.
//Forma antiga factory declaration
function soma(valor1, valor2) {
    return valor1 + valor2;
}

console.log(soma(10, 50));

//Forma com factory expression
const subtrai = function (valor1, valor2) {
    return valor1 - valor2;
}

console.log(subtrai(200, 50));

// Geralmente usamos const porque não vamos mudar a implementação.
// Usando o factory expression o HOISTING vai armazenar logo no inicio a função na memoria e ja teremos isso antes mesmo de declarar.

const divide = (a, b) => a / b;
console.log(divide(10, 30));

//Podemos usar o function expression para não sobre escrever as funções do objecto window, como quando fazemos uma função com o function declaration as nossas função são anexadas as função do window se o window tiver um com o mesmo nome será sobrescrita.

// IIFE - Immediately Invoked Function Expression
// Usamos ela para insolar o escopo de uma função ou para ela não influenciar em nada de fora dela.
// Agora substituímos com os módulos.

const nome = "Edilson";
(function () {
    const nome = "Alcidio";
    console.log(nome);
})();
(() => {
    const nome = "Luis";
    console.log(nome);
})();
console.log(nome)

//Exercícios
// Remova o erro
const priceNumber = function (n) {
    +n.replace('R$', '').replace(',', '.')
};
priceNumber('R$ 99,99');

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(
    function () {
        var name = "andre";
    }
)();


// Como podemos utilizar
// a função abaixo.
const active = callback => callback();
