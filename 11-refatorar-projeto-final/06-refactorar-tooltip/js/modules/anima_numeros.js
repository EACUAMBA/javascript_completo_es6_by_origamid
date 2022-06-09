export default class AnimaNumeros {

    constructor(numeros, observerTarget, observerClass) {
        this.numeros = document.querySelectorAll(numeros);
        this.observerClass = observerClass;
        this.observerTarget = document.querySelector(observerTarget)

        this.handleMutation = this.handleMutation.bind(this);
    }

    //Recebe um elemento do dom com o numero e incremente a aprtir de zero até o numero final.
    static incrementarNumero(numero) {
        const total = +numero.innerHTML;
        let passo = Math.floor(total / 50);
        let novoTotal = 0;
        const timer = setInterval(() => {
            novoTotal += passo;
            numero.innerHTML = novoTotal;
            if (novoTotal > total) {
                numero.innerHTML = total;
                clearInterval(timer)
            }
        }, Math.random() * 25)
    }
    //activa incrementar numero.
    animaNumeros() {
        this.numeros.forEach((numero) => {
            this.constructor.incrementarNumero(numero)
        })
    }

    handleMutation(mutation) {
        if (mutation[0].target.classList.contains(this.observerClass)) {
            this.observer.disconnect()
            this.animaNumeros()
        }
    }

    addMutationObserver() {
        this.observer = new MutationObserver(this.handleMutation);
        this.observer.observe(this.observerTarget, { attributes: true });
    }

    init() {
        if (this.numeros.length && this.observerTarget)
            this.addMutationObserver();
    }
}
