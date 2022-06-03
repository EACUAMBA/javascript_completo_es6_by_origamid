export default  function initModal(){
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const botaoLogin = document.querySelector('[data-modal="login"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  const activo = 'activo';
  
  // console.log(botaoAbrir, botaoFechar, botaoLogin, containerModal)
  
  function toggleModal(event){
   event.preventDefault();
   containerModal.classList.toggle(activo)
  }
  
  function clickForaDoModal(event) {
    console.log(event)
    if(event.target === this)
    toggleModal(event);
  }
  
  botaoAbrir.addEventListener('click', toggleModal)
  botaoFechar.addEventListener('click', toggleModal)
  containerModal.addEventListener('click', clickForaDoModal)
}

