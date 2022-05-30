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
//match() -> retorna o array ocom todas as possibilidades se passado sem o g de glibal
let match = frase.match(regexp_);
console.log()


