//Toda function é criada com o construtor function por isso herda as suas propriedades.
const perimetro = new Function('lado', 'return lado * 4;');
console.log(perimetro.toString());
console.log(perimetro(5));

//Propriedades
//length - retorna o total de parametros da funcao

function soma(v1, v2){
  return v1 + v2;
}
console.log('Comprimento da funcao: ', soma.length)

//name - retorna o nome da funcao
console.log(soma.name)

//Metodos - ficam no prototype
//call - Executa a funcao
//1 argumento - é o objecto no qual éla referencia, 2 argumentos - paramnetros da funcao
//O this dentro da function aponta para o objecto windows.
//Com o call podemos substituir o objecto this por um nosso.
function cumprimenta(remetente){
  console.log(this)
  console.log('Ola', this.nome, remetente);
}
//Não substitui i objecto
cumprimenta.call();
//Substitui o objecto padrao ao qual ele referencia, por um object
cumprimenta.call({},'Joki');
//Substitui o objecto que ele referencia por um objecto com prop. nome
cumprimenta.call({nome: 'Edilson'},'Joki');

//Podemos alterar o array que um foreach usa usando call, basta alterar o objecto em que ele está amarado.
const nomes = Array.of('Kito', 'otky', 'Jurty', 'Burta');
const nomesFruta = Array.of('Tomate', 'Amendoa', 'Ananaz', 'Banana');

//Pegamos um array qualquer, chamammos o foreach, chamammos o call, passamos o novo objecto, e passamos a funcao que ele espera como parametro.
nomes.forEach.call(nomesFruta, n=>console.log(n));

//Exemplo real - Como se utiliza
function Dom(selector){
  console.log(this)
  this.element = document.querySelector(selector);
}
const ul = new Dom('ul');
console.log(ul)

//Podemos adicionar a classe activo na UL
Dom.prototype.adicionaClasse = function(classe){
  this.element.classList.add(classe)
}
ul.adicionaClasse('activo')

//Podemos reutilizar este codigo que adiciona classe usando um novo objecto que se parece com o object UL
ul.adicionaClasse.call({element: document.querySelector('li')}, 'funciona');

//Vamos usar directo do prototipo, porque fica estrano chamar ul e dpois usar li
Dom.prototype.adicionaClasse.call({element: document.querySelector('body')}, 'hehehehe');

//Podemos adicionar mais metodos as funcoes construtoras, mesmo para as nativas.
Array.prototype.mostrarThis = function () {
  console.log(this)
}
//Este metodo foi adicionado ao prototype de array
nomes.mostrarThis();

// Podemos chamar o metodo pop, filter e etc a partir do prototype e passar o array depois.
Array.prototype.forEach.call(nomes, (nome)=>console.log(nome));

//Mas vamos usar isso mesmo quando tivermos um array like
//Objecto que tem uma estrutura de array mas não são array.
const lis = document.querySelectorAll('li');
console.log(lis)

const filtrado = Array.prototype.filter.call(lis, (li)=>li.classList.contains('funciona'));
console.log(filtrado)


//apply
//Appley recebe array como argumento, se quisermos passar um obejcto devemos passar como array, assim ele pega o array e transforma em argumento cada item [a, 3, 4, 5,6] se toan (a, 3, 4, 5, 6) como argumentos separados por virgula
const valores = Array.of(1, 5, 4, 3, 6, 7,8 ,9);
console.log(Math.max.call(null, valores))
console.log(Math.max.apply(null, valores))

//bind - vai activar a function e retonar um uma nova funcao com um novo objecto no contexto.
//Aqui estamos fazendo um bind e informando que apartir de agora o $ chama a uma funcao queryselectorALl que o this referencia docuemt como object.
const $ = document.querySelectorAll.bind(document);
console.log($('body'))

const carro = {
  marca: 'BMW',
  ano: 2022,
  acelerar(aceleracao, tempo){
    return `${this.marca} acelerou ${aceleracao}km/h em ${tempo}s`
  }
}
console.log(carro);
console.log(carro.acelerar(200, 5))

const fusca = {marca: 'Fusca'}
const acelarFusca = carro.acelerar.bind(fusca, 500);
console.log(acelarFusca(2));

//Podemos usar para não escrever um metodo varias vezes.
//Olha ai, imagina que um metodo que voce uam tem um argumento que sempre é o mesmo, voce pode rescrever esse metod com esse argumento ja colocado e não inserir mais
function metodo(argumento1, argumentoquerepete, argumento2){
  console.log(argumento1, argumentoquerepete, argumento2);
}

metodo('Hi, i am', 'Daniel', 'you?');
const metodoDaniel = metodo.bind(null, '','daniel',);
metodoDaniel('You are', 'right?')

//Exercicios
// Retorne a soma total de caracteres dos 
// parágrafos acima utilizando reduce 
const paragrafos = document.querySelectorAll('section p');
console.log(paragrafos);
const somaDePara = Array.prototype.reduce.call(paragrafos, (acumulador, actual)=>{
  acumulador += actual.innerText.length;
  return acumulador;
}, 0);
console.log(somaDePara);

//Crie uma funcao que retorna novos elementos
// html, com os seguintes parâmetros 
// tag, classe e conteudo. 
function novosElementos (tag, classe, conteudo){
  let ele = document.createElement(tag);
   ele.classList.add(classe);
   ele.innerText = conteudo;
   return ele;
}

const pNovo = novosElementos('p', 'grinho', 'Edilson alexandre cuamba')
console.log(pNovo);


// Crie uma nova função utilizando a anterior como base 
// essa nova função deverá sempre criar h1 com a 
// classe titulo. Porém o parâmetro conteudo continuará 
//dinâmico 

const h1Factory = novosElementos.bind(null, 'h1', 'titulo');
console.log(h1Factory('Luiza '))
