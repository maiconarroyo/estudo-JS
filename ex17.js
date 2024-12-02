const primeiroArray = [10, 20, 30, 40, 50]

//console.log(primeiroArray.length)
//console.table(primeiroArray)
//console.log(primeiroArray[2])

//primeiroArray[0] = 100;

//console.log(primeiroArray[0]);

// const segundoArray = [10, "B", 3.7, true, 'M1'];

// const tamanhoArr2 = segundoArray.length;
// const ultimoIndiceArr2 = tamanhoArr2 -1;

// // console.log(tamanhoArr2);
// // console.log (segundoArray[ultimoIndiceArr2]);

// //Push fim do array

// const terceiroArray = [];

// console.log(terceiroArray);

// terceiroArray.push("Maicon");
// console.log(terceiroArray);

// terceiroArray.push("Mika");
// console.log(terceiroArray);

// //inicio do array UNSHIFT

// terceiroArray.unshift("Iniciando")
// console.log(terceiroArray)

// //remover elementos (POP Remove do fim)

// let valorRemovido= terceiroArray.pop();
// console.log(terceiroArray)
// console.log(valorRemovido)

// // SHIFT (Remove do inicio)
// valorRemovido = terceiroArray.shift();
// terceiroArray.shift();
// console.log(terceiroArray);
// console.log(valorRemovido);


const user = [];
let userName="";

while(userName.toLocaleLowerCase != "sair"){
    userName =prompt("Digite um nome:");
    user.push(userName);
}
console.log(user)