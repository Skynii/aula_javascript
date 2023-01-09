function relogio(){
   ///configurar a hora
   function criaHoradosSegundos(segundos){
      const data = new Date(segundos  * 1000);
      return data.toLocaleTimeString('pt-BR', {
         hour12: false,
         timeZone: 'UTC' //meia noite
   });
   }

   const relogiobtn = document.querySelector(".relogio");
   let segundos = 0;
   let timer;

   function inciaRelogio(){
      timer = setInterval(function() {
         segundos++;
         relogiobtn.innerHTML = criaHoradosSegundos(segundos); //segundos formatados
      }, 1000)
   } 

   //add click
   document.addEventListener('click', function(e) {
   const el = e.target;

      if(el.classList.contains('zerar')){
         clearInterval(timer);
         relogiobtn.innerHTML = '00:00:00';
         segundos = '0';
      }

      if(el.classList.contains('inciar')){
         clearInterval(timer); 
         inciaRelogio();
         relogiobtn.style.color = ' black';
      }

      if(el.classList.contains('pausar')){
         clearInterval(timer); 
         relogiobtn.style.color = 'red';
      };
   });
}

relogio();








   

   

   
