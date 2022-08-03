//*Escreva uma função que receba um ´mero e retorne:
// Numero  divisivel por 3 = FIZZ
// Numero é divisivel por 5 = Buzz
// Numero é divisivel por 3 e por 5 = FizzBuzz
// Numero nao é divisivel por 3 e 5 = Retorna o proprio numero
// Checar se o numero é realmente um numero
// use a funcao com números de  0 a 100




function analisar(num) {
   
   if(num % 3=== 0)  {
      console.log('Fizz')
      return
   }else if (num % 5 === 0){
      console.log('Buzz')
      return
   }else if(num % 3 === 0 && num % 5 === 0) {
      console.log('FizzBuzz')
      return
   }else if( num % 3 !== 0 && num % 5 !== 0) {
      console.log(`${num}`);
      return;
   }else if( num !== Number){
      console.log(`${num} não é número`);
      return
   }
}


analisar('t');
analisar(5);
analisar(75);
analisar(Math.floor(Math.random() *101))
analisar(Math.floor(Math.random() *101))

console.log('outra versão')
//** Menos verboso */

function fizzBuzz(num) {
   
   if (typeof num !== 'number') return num;
   if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
   if(num % 5 === 0) return 'Fizz';
   if(num % 5 === 0) return 'Buzz';
   
   return num;
      
}

console.log('a')
for (let i = 0; i <= 100; i++){
   console.log(i, fizzBuzz(i));
}