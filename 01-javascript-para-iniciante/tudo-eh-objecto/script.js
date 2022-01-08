/**
* Em JavaScript praticamente tudo é objecto.
* Tudo que possui propriedades e métodos e que podemos acessar usando o ponto, é na verdade um objecto.
* string, number, boolean, object e mais são objectos. 
* APIs servem para estabelecer uma forma de comunicação entre dois sistemas.
*/

//Objecto string
var nome = 'Edilson';
console.log(nome.length);
console.log(nome.charAt(1));
console.log(nome.replace('lson', ''));
console.log(nome.toLowerCase());

//Objecto - Number
var altura = 1.8;
console.log(altura.toString()); //Converte em texto
console.log(altura.toFixed()); //Arredonda para cima


//Objecto - Function
function areaQuadrado(lado){
	return lado * lado;
}
console.log(areaQuadrado.toString());
console.log(areaQuadrado.length);

//Elementos do DOM
var btn = window.document.querySelector(".btn");

btn.classList.add('azul');
console.log(btn.innerText);
btn.addEventListener('click' , function(){
	btn.classList.add('red')
})

//Exercicios
var texto = 'Ola';
texto.length;
texto.charAt(3);
texto.replace('old', 'new');

var elementoDOM = document.querySelector('.btn-add');
elementoDOM.style.display = 'none';
elementoDOM.innerText = 'novotexto';
elementoDOM.addEventListener('evento', function(){
console.log('callback');});
elementoDOM.name;
elementoDOM.type;
elementoDOM.id;

//clipboard
navigator.permissions.query({name: "clipboard-write"}).then(result => {
	if(result.state == "granted" || result.state == "prompt"){
		navigator.clipboard.writeText("Eu estou ecrevendo no clipboard-");
	}
	
});

navigator.clipboard.readText().then(text=>{
	btn.innerText = text + ' texte';
});

btn.style.display='flex';