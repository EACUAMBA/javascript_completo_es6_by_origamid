// Grupo de valores relacionados.

var videoGames = ['Playstation', 'Nitendo', 'Xbox One'];
console.log(videoGames[0]);

//Metodos de arrays
//array.pop() remove do array o último item e retorna o item para nós.
var game = videoGames.pop();
console.log(game, '\n', videoGames);

//array.push(itemNovo); adiciona um item no final do array.
videoGames.push('Xbox Series X');
console.log(videoGames);

//array.length propriedade que retorna o numero de items no array.
console.log(videoGames.length)

//Loop uma forma de fazer ou executar uma instrução várias vezes.

//for (inicialização ds variável contadora; condição de paragem; passos ou saltos)
//Sempre coloque os passos que deve saltar para evitar loop infinito.
for (var count = 0; count < 10; count =count + 1){
  console.log(count);
}

//while
//inicialização da variável contadora, condição de paragem, incremento ou salto.
var index = 20;

while (index > 0){
console.log(index);
index =index-5;
}

// A vantagem do loop é interagir com um array de dados.
//iterando sobre o array de video games.
for(var index = 0; index < videoGames.length ; index ++){
  console.log(videoGames[index]);
}

// instrução 💔 break
//Serve para parar a execução do loop.
for(var index = 0; index < videoGames.length ; index ++){
  console.log(videoGames[index]);
  if(index == 1)
  break;
}

//forEach 
// é um método que executa instrução para cada item do array
videoGames.forEach((item, index, array) => {
  console.log(`Item ${index}: ` + item + ' do array', array);
});


//Exercícios
var anosQueFoiCampeaoDaCopa = ['1959', '1962', '1970', '2002'];
anosQueFoiCampeaoDaCopa.forEach(function(item){
  console. log(item);
});

var i = 0;
for(;i< anosQueFoiCampeaoDaCopa.length;){
  console.log(
  `O Moçambique foi campeão na copa de ${anosQueFoiCampeaoDaCopa[i]}.`);
  i++;
}

var frutas = ['Banana', 'Maça', 'Pera', 'Uva', 'Melancia'];
var conta = 0;
while (conta < frutas.length){
    console.log(frutas [conta]);
    if (frutas[conta] === 'Pera')break;
    conta++;
}

console.log(frutas);
var ultimoValorDoArrayFrutas = frutas.pop();
console.log(ultimoValorDoArrayFrutas);
console.log(frutas);