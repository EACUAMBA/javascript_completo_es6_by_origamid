class Veiculo{
    constructor(rodas) {
        this.rodas = rodas;
    }

    acelerar(){
        console.log('acelerou');
    }
}

class Moto extends Veiculo{
    constructor(capacete, rodas) {
        //Se criarmos um construtor em uma classe que herdou de outra devemos obrigatoriamente chamar construtor da classe que extenuemos com a instrução super(parameters).
        super(rodas);
        this.capacete = capacete;
    }
    empinar(){
        console.log(`Moto empinou com ${this.rodas} rodas`);
    }
    acelerar() {
        super.acelerar();
        console.log('Empinar')
    }
}
let moto = new Moto('MindBlowing','2');
moto.empinar();

//Super - Podemos acessar um metodo da classe que extendemos.
