export default function initFetchAnimais(){

}

async function fetchAnimais(URL){
    const animaisResponse = await fetch(URL);
    const animaisJson = await animaisResponse.json();

    animaisJson.forEach((a)=>{
        createAnimal(a)
    })
}

function createAnimal( animal){
    const div = document.createElement("div");
    div.classList.add("")
}

fetchAnimais("./animaisapi.json");