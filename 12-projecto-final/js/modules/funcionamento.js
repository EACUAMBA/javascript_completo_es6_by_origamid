export default class Funcionamento {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);


  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset['semana'].split(', ').map(Number);
    this.horarioSemana = this.funcionamento.dataset['horario'].split(', ').map(Number);
  }
  dadosAgora() {
    this.hoje = new Date();

    this.diaAgora = this.hoje.getDay();
    this.horarioAgora = this.hoje.getUTCHours() + 2;
  
  }

  estaAberto() {
    const horarioAberto = this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1];
    const diaAberto = this.diasSemana.includes(this.diaAgora)
    return horarioAberto && diaAberto;
  }

  activaAberto() {
    if (this.estaAberto())
      this.funcionamento.classList.add("aberto");
    else
      this.funcionamento.classList.add("fechado");
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.activaAberto();
    }
  }
}







