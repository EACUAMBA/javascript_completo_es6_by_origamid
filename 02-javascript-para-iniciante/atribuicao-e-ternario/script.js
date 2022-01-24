//Comentarios servem para explicar o código.
//podemos usar dois tipos de comentários 
// texto aqui e 
/*que 
 é 
 multi linha*/
 
 //Operadores de atribuição
 var x = 5;
 var y = 10;
 x += y; //isto é igual a x = x + y
 x -= y; //x = x - y;
 x *= y; //x = x * y;
 x /= y; //x = x / y;
 x %= y; //x = x % y;
 x **= y; //x = x ** y; x elevado a y, x veze x, y vezes
 
 //Operador ternário
 //Usamos quando queremos atribuir um valor dependendo de algo
 
 var idade = 22;
 var adulto = idade >= 18 ? 'Adulto' : 'Não é adulto';
 console.log(adulto);
 
 //if abreviado - não usa as chavetas.
 var avanca = true;
 if(avanca)
 console.log('Pode avancar no semáforo!');
 else 
 console.log('Não pode avançar no semáforo!');
 console.log('Conduza com cuidado!');
 
 // Exercícios 
 var scroll = 1000;
 scroll += 500;
 console.log('Novo valor do scroll: ', scroll);
 
 var possuiCarro = true;
 var possuiCasa = true;
 var darCredito = (possuiCarro && possuiCasa);
 console.log('Dar credito: ', darCredito);
 