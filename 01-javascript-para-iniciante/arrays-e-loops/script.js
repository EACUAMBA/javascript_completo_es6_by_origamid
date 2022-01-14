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
//
var index = 20;

while (index > 0){
console.log(index);
index =index-5;
}

