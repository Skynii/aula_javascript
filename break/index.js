const numeros = [ 1,2,3,4,5,6,7,8,9];


for(let numero of numeros){

   //*Pular  uma iteração QUando for 2 não vai ser exibido
   //*Continue vai para proxima iteração. Break para o laço.
   if (numero === 2 || numero === 5){
      console.log('pulei')
      continue;
   }

   console.log(numero)

   if(numero === 7){
      console.log('parou a execução no 7')
      break
   }
}
   