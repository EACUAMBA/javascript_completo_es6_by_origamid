//setTimeout(callback, tempo, arg1, arg2, ...) - definimos um callback e passamos um tempo nele, assim ele vai executar um código após esse tempo passar.
//Isso não significa que o método vai ser executado logo após o tempo terminar, isso significa que o método vai para a fila de mtodos para serem executados logo. Se nessa fila chamada de call stack tiver nada ele vai executar logo caso tenha algo, ela vai esperar até chegar a sua vez.

function espera(texto) {
    console.log(texto);
}

setTimeout(espera, 5000, "Executei após um segundo.");

//Se não passarmos o tempo de espera ele vai entrar na call stack logo na execução.

//Loops e setTimeout()
//Ao adicionar vários setTimeout dentro de um loop, vamos definir o tempo inicial como igual. Isso porque o loop executa logo em questão de ms então os setTimeout() serão executados ao mesmo tempo.

// for (let i = 0; i <= 20; i++)
//     setTimeout(function (){
//         console.log(i * 1000);
//     });

//Para corrigir o loop devemos inserir os times com uma diferença.

//This e window
//O this dentro do callback do setTimeout() faz referencia ao objecto window.
//Ao usar arrow function o this aponta para o this do objecto pai

/*
const btn = document.querySelector("button");
btn.addEventListner('click', handleClick);
function handleClick(){
setTimeout(()=>{
    this.classList.add('active');
    });
}

setTimeout(()=>{
    console.log()
});
 */

//setInterval(callback, tempo, arg1, arg2, ...)
//activa o callback toda vez que a quantidade de tempo especificada passar.

function loop(texto) {
    console.log(texto);
}

// setInterval(loop, 1000, 'Passou 1s');

//loop a cada segundo
// let i = 0;
// const intervalSoma = setInterval(() => {
//     console.log(i++);
//     if (i == 10)
//         clearInterval()
// }, 1000);
//para parar o setInterval() devemos colocar em uma variavel e chamar o clearInterval(intervalVar)

//Exercicios

// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const body = document.body;
setInterval(changeColor, 2000);

let proximaCor = 'blue';
function changeColor() {
    if (proximaCor === 'blue') {
        body.style.backgroundColor = 'blue';
        proximaCor = 'red';
    } else if(proximaCor === 'red') {
        body.style.backgroundColor = 'red';
        proximaCor = 'yellow';
    }
    else if(proximaCor === 'yellow') {
        body.style.backgroundColor = 'yellow';
        proximaCor = 'pink';
    }else if(proximaCor === 'pink') {
        body.style.backgroundColor = 'pink';
        proximaCor = 'blue';
    }
}


// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const button_iniciar = document.querySelector('[data-cronometro="iniciar"]')
const button_pausar = document.querySelector('[data-cronometro="pausar"]')
const button_reiniciar = document.querySelector('[data-cronometro="reiniciar"]')
const p_time = document.querySelector('[data-cronometro="time"]')
let intervalCronometro;
let segundos = 0;
let minutos = 0;

button_iniciar.addEventListener('click', iniciaContagem);
button_reiniciar.addEventListener('click', reiniciarContagem);
button_pausar.addEventListener('click', pausarContagem)

function iniciaContagem(event) {
    event.preventDefault();
    this.setAttribute('disabled', '');
    intervalCronometro = setInterval(
        contar,
        1000
    )
}
function reiniciarContagem(event) {
    button_iniciar.setAttribute('disabled', '')

    event.preventDefault();
    segundos = 0;
    minutos = 0;
    clearInterval(intervalCronometro);
    intervalCronometro = setInterval(
        contar,
        1000
    )
}
function pausarContagem(event) {
    event.preventDefault();
    clearInterval(intervalCronometro);
    button_iniciar.removeAttribute('disabled')
}


function contar() {
    if(segundos === 59){
        minutos++;
        segundos = 0;
    }else {
        segundos++;
    }
    p_time.innerHTML = minutos + ':' + segundos.toString().padStart(2, '0');
}
