function calculadora(a,b,op){
   

    if(op == '+'){
        return a+b;
    }else if (op == '-'){
        return a-b;
    }else if (op == '/'){
        return a/b;
    }else if (op == '*'){
        return a*b;
    }
    else{
        return console.log("operador invalido");
    }

}

let num1= parseFloat(prompt('Digite o primeiro número'));
let num2 = parseFloat(prompt('Digite o Segundo número'));
let operacao = prompt('Digite o tipo da operação');

console.log(calculadora(2,5,'-'))