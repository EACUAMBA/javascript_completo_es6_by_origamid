//Metodos
// A classe regexp tem construtores.
const exgexp_sem_construtor = /[0-9]/g;

//Flags passamos do lado, como segundo argumento.
const regexp_com_construtor = new RegExp(/\w+/, 'gi');

//Usando pela primera vez
const regexp = /\w+/gi;
const regexp1 = new RegExp('\\w+', 'gi');
const frase = 'Javascript Linguagem 101';
console.log(frase.replace(regexp1, 'x'));

//Propriedades da RegExp
console.log(regexp.flags)
console.log(regexp.global)
console.log(regexp.ignoreCase)
console.log(regexp.multiline)
console.log(regexp.source)

//Functions (Comportamentos)

//text()
//Verifica se a condiçao que passamos existe.
const regexp_ = /Java/gi;
const frase_ = 'JavaScript não é Java, TypeScript, BurnScript';
console.log(regexp_.test(frase_))

//Mostra a ultima vez que ela vez pesquisa no regexp
console.log(regexp_.lastIndex)
console.log(regexp_.test(frase_))
console.log(regexp_.lastIndex)
console.log(regexp_.test(frase_))
console.log(regexp_.lastIndex)

while (regexp_.test(frase)){
    console.log(regexp_.source)
}

//exec()
//Um array com diversos valores
//
const regexp_script = /\w+(?=script)/gi;/*
console.log(regexp_script.exec(frase_))
console.log(regexp_script.exec(frase_))
console.log(regexp_script.exec(frase_))
console.log(regexp_script.exec(frase_))*/

while(x = regexp_script.exec(frase_)){
    console.log(x)
}

let value;
while((value = regexp_script.exec(frase_)) !== null){
    console.log(value)
}

//Metodos de String
//match() -> verifica se a string conbina com a expressão e retronar um array ou um object.
//regexp com g-> retorna uma array com todas as palavras que obedecem ao padrão especificado.
//regexp sem g -> retorna um dado como o do exec().
let sentence = 'JavaScript, TypeScript, CoffeeScript, Java';
const regexpComG = new RegExp(/\w+(?=script)/, 'gi')
const regexpSemG = new RegExp(/\w+(?=script)/, 'i')
let match = sentence.match(regexpComG);
let matchSemG = sentence.match(regexpSemG);
console.log(match)
console.log(matchSemG)

//Split -> retorna uma array separado usando o valor que combina com o regexp, remove o que der match
console.log(sentence.split(/(script,\s)/))

// replace() -> substitui o que conbina com a expressão regular.
const tags = `
<ul>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
`;

//faz replace em tudo
console.log(tags.replace(/ul/g, 'ol'));

//Substitui o nome das tags
console.log(tags.replace(/(?<=<\/?)\w+/g, 'edilson'));
console.log(tags.replace(/(?<=<\/?)\w+/g, '$& --'));

const emails = `
    empresa@gmailf.com
    empresa@ggmail.com
    empresa@gmaiI.com
    empresa.erico@gmail.com
`;

const regexp_email = /(\w+@)([\w.]+)/g
const result = emails.replace(regexp_email, '$1gmail.com')
console.log(result);

//usando callback
const rr = emails.replace(regexp_email, function (...args){
    console.log(args[2]);
    if(args[2]){
        return args[1] + 'hotmail.com'
    }
})

console.log(rr)



