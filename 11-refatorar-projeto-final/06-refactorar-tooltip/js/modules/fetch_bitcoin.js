export default function initFetchBitcoin(){

}
const URL = 'https://blockchain.info/ticker';
fetch(URL)
.then(response=>{return response.json();})
.then(json=>{
    const btcPreco = document.querySelector('.btc-preco')
    btcPreco.innerHTML = Number(1000 / json.BRL.sell).toFixed(4)
    console.log(json.BRL.sell)})
    .catch(erro=>{
        console.log(Error(erro).message)
    })
