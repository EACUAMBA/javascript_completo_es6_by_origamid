function Button(text, color){
    this.text = text;
    this.color = color;
}
Button.prototype.newElement = function(){
    const htmlButtonElement = document.createElement('button');
    htmlButtonElement.innerHTML = this.text;
    htmlButtonElement.style.color = this.color;
    return htmlButtonElement;
}
const redButton = new Button("Comprar", "blue");
document.body.append(redButton.newElement());
console.log(redButton.newElement());

//A classe é uma especialização da função construtora.
class Input{
    //Retorna o this;
    //Podemos passar no parametro outros objectos.
    constructor(value, estilos) {
        this.value = value;
        this.estilos = estilos;
    }
    newElement(){
       let htmlInputElement = document.createElement('input');
        htmlInputElement.value = this.value;
        htmlInputElement.style.backgroundColor = this.estilos.backgroundColor;
        htmlInputElement.style.color = this.estilos.color;
        htmlInputElement.style.margin = this.estilos.margin;
        htmlInputElement.style.borderRadius = this.estilos.borderRadius;
        return htmlInputElement;
    }

    //Podemos acessar as propriedades da classe usando this em qualquer lugar;
    appendTO(element){
        let selector = document.querySelector(element);
        selector.appendChild(this.newElement());
    }

    //Podemos criar metodos eestaticos que vao ser acessiveis somento pelo nome da classe
    static createInput(){
        const input = document.createElement('input');
        input.value = "3000"
        input.style.margin = "16px";
        return input;
    }

    static createRounded(size){
        const input = new Input("Comprar", {backgroundColor: "red", color: 'white', margin: "16px", height: size + "px", borderRadius: "16px"});
        return input.newElement();
    }
}
const greenButton = new Input("5.000,00 MT", {backgroundColor: "red", color: 'white'});
greenButton.appendTO('body')
document.body.appendChild(Input.createInput())
document.body.appendChild(Input.createRounded("32"))
console.log(greenButton.newElement());


