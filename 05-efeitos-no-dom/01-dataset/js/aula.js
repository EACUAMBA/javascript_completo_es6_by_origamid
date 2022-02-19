//Dataset
//É uma propriedade do htmlelement que tem chave e valor, feitos usando o atributo data, data-chave='valor',
//Ex: elemento.dataset retorna um object mapa com chave e valor, dos data sets, <div data-nome='Edilson'>
//div.dataset.nome vai retonar Edilson.
//Podemos selecionar somente o Elemento com um dataset especifico c ou com 
//docuemtno.querySelector('div') seleciona a primeira div
//docuemtno.querySelector('[data-nome]') seleciona o elemento com data-nome
//docuemtno.querySelector([data-nome="Edilson"]') seleciona o elemento com data-nome com o valor edilson

//podemos apagar uma propriedade usando o delete propriedade
//delete h1.dataset.nome

//Data vs Classe
//Dataset é  mais simples e melhor
const h1 = document.querySelector('[data-nome="Edilson"]');
console.log(h1.dataset);

//Nomeclatura
//Quando separamos por travessão uma dataset acessamos com camel case
//data-nome-completo='Edilson Cuamba'
//isso será igual a dataset.nomeCompleto