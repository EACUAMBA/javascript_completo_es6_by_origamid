export default function debounce(callback, delay){
  let timer; 

  //Retonando uma função nova que configura o timeout.
  return (...args)=>{
    //Verificando se o timeout existe se existe removo
    if(timer) clearTimeout(timer);
    //Colocando o timeout
    timer = setTimeout(()=>{
      callback(...args);
      //Apos executar removo a referencia do timer, ois já não é necessario executar.
      timer = null;
    }, delay);
  }
}