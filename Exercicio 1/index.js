//Escreva uma função que recee 2 numeros e retorne o amior deles.
 
function maior(num1, num2) {
  
  if(num1> num2) return console.log(`${num1} é maior que ${num2}`);
  return console.log(`${num2} é maior que ${num1}`)
  
}

maior(5,1);
maior(7,9)

//* Arrow function
const max2 = (x,y) => x > y ? x : y;


console.log(max2(10,20));