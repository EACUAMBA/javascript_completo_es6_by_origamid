//Array e iteracao
//.forEach()  - metodo de array, alguns array like tem este metodo.
//recebe uma funcao de callback, que será executada para cada item do array. Podemos passar alguns parametros para o array, 1 - o elemento, 2 - indice, 3 - o array (se modificar está array vai modificar a array principal).
const carros = ['Mazda', 'VW', 'BMW'];

carros.forEach((item, indice, array)=>{
  console.log(item.toUpperCase())
  console.log(indice)
  console.log(array)
})

//arrow function - uma forma de escrever funcao de forma abreviada sem a necessidade de escrever function (parametros)=>{corpo da funcao}
const lis = document.querySelectorAll('li');

lis.forEach(item=>item.classList.add('activo'))

//map - faz o mesmo que o forEach(), mas a diferença é que o forEach retorna undefined, mas o map retona o um array novo.
//Os valores do próximo array são de acordo com cada return de cada iteração.
//A array que retorna é um clone do array anterior, podemos modificar avontade.
console.log('Usando Map!')
const carrosNovo = carros.map((item, index, array)=>{
  console.log(item.toUpperCase())
  console.log(index)
  console.log(array)
  return item.toUpperCase();
})

console.log(carros)
console.log(carrosNovo)

//Com o map podemos continuar a iteragir com um .map().map()

const aulas = [
  {
    nome: 'Portugues',
    duracao: 45
  },
  {
    nome: 'Matematica',
    duracao: 60
  },
  {
    nome: 'Filosofia',
    duracao: 30
  },
  {
    nome: 'Biologia',
    duracao: 20
  }
]

const duracoesDasAulas = aulas.map((aula)=>aula.duracao);
console.log(duracoesDasAulas)

function nomeAula(aula){
  return aula.nome;
}
const nomesDasAulas = aulas.map(nomeAula);
console.log(nomesDasAulas);

const nomesAula = aula => aula.nome;

//Reduce - recebe uma funcao de callback que pode ter dois parametros, 1 o valor que retornei antes e 2 - o valor actual, 3- indice actual, 4- array em questao,
 const somatorioDaDuracaoDasAulas = aulas.reduce((acumulador, item, index, array)=>{
   console.log(acumulador)
   console.log(item)
   console.log(index)
   console.log(array)
 },
 //valor inicial do reduce, default é 0 
 200
 );
 // Quando não definimo o valor inicial do acumulador o reduce salta a 1 iteracao e leva o valor inicial como acumulador para iterar com a segunda iteracao. 

 //Podemos usar o reduce para outras coisas como verificar o valor maior de uma array de valores.
 //off-format
 const valores = [1, 3, 2,4 ,5 ,3, 4,5 ,7 ,5,6 ,7,8 ,9,8 ,34 ,34, 6, 745, 4,34 ,5,56,45 ,7656,7 ,45,6 ,47,56 ,7,45 ,67,56, 7,8 ,76,8 ,657,45 ,674, 6345,5 ,43,54 ,76, 786,8 ,75,34 ,5,6 , ,876 ,745, 6,6 ,7,8 ,745, 6,5 ,4,5, 6,3, 56,45, 7, 4,54 ,7,6 ,534, 65, ,35, 6,5, 8,67, 6,463, 4, 5,4, 76,8 ,8, 4634,6, 45, 5,346 ,45,7, 56,7 ,6,8, 5,4 ,532, 41,2, 4,23, 57,3, 42777, 54,67 ,97,8 ,,9, 787,543, 25, 4,23 ,56, 7,5 ,67, 57, 567, 56,7, 65];

 const maiorValor = valores.reduce((anterior, actual)=> anterior > actual ? anterior : actual);
 console.log(maiorValor);

 const menorValor = valores.reduce((anterior, actual)=>anterior < actual ? anterior : actual);
 console.log(menorValor)

 //

 const aulasNomesReduce = aulas.reduce((acumulador, aula, index)=>{
   acumulador[index] = aula.nome
    return acumulador;
  })
console.log(aulasNomesReduce)

//Podemos usar o reduceRight para iniciar do ultimo ao primeiro. Nada muda,

//some() - se pelomentos algum for verdareio então vai retornar true. Se caso na minha lista tenha um aluna com negativa retorna true caso não false.
const alunos = [
  {
    nome: 'Flavio',
    media: 17
  },
  {
    nome: 'Rito',
    media: 12
  },
  {
    nome: 'Hito',
    media: 8
  },{
    nome: 'Koty',
    media: 20
  },
  {
    nome: 'Qerty',
    media: 9
  },
  {
    nome: 'Boni',
    media: 9.5
  },

]

//Some procura por um true, se encontrar retorna true
//So retorna false se tudo for false
//Retorna true se pelo menos uma for true
const temMediaMenorQue10 = alunos.some((item)=>item.media < 10);
console.log(temMediaMenorQue10);

//every() - retirna true se e se somente se apenas uma retornar false

//Every procura por um false, se encontrar para a verificacao.
//So retona true se tudo retornar true
//Retorna false se pelomenos uma for false
const temUmVinte = alunos.every((aluno)=>aluno.media === 20);
console.log(temUmVinte)

//Find - Procura um thuthy e retorna o primeiro truthy que achar.

const alunoCom20 = alunos.find((aluno)=>aluno.media === 20);
console.log(alunoCom20);
//Find index - 
const indexAlunoCom20 = alunos.findIndex((aluno)=>aluno.media === 20);
console.log(indexAlunoCom20);
console.log(alunos[indexAlunoCom20]);

//filter - retorna uma array com todos que são truthy

const alunosTransita = alunos.filter((aluno)=> aluno.media >= 9.5);
console.log(alunosTransita)

const alunosNaoTransita = alunos.filter((aluno)=> aluno.media < 9.5);
console.log(alunosNaoTransita)

// exercicios


// Selecione cada curso e retorne uma array 
// com objetos contendo o título, descricao, 
// aulas e horas de cada curso 
function Curso(titulo, descricao, aulas, horas){
  this.titulo = titulo;
  this.descricao = descricao;
  this.aulas = aulas;
  this.horas = horas;
}
const cursos = Array.from(document.querySelectorAll('section.curso'))
.map((curso)=>{
  //console.log(curso);
  return new Curso(
    curso.querySelector('h1').innerText,
     curso.querySelector('p').innerText, 
     +curso.querySelector('.aulas').innerText, 
     curso.querySelector('.horas') == null ? null : +curso.querySelector('.horas').innerText);
  
});
console.log(cursos);
 
 
// Retorne uma lista com os 
// números maiores que 100 
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numeros.filter((n)=> n>100);
console.log(maioresQue100);
 
 
// Verifique se Baixo faz parte 
// da lista de instrumentos e retorne true 
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 
'Teclado'] 
const baixoFazPArte = instrumentos.some((it)=>it === 'Baixo');
console.log('Baixo faz parte: ', baixoFazPArte);
 
 
// Retorne o valor total das compras 
const compras = [ 
  { 
    item: 'Banana', 
    preco: 'R$ 4,99' 
  },
    { 
      item: 'Ovo', 
      preco: 'R$ 2,99' 
    }, 
    { 
      item: 'Carne', 
      preco: 'R$ 25,49' 
    }, 
    { 
      item: 'Refrigerante', 
      preco: 'R$ 5,35' 
    }, 
    { 
      item: 'Quejo', 
      preco: 'R$ 10,60' 
    } 
  ] 

  const valorTotalDasCompras = compras.reduce((acomulador, actual)=>{
    let preco = +actual.preco
    .replace(/[R$]/g, '')
    .replace(',', '.');
    acomulador += preco;
    return acomulador;
  }, 0)
  console.log('Valor total: ', valorTotalDasCompras);

