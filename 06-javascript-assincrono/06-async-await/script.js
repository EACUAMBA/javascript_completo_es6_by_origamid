async function puxardados(){
    //Retorna a promessa sem o await com a await retorna uma response.
    const promisseDados =  fetch("./dados.json");
    const promisseClientes =  fetch("./clientes.json");

    const responseDados = await promisseDados;
    const responseClientes = await promisseClientes;


    //Retona o dado concreto
    const dadosJSON = await responseDados.json()
    const clientesJSON = await responseClientes.json()


    console.log(dadosJSON);
    console.log(clientesJSON);
}

puxardados()