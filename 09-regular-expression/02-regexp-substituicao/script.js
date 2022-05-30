// Regexp Substituição

//Podemos apontar para palavra que obedece ao padrão usando o sifrão e o e comercial $&;
const sentence = 'PHP e Java são linguagens diferentes.'.replace(/java/gi, '$&Script');
console.log(sentence);

//Podemos criar uma grupo de captura
//Podemos pegar esses grupos e organizar melhor os dados usando o sifrão e o valor do grupo comecando de $0 que é a string toda

const email = 'edilson.cuamba@gmail.com'.replace(/([\w.]+)(@)([\w.]+)/gi, '$1@exceptions.co.mz')
console.log(email);

let nomes = `
Cuamba, Edilson Alexandre
Douglas, Maria
Carmen, Lukila
Fortino, Dinho
`;
nomes = nomes
    .split(/\n/g)
    .map(
        s => s.replace(/([\w]+)(,\s)([\w\s]+)/gi, '$3 $1')
    );
console.log(nomes);

//Podemos tornar um grupo de captura não capturavel com o ?:
nomes = `
Cuamba, Edilson Alexandre
Douglas, Maria
Carmen, Lukila
Fortino, Dinho
`;
nomes = nomes
    .split(/\n/g)
    .map(
        s => s.replace(/([\w]+)(?:,\s)([\w\s]+)/gi, '$2 $1')
    );
console.log(nomes);


//Positive Lookahead
//Seleciona apenas o valor que queremos alterar, por exemplo ai abaixo ele vai seleciona os numeros com a terminacao em px;
let valores = `2em, 3px, 3rem, 4px, 5cm`;
valores = valores.replace(/\d(?=px)/g, '20');
console.log(valores);

//Negative Lookahead
//Seleciona os que não satisfaze a condição do lookahead.
 valores = `2em, 3px, 3rem, 4px, 5cm`;
valores = valores.replace(/\d(?!px)/g, '20');
console.log(valores);
