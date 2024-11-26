let nome = prompt('Digite seu nome: ')

function padronizaMensagem(){
    console.log(`Seja bem vindo ${nome}`);
}
padronizaMensagem();

function calculadora(){
    let a= parseFloat(prompt('Digite o primeiro número'));
    let b = parseFloat(prompt('Digite o Segundo número'));
    let op = prompt('Digite o tipo da operação');

    console.log(a,b,op);
}

calculadora();