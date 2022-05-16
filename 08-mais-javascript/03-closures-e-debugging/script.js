//Closure and Debugging
//Escopo

let nome = "nome global"
function funcao1() {
    let nomef1 = nome;
    function funcao2(){
        let nomef2 = nomef1;

        function funcao3() {
            let nomef3 = nomef2;
        }
        funcao3()
    }
    funcao2()
}
funcao1()

// A função funcao3 é á única que tem acesso aa todas as vária-veis.

// Clojure
// A função3 tem cinco escopos, o escopo local que tem a váriavel nomef3, e tem o escopo segundo que tem o nomef1 assim sucessivamente;

function contagem() {
    let total = 1;
    return function incremento () {
        total++;
        console.log(total);
    }
}

const incrementof = contagem();
incrementof();
incrementof();
incrementof();
incrementof();
incrementof();

// Closure -> acto de fechar, encerramento.
// Stack -> pilha, monte
