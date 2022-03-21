//JSON - Javascript Object Notation
//Formato para organização de dados.
//Todas as Strings ficam dentre aspas duplas e os valores numéricos e booleanos (lógicos) não precisam de invólucro.

fetch("./dados.json")
.then((response)=>{
    return response.json()
})
.then((dados)=>{
    console.log(dados)
    for(let dado in dados){
        console.log(dados[dado])
    }
})


//Classe JSON
//.parse() - converrt uma string ou objecto JSON em um objecto JavaScript
//.stringfy() - Converte uma objecto em um objecto JSON
fetch("./dados.json")
    .then(async (response) => {
        return JSON.parse(await response.text())
    })
    .then((dados)=>{
        console.log(dados)
        for(let dado in dados){
            console.log(dados[dado])
        }
    });

const configuracoes = {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 JavaScript",
}

console.log(JSON.stringify(configuracoes))

localStorage.configuracoes = JSON.stringify(configuracoes);
//Podemos armazenar uma texto JSON no local storage.

console.log(JSON.parse(localStorage.getItem("configuracoes")))
