export default class validarCPF{
    constructor(element){
        this.element = element;
    }

    limpar(cpf) {
        return cpf.value.replace(/\D/g, '');
    }

    construir(cpf){
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    }

    formatar(cpf){
        const cpfLimpo = this.limpar(cpf);
        return this.construir(cpfLimpo);
    }

    validarNaMudanca(element){
        if(this.validar(element.value)){
            element.value = this.formatar(cpf);
            element.classList.remove('error');
            element.classList.add('valido');
            element.nextElementSibling.classList.remove('activo');
        }else{
            element.classList.remove('valido');
            element.classList.add('error');
            element.nextElementSibling.classList.add('activo');
        }
    }

    validar(cpf){
        const matchCpf = cpf.match(/(\d{3}-?\.?\s?){3}\d{2}/g);
        return matchCpf && matchCpf[0] === cpf
    }

    adicionarEvento(){
        //Usa arrow functions para não perder a referencia da classe. this.
        this.element.addEventListener('change', ()=>{
            this.validarNaMudanca(this.element);
        })
    }

    adicionarErrorSpan(){
        const errorElement = document.createElement('span');
        errorElement.classList.add('error-text');
        errorElement.innerText = 'CPF invalido';
        this.element.parentElement.insertBefore(errorElement, this.element.nextElementSibling);

    }

    inciar(){
        this.adicionarErrorSpan()
        this.adicionarEvento();
        return this;
    }
}
