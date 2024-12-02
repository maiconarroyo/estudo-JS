

// function fibonacciArray (n){
//     const fibonnaci =[0,1];

//     for (let i=2; i < n; i++){
//         let anterior = fibonnaci [i-1];
//         let anterioriAoAnterior = fibonnaci [i-2];

//         const proximo = anterior + anterioriAoAnterior;
//         fibonnaci.push(proximo);
//     }

//     return fibonnaci;
// }

// const sequencia= fibonacciArray(15);
// console.table(sequencia)



function encontrarMaiorNome(arrayNomes){
    let maiorNome = "";
for (let i=0; i < arrayNomes.length; i++){
    
    // let nomeAtual = arrayNomes[i];
    // let tamanhoNomeAtual= nomeAtual.length;
    // let tamanhoMaiorNome = maiorNome.length;
    
    if (arrayNomes[i].length > maiorNome.length){
        maiorNome = arrayNomes[i];
    }
}
return maiorNome
}
// const arrayNomes = ['maicon', 'mika', 'clodoberto', 'jardelnilsonmelo', 'clara'];
// let maiorNome = encontrarMaiorNome(arrayNomes);
// console.log(maiorNome)

const arrPai = [
    [100, 200, 300], 
    [400, 500, 600], 
    [700, 800, 900]
    ];

    
console.log(arrPai[1][1]);

