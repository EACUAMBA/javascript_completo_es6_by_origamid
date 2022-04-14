//Podemos usar o get  para definir um valor que será constante.
const button = {
    get tamanho(){
        return this._tamanho;
    },
    set tamanho(value){
        this._tamanho = value;
    }
}
console.log(button.tamanho)

const frutas = {
    lista: [],
    set nova(fruta){
        this.lista.push(fruta);
    }
}
frutas.nova = 'Melancia';
frutas.nova = 'Banana';
frutas.nova = 'Ananaz';

class Button {
    constructor(text, color) {
        this.color = color;
        this.text = text;
    }

    get element(){
        this._elementType = this._elementType || 'button';
        const button = document.createElement(this._elementType);
        button.innerText = this.text;
        button.style.color = this.color;
        return button;
    }

    set element(type){
        this._elementType = type;
    }
}
let btn = new Button("Comprar", "red");
console.log(btn);
