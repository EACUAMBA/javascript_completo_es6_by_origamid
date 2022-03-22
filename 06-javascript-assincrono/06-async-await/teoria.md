# Async e Await
#Async 
indicamos que em uma funco teremos partes asincronas e indicamos que queremos em alguns momentos que o codigo pare a espera que essas funcoes asyncronas sejam concluidas. 
```
    async funtion puxar_dados(){
        const dadosResponse = await fetch('./dados.json')
        const dadosJSON = await dadosResponse.json();

        document.body.innerText = dadosJSON.titulo;
        }
        
    puxar_dados();
```

## Diferença ente then e async
O async facilita mais para codicos mais.
A vantagem está mais no codigo.

## Pegar erros try/catch
podemos usar try ctch no then como no async.

```
try{

}catch(erro){
console.log(erro)
}

```

Podemos usar o await e async para pegar dados em simultaneous

Await não não fala espera isso daqui acontecer, ele espera uma promisse ser executado, ser finalizada, deixar de ser promessa.