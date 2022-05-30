//Como criar padroes para validacao

const ceps = [
    '00000-000',
    '00000 000',
    '00000000',
];
ceps.forEach(cep =>{
    console.log(cep.replace(/(\d{5})(?:[\s-]?)(\d{3})/g, '$1$2'));
})

// Validando CPF
// (\d{3})(?:[.-]?)(\d{3})(?:[.-]?)(\d{3})(?:[.-]?)([\d]{2}) -> Forma comprida.
// (?:(\d{3})(?:[.-]?)){3}([\d]{2}) -> Forma reduzida


const cpfs = [
    '136.775.118-79',
    '006-145-080-45',
    '34462183860',
    '481.573.968-40',
];
cpfs.forEach(cpf =>{
    console.log(cpf.replace(/((\d{3})(?:[.-]?)){3}([\d]{2})/g, '$1'));
    console.log(cpf.replace(/(\d{3})(?:[.-]?)(\d{3})(?:[.-]?)(\d{3})(?:[.-]?)([\d]{2})/g, '$1 $2 $3 $4'));
})

//Validando CNPJ
// (\d{2})(?:[.\-\s/]{1})(\d{3})(?:[.\-\s/]{1})([\d]{3})(?:[.\-\s/]{1})(\d{4})(?:[.\-\s/]{1})(\d{2}) - Forma comprida
console.log("\n\n")
const cnpjs = [
    '51.596.353/0001-37',
    '36.167.827-0001-31',
    '57-248-478/0001-52',
    '54-140.223.0001.83',
    '17 742.280/0001/06',
];
cnpjs.forEach(cnpj =>{
    console.log(cnpj.replace(/(\d{2})(?:[.\-\s\/]{1})?(?:(\d{3})(?:[.\-\s\/]{1})?){2}(\d{4})(?:[.\-\s\/]{1})?(\d{2})/g, '$1'));
    console.log(cnpj.replace(/(\d{2})(?:[.\-\s\/]{1})?(\d{3})(?:[.\-\s\/]{1})?([\d]{3})(?:[.\-\s\/]{1})?(\d{4})(?:[.\-\s\/]{1})?(\d{2})/g, '$1 $2 $3 $4 $5'));
})

// Validacao de numeor de contacto
// (?:(?:\+)?55\s?)?(?:\(?\d{2}\)?(?:[\s-]?))?(\d{4,5}[-\s]?)(\d{4}) ->

//Valida numero de telefone moçanbicano
// (?:\+258)?(?:\s{1})?(\d{2})(?:\s{1})?(\d{2})(?:\s{1})?(\d{2})(?:\s{1})?(\d{3})(?:\s{1})?
// (?:\+258)?(?:\s{1})?((8)(2|3|4|5|6|7))(?:\s{1})?(\d{2})(?:\s{1})?(\d{2})(?:\s{1})?(\d{3})(?:\s{1})? v2


//Para email =[\w.-]+@[\w-]+(\.[\w]+)+


//Seleccionando as tags e os seus atributos e o conteúdo e as tags de fechamento <\/?[\w\s="']+\/?>

//Para selecionar as tags(nomes) apenas (?<=<\/?)\w+
