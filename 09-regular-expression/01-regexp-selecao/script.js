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



