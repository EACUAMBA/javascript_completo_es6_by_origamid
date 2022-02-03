//Number - é uma construtora de numero e todos os números possuema metodos de number.
const number = 2022;
//Objecto number()
const number_ = new Number(2022);

//Metodos
//Verifica se é um valor NaN (Not a number)
console.log(Number.isNaN(number_)); ///false - number_ não é NaN é um
console.log(Number.isNaN(NaN));// true

//Verifica se é um valor integro, integral, integer
console.log(Number.isInteger(number))
console.log(Number.isInteger(number+0.5))

//faz o parse do número em fload decimal
console.log(Number.parseFloat('200.80'))
console.log(Number.parseFloat('200,80'))
console.log(Number.parseFloat(' 200,80'))
console.log(Number.parseFloat(' hom200,80'))
console.log(Number.parseFloat('200,80 dollars'))

//Faz o parse do número em inntegral
console.log(Number.parseInt('23.49'))
console.log(Number.parseInt('23.49'))

//Arredonda o número com base total de casas decimais, retorna uma string
const preco = 2.5555555;
console.log(preco.toFixed()); //
console.log(preco.toFixed(2));// 3.56

console.log(preco.toString());// 2
console.log(preco.toString(2));// 2.55

//Converter um numero para um estilo de um pais
console.log(preco.toLocaleString('pt-MZ', {style: 'currency', currency: 'MZN'}))

//Math - um objecto com funcoes e metodos
console.log('PI ', Math.PI);
console.log('ABS (valor absoluto) de -6 & 6', Math.abs(-6), Math.abs(6));
console.log('Ceil (Arredonda para cima tudo) 3.4 & 3.5', Math.ceil(3.4), Math.ceil(3.5));
console.log('Flooor (Arredonda para baixa tudo) 3.4 & 3.5', Math.floor(3.4), Math.floor(3.5));
console.log('Round (Arredonda para baixa tudo) 3.4 & 3.5', Math.round(3.4), Math.round(3.5));
console.log('Min (Acha o menor numero)', Math.min(1,2,3,123,1,2,1,2,343,3,688,6,56,54,4,4,45454,.44,322,654.6456,543456.,4565.4));
console.log('Min (Acha o MAIOR numero)', Math.max(1,2,3,123,1,2,1,2,343,3,688,6,56,54,4,4,45454,.44,322,654.6456,543456.,4565.4));

//Para obter numero de 0-100 multiplique por cem. para afastar a virgula para tras duas vezes
console.log('normal ', Math.random())
console.log('100: ', Math.random() * 100)
console.log('1: ', Math.random() * 10)

//Obter um valor aleatorio entre numeros
const valor = Math.random();
console.log((valor))
console.log(valor * 10)
console.log(((valor * (100-50)) + 50));

//Exercicios
console.log('Numero aleatorio entre 1050 e 2000:', Math.floor(((valor * (2000-1050+1)) + 1050)))

const numeros = '4, 5, 20, 8, 9';
let numeroArray = numeros.split(', ');
console.log("minimo: ", Math.min(...numeroArray))

const listaPrecos = ['R$ 59,99', '    R$    100,222', 'R$ 230', 'r$ 200'];
console.log(listaPrecos.map((v)=> {
    v = v.replaceAll(/[ ]*[Rr][$]*[ ]*/g, '');
    v = v.replaceAll(',', '.');
    v= +v;
    return +v.toFixed(2);
}).reduce((anterior, actual)=>{
    return anterior + actual
}).toLocaleString('pt-MZ', {style: 'currency', currency: 'MZN'}));


