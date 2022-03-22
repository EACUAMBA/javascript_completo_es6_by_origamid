//History
//Serve para controlar o historico da sessao, os botoes avancar e voltar no historico de navegacao
// windows.history.back() - volta para a pagina anterior.
// windows.history.forward() - vai para a proxima página.

// window.history.pushState(obj, title, url); - ,muda o endereco e o titulo da página.

//posstate- evento que é acionado ao clicar em back e forward;

// window.history.pushState(null, null, "./text.html")
// window.addEventListener("popstate", function (event){
//     console.log(event, "Evento")
// })
// esse evento so funciona com um push state activo

const links = document.querySelectorAll("a");

function hancleClick(event){
    event.preventDefault();
    fetchpage(event.target);
}

async function fetchpage(target){
    window.history.pushState(null, null, target.href)
    const pageResponse = await fetch(target.href)
    const pegatexto = await pageResponse.text();

    console.log(pegatexto)
    replaceContent(pegatexto);
}

function replaceContent(texto){
    const html = document.createElement("div")
    html.innerHTML = texto;

    const oldcontent = document.querySelector("main");
    const newContent = html.querySelector("main");

    oldcontent.innerHTML = newContent.innerHTML;
    document.title = html.querySelector("title").innerText;

}

window.addEventListener("popstate", function (){
    console.log(window.location.href)
    //fetchpage()
})

links.forEach(link=>{
    link.addEventListener("click", hancleClick);
})