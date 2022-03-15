// Uma função construtora (new Promise), temos dois resultados possiveis para uma promisse, resolvido e não resolvido
//Iniciando uma promessa
let promessa = new Promise(function (resolve, reject) {
//Colocamos o valor nos métodos callback resolve ou reject para retornar a informação.
    const condicao = false;
    if (condicao) {
        setTimeout(() => {
            resolve('Edilson Cuamba');
        }, 2000)
    } else {
        reject(Error('Error na promise.'));
    }
});
console.log(promessa);

//O poder das promises está no then, que so funciona quando a promise estiver resolvida.
promessa = promessa.then(
    //O valor do callback é o valor que passamos no método resolve, neste caso "Edilson Cuamba".
    (valorRetornado) => {
        console.log(valorRetornado);
    }
)

// As promises funcionam ou são mais utils com processamento assíncrono.
//Uma promessa pode retornar uma promessa e assim podemos colocar de forma encadeada varios then´s e por aí vai. O ceu é o limite.
promessa = promessa.then(
    (resultado) => {
        return resultado;
    }
).then(
    (resultado) => {
        console.log(resultado.toUpperCase());
    }
)

//Podemos capturar um erro dentro da promisse e tratar ele usando o catch, o catch só é accionado quando um erro ocorre na execução da promessa.
promessa = promessa.catch(
    (error) => {
        console.log(error)
    }
)

//finally executa sempre que a função acaba e não importa se tem erro ou outra coisa.
promessa.finally(
    () => {
        console.log('Eu sou o finally, sempre executo mesmo com erro.')
    }
)

//.all() - podemos passar um array com várias promessas e a promessa só será resolvido quando todas as promises passadas estiverem resolvidas.
let login = new Promise(
    (resolve) => {
        setTimeout(
            () => {
                resolve("Utilizador autenticado.")
            }
        )
    })
let buscarDadosDoUtilizador = new Promise(
    (resolve) => {
        setTimeout(()=>{
            resolve('Dados do utilizador carregados.')
        })
    }
)
const processaAutenticacao = Promise.all([login, buscarDadosDoUtilizador]);
processaAutenticacao.then((r)=>console.log(r))

//.race() - espera o primeiro ser resolvido e usa esse que já foi, para processamento.