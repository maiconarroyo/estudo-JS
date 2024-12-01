function somarNumeros(tamanhoDoLaco){
    let soma =0;
    for (let index = 0; index <= tamanhoDoLaco; index++){
        soma += index;
        console.log(soma)
    }
}

somarNumeros(10)