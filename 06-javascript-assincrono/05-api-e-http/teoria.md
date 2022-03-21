# API e HTTP
## API
### A - Application
Um servidor, aplicativo, objecto Javascript ou qualquer outra coisa que posso interagir por meio de comandos.

### P - Programming
Programação, isso significa que o comando irá encadear uma cadeia de eventos pre-definidos. O resultados esperado é geralmenteo mesmo.

### I - Interface
São comandos criados para permitir a interação com a aplicação.
Ex: "Edilson".toUpperCase() é uma interface da classe String. A interação com uma interface retorna uma resposta.

API não não é o retorno, a API é a capacidade que você tem de se comunicar com outro sistema

## Exemplo de APIs
https://api.github.com/users/origamid
https://api.github.com/users/origamid/followers

Array e Element
eles tem metodos o processamento dos metodos é o que chamamos de programming.

## HTTP
Protocolo (Hypertext Transfer Protocol) usado para transferência (envio e recepção) de arquivos na WEB.

`
    fetch("https://pokeapi.coapi/v2/pokemon/?limit=20&offset=20")
        then.((response)=>{
            return response.json();
        ).then((json)=>{
            console.log(json);
        )
`

Uma requisição HTTP sempre tem uma url que é o servidor e o method que é get quando não informado.
Tem outros como POST, UPDATE, DELETE, PUT


### method
#### GET
Busca dados, padrão do fetch.
#### POST
Envia dados, inseri dados
#### PUT 
Modificar dados, actualizar dados no servidor.
#### DELETE
Apagar dados no servidor
#### HEAD
Busca os headers da requisição.

#### HEADERS
Uma forma do servidor informar o browser, ou o browser para o servidor.
Tem um Cache-Control, onde definimos um tempo para o tempo de cache no cliente.
Tem o Content-Type que informa o tipo de conteud que esta a vir.

### CORS
Cross Origin Resource Sharing - gerencia como deve ser o compartilhamento de recursos entre diferentes origens.
É um acordo do browser e o servidor, não é muito seguro.

