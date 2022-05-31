const cpfs = document.querySelectorAll('.cpf li');
console.log("\nNormal", cpfs, "\n");

//Com o destructing podemos desestruturar os dados para dentro de um array.
const elementsInnerText = ([...elements]) => {
  // const arrayElements = Array.from(elements);
  return elements.map(element => element.innerText);
}
console.log("\nInnerText", elementsInnerText(cpfs), "\n");

//Limpar o CPF
const limparCPF = (cpf) => {
  //faço replace de tudo que não é digito.
  return cpf.replace(/\D/g, '')
}

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '$1.$2.$3-$4')
}

const formatarCPFs = (cpfs) =>{
  return cpfs.map(construirCPF);
}

const subtituiCPFs = (cpfElement)=>{
  const cpfsString = elementsInnerText(cpfElement);
  const cpfsLimpos = cpfsString.map(limparCPF);
  const cpfFormatados = formatarCPFs(cpfsLimpos);
  cpfElement.forEach(
      (s, index)=>{
        s.innerText = cpfFormatados[index];
      }
  );
}

subtituiCPFs(cpfs)

console.log("\nCPF Formatados: ", formatarCPFs(elementsInnerText(cpfs)))
