let pessoa = {
    nome: 'thiago',
    sobrenome: 'Els',
    idade: '25',
    aniversario: [1,22],
    admin: true
}





// function converteAniversairo(obj){
//     Object.aniversario={
//         dia:obj.aniversario[1],
//         mes:obj.aniversario[0]
//     }
//     return obj;
// }

// let aniversarioNovo = {
//     aniversario: [9,20]};

// let aniversariomudou = converteAniversairo(aniversarioNovo)
// console.log(aniversariomudou)

// console.log(pessoa);

// delete pessoa.admin;

// function removePrivilegio(obj){
//     obj.admin=false;
//     return obj;
// }

// let resultado = removePrivilegio(pessoa)
// console.log(pessoa)

// let arrayPessoa= ['Thiago', 'Els', 25, [1,22],true];

let garrafubgaDagua = {
    marca : "Crystal",
    produto: "Àgua mineral",
    tipo: "sem gás",
    tamanho:"500ml",
    pago:true
}

console.log(pessoa.idade);

console.log(pessoa["nome"]);

 console.log(garrafubgaDagua["pago"]);
let array = ['nome', 'idade'];

 for (let i=0; i <array.length; i++ ){
     let chave = array[i];
     console.log(pessoa[chave]);
 }

 console.log(`Seja bem vindo ${pessoa.nome}  ${pessoa.sobrenome}, você tem ${pessoa.idade} anos de idade e faz aniversário em ${pessoa.aniversario[1]}/${pessoa.aniversario[0]} `)


