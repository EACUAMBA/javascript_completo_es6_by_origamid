const doc = fetch('./doc.txt')

doc.then((response) => {
    return response.text()
}).then((text) => {
    console.log(text)
})

//Ficheiros blob, eles são representações de ficheiros que o javascript não consegue manipular, esses ficheiros geralmente são imagens, músicas (.mp3, .aac e etc) e também videos.
const image = fetch("./image.png")
    .then((response) => {
        return response.blob()
    }).then((blob) => {
        const imageLink = URL.createObjectURL(blob);
        console.log(imageLink)
        let imageDOM = document.querySelector("img");
        imageDOM.style.width = "250px";
        imageDOM.src = imageLink;

    })

//com o metodo .clone das responses , podemos clonar uma response, para usarmos outros metodos já que quando fazemos uma response.text() fechamos o body dela e não é mais possivel converter para um objecto javascript ou json.
fetch("./doc.txt")
    .then((response) => {
        const r2 = response.clone()
        r2.text().then((re) => {
            console.log("r2", re)
        })
        response.json().then((re) => {
            console.log("response", re)
        })
    })

//headers não são visíveis directamente mas ele é um array de informações.
fetch("./doc.txt")
    .then((response) => {
        console.log("headers:")
        response.headers.forEach(console.log)
    })

//podemos saber o status da requsicao com o metodo .status da response e com o metodo .ok podemos obter um boolean informando se a requisicao foi ok
doc.then((r) => {
    console.log(r.status)
    console.log(r.statusText)
    console.log(r.ok)
})

//podemos pegar tambem a url usada e o
//basic -> requisicao dentro do servicod
//cors -> requisicao feita para outro servidor e o servidor permite.

// Exercicios
// Utilizando a API
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const form_cep = document.forms.form_cep;
const button_get_cep = form_cep.get_cep;

const handleOnClick = async function (event) {
    event.preventDefault();
    const CEP = String(form_cep.cep.value).replaceAll('-', '').trim();
    const cepData = await getCepData(CEP);
    const cepDataDOM = document.querySelector("#cepData")
    cepDataDOM.innerHTML = "";
    Object.entries(cepData).map((data) => {
        let paragraphElement = document.createElement("p");
        paragraphElement.innerHTML = `${data[0]}: <b>${data[1]}</b>`;
        return paragraphElement;
    }).forEach((field) => {
        cepDataDOM.appendChild(field);
    })


}
button_get_cep.addEventListener("click", handleOnClick)
async function getCepData(CEP = 123456789) {
    return await fetch(`https://viacep.com.br/ws/${CEP}/json/`)
        .then((response) => {
            return response.json();
        }).then((json) => {
            return json
        });
}


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

setInterval(()=>{
    fetch("https://blockchain.info/ticker")
        .then((response)=>{
            return response.json()
        }).then((json)=>{
        return json.BRL
    }).then((brl)=>{
            document.querySelector("#preco")
                .innerHTML = Number(brl.buy).toLocaleString("pt-BR", {currency: brl.symbol, style: 'currency'})
    }).catch((error)=>{
        document.querySelector("#preco")
            .innerHTML = Error(error).message
    })
}, 5_000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

async function getPiada(event)  {

   const piada = await fetch("https://api.chucknorris.io/jokes/random")
        .then((response)=>{
            return response.json();
        }).then((json)=>{
            return json;
    })

    document.querySelector("#icon-avatar").src= piada.icon_url;
    document.querySelector("#piada").innerText = piada.value;

}

getPiada();
document.querySelector("#proxima").addEventListener("click", getPiada);
