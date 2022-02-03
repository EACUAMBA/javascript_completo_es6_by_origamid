//Array
//Armazena uma coleção de elementos, podendo estes ser de tipos diferentes.

const instrumentos = ['guitara', 'violao', 'piano'];
console.log(instrumentos)
console.log(instrumentos[2])

const precos = [200, 250.45, 1050, 689.78];
console.log(precos);

const dados= [new String('Edilson'), {nome: 'Edilson', idade: 20}, 300, ['Luis', 'Andre', 'Gonsalves']];
console.log(dados)

console.log(dados[3][1]);

//Como construir
//com []
// com new Array('dados', 'dados')

const carros = new Array('Isuzo', 'Ford', 'Fiat');
console.log(carros);

carros[20] = 'Toyota';
console.log(carros);
console.log(carros.length)

//Array.from() transforma uma array like em array puro
const lis = document.querySelectorAll('li');
 console.log(lis); 
 //Transformando NodeList em array
console.log(Array.from(lis));

//como funciona um array like
const arrayLike = {
  0: 'edilson',
  1: 'alcidio',
  2: 'lokito',
  length: 4
};

const objArray = Array.from(arrayLike);
console.log(objArray)

//Verifica se uma variavel eh array
console.log(Array.isArray(arrayLike))
console.log(Array.isArray(objArray))

//formas de criar array
console.log(Array.of(5))
console.log(Array.of(1, 2, 3, 4, 5))
console.log(new Array(5))
console.log(Array(5))
console.log(Array(1, 2,3 ,4 , 5))

//
const listaB = ['Edilson', 'Luis',[ 'Carlos', 'Madrid', 'Oliver']]
//length da string
console.log(listaB[0].length)

//Metodos modificadores, metodos que modificam a array
//[].sort()
console.log(instrumentos)
//ordena pelo nome, mas funciona mal em n'umeros
console.log(instrumentos.sort());

//com numeros
const numerosAlunos = [10, 100, 99,30, 22, 55, 11, 22, 33, 34, 25, 12, 455, 344, 56, 09, 56];
console.log(numerosAlunos)
console.log(numerosAlunos.sort())

const carrosB = new Array('Isuzo', 'Ford', 'Fiat')
//[].unshift() - adiciona no inicio
console.log(carrosB)
carrosB.unshift('Lambo')
console.log(carrosB)
//[].push() --Adiciona no fim
console.log(carrosB)
carrosB.push('Mazda')
console.log(carrosB)

//[].shift; - retona o primeiro item do array
console.log(carrosB.shift())
console.log(carrosB)

//[].pop - retona o ultimo
console.log(carrosB.pop())
console.log(carrosB)

//[].reverse() inverte a ordem dos dados 
console.log(carrosB.reverse())

//[].splice() - adiciona valores no array a partir do index, e remove se passado o nuemro de itens a remover (apartir do lugar onde deve adicionar) e depois os novos items
console.log(carrosB);
carrosB.splice(1, 0, 'Galardo', 'Honda', 'hyndai');
console.log(carrosB)
carrosB.splice(1, 2, 'fusca');
console.log(carrosB)

console.log()
//[].copyWithin() - copia itens do array e adiona no proprio array nas posicoes desejadas, substitui os outros
carrosB.copyWithin(2, 1, 3);
console.log(carrosB)

console.log(carros.fill('Nissan', 2))

//Metodos de acesso - não modifica o array
console.log(carrosB)
console.log(carrosB.concat(carros, 'Liku'))

//include - verifica se existe algo no array
const liguagens = ['js', 'java', 'php', 'c#', 'css', 'sql', 'java']
console.log(liguagens.includes('js'))
console.log(liguagens.includes('java'))
console.log(liguagens.indexOf('php'))
console.log(liguagens.lastIndexOf('java'))

//join - junto em uma string
//juntando usando - como separador dos valores
console.log(liguagens.join('-')) 

let htmlString ='<h1>Ola mundo</h1>';
console.log(htmlString);
htmlString = htmlString.split('h1');
console.log(htmlString)
htmlString = htmlString.join('p')
console.log(htmlString)

//slice() - corta apartir de uma valor uma determinada quantidade
//podemos usar para clonar um array.
console.log(liguagens)
console.log(liguagens.slice(2))
console.log(liguagens.slice(2, 4))

//Exercicios

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão']; 
// Remova o primeiro valor de comidas e coloque em uma variável 
// Remova o último valor de comidas e coloque em uma variável 
// Adicione 'Arroz' ao final da array 
// Adicione 'Peixe' e 'Batata' ao início da array
console.log(comidas)
const firstE = comidas.shift();
console.log(comidas)
const v1 = comidas.pop() ;
console.log(comidas)
comidas.unshift('Arroz');
console.log(comidas)
comidas.push('Peixe', 'Batata')
console.log(comidas)
 
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 
'Julia']; 
// Arrume os estudantes em ordem alfabética 
// Inverta a ordem dos estudantes 
// Verifique se Joana faz parte dos estudantes 
// Verifique se Juliana faz parte dos estudantes 
console.log();
console.log(estudantes);
estudantes.sort()
console.log(estudantes);
estudantes.reverse()
console.log(estudantes);
console.log('Joana existe?', estudantes.includes('Joana'))
console.log('Juliana existe?', estudantes.includes('Juliana'))

 
let html = `<section> 
              <div>Sobre</div> 
              <div>Produtos</div> 
              <div>Contato</div> 
            </section>` 
// Substitua section por ul e div com li, 
// utilizando split e join
console.log(html)
html = html.split('section');
console.log(html)
html = html.join('ul');
console.log(html)
html = html.split('div')
console.log(html)
html = html.join('li')
console.log(html)
document.querySelector('body').innerHTML += html;


const carrosV= ['Ford','Fiat','VW','Mazda'];
// Remova o último carro, mas antes de remover 
// salve a array original em outra variável
const carrosAlt = carrosV.slice(0);
console.log(carrosV)
console.log(carrosAlt)
console.log(carrosAlt.pop())
console.log(carrosV)
console.log(carrosAlt)
