// Rest
// Serve par nos dar todos os argumentos como array

function perimetro(lado, totalLados = 4) {
    //Estamos a definir um valor padrão para a var caso ela esteja nula ou undefined.
    totalLados = totalLados || 4;

    //Podemos ter todos os argumentos que o cliente passou no metodo, como o objecto immplicito chamado arguments;
    //Arguments é um array like.
    console.log(Array.from(arguments));

    //Podemos obter os argumentos com o parametro rest;

    return lado * totalLados;
}

console.log(perimetro(10, 20))
console.log(perimetro(10))

// Rest
//Podemos pegar varios argumentos de uma vez, sem saber quantos vao ser passados.
//So podemos colocar apenas um e esse se colocado com outros parametros normais deve ser o ultimo.
function perimetro2(b, ...lados) {
    console.log(b)
    return lados.reduce(((previousValue, currentValue) => {
        return previousValue + currentValue
    }))
}

console.log("p1", perimetro(20, 4))
console.log("p2", perimetro2("figura", 20, 20, 20, 20))

// O arguments (temos um protoripo de array, podemos tratar como array) pega tudo e o rest pega somente a var que declaramos com o 3 pontos antes (...var);

//Spread
//Podemos usar o spread para espalhar os items de um array dentro de outro array
//usamos os tres pontos assim como no rest.
const contratados = ['edilson', 'jean']
const estagiarios = ['fortunato', 'stelio']

const funcionarios = ['jack', ...contratados, ...estagiarios]
console.log(funcionarios)

//Podemos passar um spread em uma lista de argumentos.
//Max espera um rest, uma lista de argumento, entao passamos com o spread para termos esse efeito.
const rates = [1, 3, 2, 54, 4, 56, 75, 5];
console.log("Max rate: ", Math.max(...rates))


//Exercicios

// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = "red", color = "gray") {
    const buttonElement = document.createElement('button');
    buttonElement.style.color = color;
    return buttonElement;
}

const redButton = createButton();

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];
comidas.push(...frutas)
console.log("frutas", comidas)



