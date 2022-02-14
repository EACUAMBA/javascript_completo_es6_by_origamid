//Object 
//Todo object é criado com o seu construtor Object e por isso herda as propriedades e metodos do seu prototype.

const carro = {
  marca : 'ford',
  ano : 2022,
  init : function(valor){
    this.marca = valor;
    return this;
  },
  acelerar : function(){
    return this.marca + ' acelerou....'
  },
  buzinou : function (){
    return this.marca + ' buzinou...';
  } 
};
console.log(carro);

//ou

const pessoa = new Object({
  nome : 'Edilson',
  idade: 23
});
console.log(pessoa);

//Podemos criar com object.create
const honda = Object.create(carro).init('Honda');
//Os metodos vai usar o  atributo mais proximo da declaracao, podemos ver que a marca agora é a mais proxima.
console.log(honda.acelerar());

//Object.assign(objectoAlvo, ObjectosComAsPropriedadesACompiar, outroObject)
//Copia propriedades de objectos e coloca em um objecto alvo.

const camiao = {
  peso: 0,
  altura: 0,
};

Object.assign(camiao, carro);
camiao.marca = 'Volvo';
console.log(camiao);

//Object.defineProperties()
//Adiciona propriedades ao objectso alvo. Tornando as propriedades do object imutaveis

Object.defineProperties(camiao, {
  rodas: {
    value: 16,
    configurable: false,
    enumerable: false,
    writable: false,
  }
})

console.log(camiao);
camiao.rodas = 20;
console.log(camiao);

//get e set
Object.defineProperties(camiao, {
  marca:{
    get(){
      return 'Get Marca ' + this._marca;
    },
    set(value){
        this._marca = value;
    }
  }
})

//Object.getownPropertyDescriptors(obj)
//Lista todos so metodos e propriedades e as suas devidads configurações
const desc= Object.getOwnPropertyDescriptors(camiao);
console.log(desc);

const description= Object.getOwnPropertyDescriptor(camiao, 'rodas');
console.log(description);

//Object.keys(obj)
//Objects.values(obj)
//Onjects.enties(obj)


//retonar as chamves dos objectos, as chaves sao os nomes de declaracao, rodas não aparece
console.log('Keys: ', Object.keys(camiao))

//values() - retonras somente os valores dessas chamves
console.log('Values: ', Object.values(camiao))

//entries  --retorna a chamve com o valor
console.log('Entries: ', Object.entries(camiao));

//getOwnPropertyName() pegas os nomes mesmo os enumerate false
console.log('GetOwnPropertyNames: ', Object.getOwnPropertyNames(camiao))

//getPrototypeOf
console.log('PrototypeOf', Object.getPrototypeOf(camiao))

//Object.is(obj, obj2)
//COmpara dois objects e diz se são iguaus

//freeze() - congela faz nao permititr mudanca de valores das propriedades, seal() desactiva o freeze e permite mudancas mas nao adicao de novas propriedades, nao permite que deletes propriedade, preventExtensions permite adicionar novas 

//Propriedades e metodos de prototipos
//.constructor - retorna a funcao constructora do objecto em questao.
console.log('Constructor ', camiao.constructor)

//hasOwnProperty('') -- verifica se tem a propriedade
console.log('has rodas', camiao.hasOwnProperty('rodas'))
//propertyIsEnumerable() -- retorna um boolean indicando se é enumeravel.

//.prototype.isPrototypeOF()
console.log('Is prototype: ', Array.prototype.isPrototypeOf(Array.of()));

//PAra verificar que tipo de dados é uma variavel podemos usar o toString do prototype, usando prototype.toString e mudando o this a quem ele referencia com call.

//Exercicios
// Crie uma função que verifique 
// corretamente o tipo de dado 

function verificaTipoDeDados(dado){
  let tipoDados = Object.prototype.toString.call(dado);
  return tipoDados.toString().replace(/([\[]*[\]]*)/g, '').replace('object ', ''); 
}
console.log('Tipo de dados de edilson: ', verificaTipoDeDados('Edilson'))
 
// Crie um objeto quadrado com 
// a propriedade lados e torne 
// ela imutável ~
const quadrado = {
  lados: 4
};
Object.defineProperties(quadrado, {
  lados: {
    writable: false,
    configurable: false
  }
})
quadrado.lados = 20;
console.log(quadrado.lados)

// Previna qualquer mudança 
// no objeto abaixo 
const configuracao = { 
  width: 800, 
  height: 600, 
  background: '#333' 
} 

Object.freeze(configuracao);
configuracao.width = 200;
console.log(configuracao)
 
// Liste o nome de todas 
// as propriedades do 
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))