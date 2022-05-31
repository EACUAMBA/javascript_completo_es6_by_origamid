const cpf = document.querySelectorAll('.cpf li');
console.log("\nNormal", cpf, "\n");

//Com o destructing podemos desestruturar os dados para dentro de um array.
const elementsInnerText = ([...elements]) => {
  // const arrayElements = Array.from(elements);
  return elements.map(element => element.innerText);
}
console.log("\nInnerText", elementsInnerText(cpf), "\n");

//Limpar o CPF
const limparCPF = (cpf) => {
  //faço replace de tudo que não é digito.
  return cpf.replace(/\D/g, '')
}

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '$1.$2.$3-$4')
}

const formatarCPFs = (cpfs) =>{
  return cpfs.map(construirCPF());
}

console.log("\nCPF Formatados: ", formatarCPFs(cpf))
