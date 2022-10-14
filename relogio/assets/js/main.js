const iniciarBtn = document.querySelector(".iniciar");
const pausarBtn = document.querySelector(".pausar");
const zerarBtn = document.querySelector(".zerar");
const relogiobtn = document.querySelector(".relogio");
let segundos = 0;
let timer;

function inciaRelogio(){
   timer = setInterval(function() {
      segundos++;
      relogiobtn.innerHTML = criaHoradosSegundos(segundos); //segundos formatados
   }, 1000)
};

//configurar a hora
function criaHoradosSegundos(segundos){
   const data = new Date(segundos  * 1000);
   return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC' //meia noite
   });
}

console.log(criaHoradosSegundos(10))


//add click
iniciarBtn.addEventListener('click', function(event){
   clearInterval(timer); 
   inciaRelogio();
   relogiobtn.style.color = ' black';
});

pausarBtn.addEventListener('click', function(event){
     clearInterval(timer); 
     relogiobtn.style.color = 'red'
});

zerarBtn.addEventListener('click', function(event){
     clearInterval(timer);
     relogiobtn.innerHTML = '00:00:00' 
     segundos = '0'
});

