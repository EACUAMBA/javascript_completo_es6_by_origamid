// Factory Function
// Uma função que retorna uma objecto novo.
// Dentro dela podemos declarar variáveis que serão inacessíveis por fora do método.
// Podemos usar o Object.free(object)para impedir os clientes da nossa função de alterar o estado do nosso objecto.

function createButton(text) {
    const secreteKey = "12werqwe321qwe4321qwer4321";

    function element() {
        const buttonElement = document.createElement("button");
        buttonElement.innerText = text;
        return buttonElement;
    }

    const objecto = {
        text,
        element
    }

    return objecto;
}

const btnComprar = createButton("Comprar");
const btnVender = createButton("Vender");

// Podemos usar funções sem  o uso do new explicito para criar objectos
function Pessoa(nome, idade) {
    if(this instanceof Window)
        return new Pessoa(nome, idade)

    this.nome = nome;
    this.idade = idade;
}

const pessoa = Pessoa("Luis", 20);
console.log(pessoa);

// Exercicios
function $$(selectedElement){
    const elements = document.querySelectorAll(selectedElement);
    function hide(){
        setTimeout(()=>elements.forEach((i)=>i.style.display = "none"), 3000);
        return this;
    }
    function show(){
        setTimeout(()=>elements.forEach((i)=>i.style.display = "block"), 3000);
        return this;
    }
    function on(onEvent, callback){
        elements.forEach((item)=>{item.addEventListener(onEvent, callback)})
        return this;
    }

    function addClass(clazz){
        elements.forEach((item)=>{item.classList.add(clazz)})
        return this;
    }

    function removeClass(clazz){
        elements.forEach((item)=>{item.classList.remove(clazz)})
        return this;
    }
    return {
        elements,
        hide,
        show,
        on,
        addClass,
        removeClass
    }
}
const btns = $$("button").on("click", ()=>console.log("Ola"));
console.log($$("button").hide().show().hide().show());
