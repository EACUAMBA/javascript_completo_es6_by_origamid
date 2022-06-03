export default function initFuncionamento(){


  }
const funcionamento= document.querySelector("[data-semana]");
const diasSemana = funcionamento.dataset['semana'].split(', ').map(Number);
const horarioSemana = funcionamento.dataset['horario'].split(', ').map(Number);



const hoje = new Date();
const diaAgora = hoje.getDay();
const horarioAgora = hoje.getHours() - 1;

let horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];
let diaAberto = diasSemana.includes(diaAgora)

if(horarioAberto && diaAberto)
  funcionamento.classList.add("aberto");
else
  funcionamento.classList.add("fechado");






