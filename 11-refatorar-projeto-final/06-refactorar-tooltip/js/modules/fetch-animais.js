import AnimaNumeros from "./anima_numeros.js";

export default function initFetchAnimais() {
    async function fetchAnimais(URL) {
        try {
            const animaisResponse = await fetch(URL);
            const animaisJson = await animaisResponse.json();
            const numerosGrid = document.querySelector(".numeros-grid")

            animaisJson.forEach((a) => {
                const divAnimal = createAnimal(a)
                numerosGrid.appendChild(divAnimal);
            })
            const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', "activo");
            animaNumeros.init();
        } catch (erro) {
            console.log(Error(erro).message)
        }
    }

    function createAnimal(animal) {
        const div = document.createElement("div");
        div.classList.add("numero-animal")
        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.totais}</span>`;
        return div;
    }

    fetchAnimais("./animaisapi.json");

}


