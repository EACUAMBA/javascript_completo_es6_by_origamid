export default function  initAnimaNumeros(){
    const observer = new MutationObserver(handleMutation);
    const observerTarget = document.querySelector('.numeros');
    const numeros = document.querySelectorAll('[data-numero]');

    function anima() {
        numeros.forEach((numero)=>{
            const total = +numero.innerHTML;
            let passo = Math.floor(total / 50);
            let novoTotal = 0;
            const timer = setInterval(() => {
                novoTotal += passo;
                numero.innerHTML = novoTotal;
                if(novoTotal > total){
                    numero.innerHTML = total;
                    clearInterval(timer)
                }
            }, Math.random()*25)
        })
    }

    function handleMutation(mutation) {
        if(mutation[0].target.classList.contains("activo")){
            observer.disconnect()
            anima()
        }

    }
    observer.observe(observerTarget, {attributes: true});
}
