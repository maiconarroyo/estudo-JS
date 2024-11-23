let correctNumber = Math.floor(Math.random() *10)+1;
const readlineSync = require("readline-sync");
let userInput;

do{
    userInput = parseInt(readlineSync.question("Digite um número de 1 a 10 : "));

    if (userInput !== correctNumber){
        console.log("Número Incorreto Tente novamente!");
    
    }
} while (userInput !== correctNumber);

console.log(`Parabéns!!! você acertou o número escolhido é ${correctNumber}`)