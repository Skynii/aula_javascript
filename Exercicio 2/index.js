// Escreva uma função chamda ePaisagem que recebe dois argumentos, largura e altura de uma imagem (numer).
// Retorne true se a imagem no modo paisagem:

function ePaisagem(largura, altura) {
   return largura >= altura;
}

//*Arrow Function
const ePaisagem2 = (largura, altura) => largura > altura;
console.log(ePaisagem(1920,1920))

console.log(ePaisagem2(1080,1920))