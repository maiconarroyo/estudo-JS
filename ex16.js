function piramedeNumerica(tamanhoPiramide){
    for(i=1 ; i <=tamanhoPiramide ; i++){
        let linha = "";
        for(let j=1; j <=i;j++){
            linha = linha += j + " ";
        }
        console.log(linha)
    }

}
piramedeNumerica(7);