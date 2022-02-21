//Modules
//organização do código em modulos do código
//compartilhars código
//é do ecmascript 6

//Podemos exportar varias coisas de uma arquivo e para importar devemos separa dentro de chaves com virgula o que estamos pegando do arquivo.

//export  function olaMundo(){}
//export  function olaMundo2(){}
//export  function olaMundo3(){}

//import {olaMundo, olaMundo3}

//Podemos importar com um * para dizer que queremos tudo assim teremos um objecto module com todas as funcoes.
// import * as nomePreferencial from '.js'

//agora podemos chamar com nomePreferencial.metodoexportado

//podemos exportaar tudo, valores, classe, strings.

//Quando usamos modulo, ele usa o modo strict mode, as variaveis ficam no modue apenas.
// As funcoes estao no window, entao devemos ter cuidado ao criar funcoes com nomes ja existentes.

//ele faz referencia a undefined e nao  ao window.

//use strict
//Nao posso criar variavei global.
//Nao vaza para o windows
//Nao posso delectar coisas do javascript, coisas indetectatveis
//Nao deixa mudar variaveis congeladas como altura do window
//impede o uso de palavras rreservadas.
