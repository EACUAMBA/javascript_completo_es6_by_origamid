//String é construtora de String

//Este retorna uma string directo
const stringNome = "Edilson"
//Este é um objecto de string usando o construtor String para criar.
const StringNome = new String("Edilson")
//Ambos tem os mesmos metodos.

//Contar caracteres, o length conta apartir de u1 entao temos de subtrair 1 para ele aceitar o zero.
console.log('A string tem',stringNome.length, 'caracteres');

//Como a string é um array de chars podemos acessar um char em uma posição especifica basta informar a posicção com string[10]
console.log(stringNome[5])
console.log('A string na posição', (stringNome.length-1) , 'é', stringNome[stringNome.length-1])

//O metodo charAt(posicao) é o mesmo que string[posicao]
console.log('A string na posição', (stringNome.length-1) , 'é', stringNome.charAt(stringNome.length-1))

//Podemos concatenar string com o metodo string.concat(string)
//Como o metodo retorna uma string podemos ir concatenando até obtermos a string desejada.
console.log(stringNome.concat(' é o melhor.'))

//podemos verificar se uma string é uma substring de uma string mair com string.includes(string); string.includes(string, posicao inicial);

const frase = "Eu chamome edilson alexandre cuamba minha idade é 22";
console.log(frase.includes('idade'));
console.log(frase.includes('idade', 10));

//Podemos verificar se uma string termina ou começa com outra usando endsWith e startsWith
console.log(frase.endsWith('done'));
console.log(frase.startsWith('Eu'));

//Podemos usar slice para cortar a string passand um valor de inicio e final
console.log(frase.slice(10))
console.log(frase.slice(0, 5))
console.log(frase.slice(0, -2))

//podes usar o substring, mas infelizmente ele não  funciona com valores negativos
console.log(frase.substring(10))
console.log(frase.substring(5, 10))

//podemos usar indexOf(strign) e obter a posicao de uma string no frase
console.log('poscicao de idade = ', frase.indexOf('idade'))

//Podemos adicionar uma string de forma repetida no inicio da frase ou final paradeixr essa frase com o numero de caracteres adequados.
//string.padStart(n, str)
//str.padEnd(n, str)
const valores = ['1000,00 MT', '50,00 MT', '5,00 MT',  '80.000.000,00 MT'];
valores.forEach((v)=>{
  console.log(v.padStart(25, ' '));
})

const valoresFinal = ['1000,00 MT', '50,00 MT', '5,00 MT',  '80.000.000,00 MT'];

valores.forEach((vF)=>{
  console.log(vF.padEnd(25, ' '));
})

//Podemos repetir uma string usando string.repeat(qty)
console.log('repita '.repeat(10))

//replace podemos usar para substituir um item da string po outo
let precos = '100,123.00 MT';
//Este preco esta no padão dos estados unidos
precos = precos.replace(/[.][0-9]{2}/g, (precos.match(/[.][0-9]{2}/g)[0]).replace('.', ','));
precos = precos.replace(/[,][0-9]{3}/g, precos.match(/[,][0-9]{3}/g)[0].replace(',', '.'));
console.log(precos);

//Split vamos dividir a string e vai retorna rum array
const nomes = 'Edilson, carlos, jose, maria, licio';
console.log(nomes.split(', '))

//Podemos usar o toLowerCase e toUpperCase para baixar a caisa do do texto
console.log("edilson".toUpperCase())

//Podemos remover os espacos do inicio ou fim da string, como String, 
const nome = " edilson cuamba ";
console.log(nome.trim())

//Exercicios
// Utilizando o foreach na array abaixo, 
// some os valores de Taxa e os valores de Recebimento 
 
const transacoes = [ 
  { 
    descricao: 'Taxa do Pão', 
    valor: 'R$ 39', 
  }, 
  { 
    descricao: 'Taxa do Mercado', 
    valor: 'R$ 129', 
  }, 
  { 
    descricao: 'Recebimento de Cliente', 
    valor: 'R$ 99', 
  }, 
  { 
    descricao: 'Taxa do Banco', 
    valor: 'R$ 129', 
  }, 
  { 
    descricao: 'Recebimento de Cliente', 
    valor: 'R$ 49', 
  }, 
]; 

let taxaTotais = 0.0, recebimentoTotais= 0.0;
transacoes.forEach((t)=>{
  let valor = +t.valor.replace('R$ ', '');
  if(t.descricao.startsWith('Recebimento')){
    recebimentoTotais+=valor;
  }else if(t.descricao.startsWith('Taxa')){
    taxaTotais+=valor;
  }
});

console.log('Totais das taxas: '.padEnd(30, ' '), taxaTotais);
console.log('Totais dos recebimentos: '.padEnd(30, ' '), recebimentoTotais);

// Retorne uma array com a lista abaixo 
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log(transportes.split(';')) 
 
// Substitua todos os span's por a's 
const html = `<ul> 
                <li><span>Sobre</span></li> 
                <li><span>Produtos</span></li> 
                <li><span>Contato</span></li> 
              </ul>`; 
console.log(html.replace(/[span]+/g, 'a'));
console.log(html.split('span').join('a'));
 
// Retorne o último caracter da frase 
const frase_exer = 'Melhor do ano!';
console.log(frase_exer.charAt(frase_exer.length-1)) 
console.log(frase_exer[frase_exer.length-1]) 
console.log(frase_exer.slice(-1)) 
 
// Retorne o total de taxas 
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let totaisTaxas2 = 0;
transacoes2.forEach((t)=>{
  totaisTaxas2 += t.trim().toLowerCase().startsWith('taxa') ? 1 : 0;
})
console.log('totais taxas 2: ', totaisTaxas2);

let totaisTaxas3 = 0;
transacoes2.forEach((t)=>{
  t= t.trim();
  t= t.toLowerCase();
  t= t.slice(0, 4);
  if(t === 'taxa')
  totaisTaxas3++;
})
console.log('totais taxas 3: ', totaisTaxas3);



