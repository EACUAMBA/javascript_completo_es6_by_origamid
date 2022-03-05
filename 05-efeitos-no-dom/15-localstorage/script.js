const controles = document.getElementById("controles")
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controles.addEventListener('change', handleChange);

function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value)
    handleStyle[name](value);
    showCSS()
    saveCSS(name, value);
}

const handleStyle =  {
    element: btn,
    sizeUnit: 'px',
    texto(value){
        this.element.innerText = value;
    },
    color(value){
        this.element.style.color = value;
    },
    backgroundColor(value){
        this.element.style.backgroundColor = value;
    },
    height(value){
        this.element.style.height = value + this.sizeUnit;
    },
    width(value){
        this.element.style.width = value + this.sizeUnit;
    },
    border(value){
        this.element.style.border = value;
    },
    borderRadius(value){
        this.element.style.borderRadius = value + this.sizeUnit;
    },
    fontFamily(value){
        this.element.style.fontFamily = value + ', sans serif';
    },
    fontSize(value){
        this.element.style.fontSize = value + this.sizeUnit;
    }
}

function showCSS(){
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join('</span><span>');
}

function saveCSS(name, value) {
    localStorage.setItem(name, value);
}

function reloadCSS() {
    let keys = Object.keys(localStorage);
    keys.forEach((key)=>{
        handleStyle[key](localStorage.getItem(key));
        controles.elements[key].value = localStorage.getItem(key);
    })
    showCSS()
}
reloadCSS();