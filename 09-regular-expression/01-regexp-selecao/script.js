//Regular expression
//Sao expressoes utilizadas para realizar buscas ou subtituicoes usando padroes em strings.
//No java script podemos armazenar em uma variavel uma expressao regular, mas antes develos envolver ela dentro de duas barras slash right.
const padraoRegexp = /a/;

//Usamos  .replace em uma string para substituir e .split() para separar usando o padrao.
const frase = 'javascrit';
const fraseNova = frase.replace(/a/, 'b');
console.log(fraseNova);

//Podemos usar o regexp na busca no nosso editor de imagens.
//O regexp seleciona um caracter apos o outro e nao uma palavra.

//Flags
// /caracteres/ - seleciona o primeira ocorenca
// /caractere/g - seleciona todas as ocorencias globalment
// /caracteres/gi - seleciona todos os caractere e eh case insentive, ignore a caixa do caractere.
// /[ab]/gi - seleciona a ou b e nao ab
// /./ - vai selecionar todos os caracteres.
// /\./ vai escapar o ponto e selecionar os pontos ja.
// /\[/ - seleciona o colchete aberto

//Podemos colocar um colchete entre um conjunto de caractere para selecionar variacao de uma palavra:
// /Mo[cz]ambique/

//O - dentro de colchetes servem para indicar um intervalo.
// /[a-zA-Z]/ seleciona o intervalo de cractere de a ate z e de A ate Z na tabela unicode
// Podmeos usar o acento circunflexo para negar caracteres /[^a]/ nao vai selecionar o caractere a

//Caracteres especiais
// +*?^$\.[]{}()|/

// \w -sleciona caracteres alfanumericos o mesmo que /[a-zA-Z0-9_]/
// \W nega o qe vimos acima
// \d -seleciona digito
// \d nega digito
// \s seleciona espaco, quebra de linha e tab
// podemos selecionar tudi com /[\S\s]/

//Quantificador
// /iii/ - seleciona tres is seguidos.
// /i{4}/ - seleciona 4 i seguidos
// /i{2, 3}/ - selecion de dois a tres is
// /i{2,}/ -> seleciona dois ou mais is.
// /\w{1,}/g seleciona todos os caracteres dentro d conjunto alfanumeros um ou mais
// /i+/g seleciona um ou mais is juntos.
// /i*/ seleciona 0 ou mais ocorencias de um padrao
// /i?/ seleciona qundo tiver e mesmo quando nao tiver o i
// /a|b/ seleiona a ou b
// -> usamos para fazer uma selecao que deve ter u nao caracters.

// /^\w+/g -> seleiona a aplimeira combinacao que inicia com valores alfanumeros
// /\w+$/g -> selecion a frase que termina com valores alfanumericos
// /\m/ -> seleciona muitas linhas
// \n -> carcter de nova linha
// /\uvalorunicode/ -> seleciona valores unicode





