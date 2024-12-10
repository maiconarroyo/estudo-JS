// //atributo
// const produto = {
//     tipo: "alimento",
//     nome: "Feijão carioca",
//     valor: 5.49,
//     unidade: "kg",
//     quantidade: 1

// }

// //metodos

// let gato = {
//     som:"mirinhau",
//     miar: function(){
//         console.log(this.som);
//     },
//     ronronar: function(){
//         console.log('roin roin roin');
//     }
// }
// //executar função em metodo depende do objeto
// gato.ronronar();
// gato.miar();

// function miar(){
//     console.log('miar');
// }
// //função direto
// miar();




function calculadora(a,b,op){
    if(op == '+'){
        return a+b;
    }else if( op == "-"){
        return a-b;
    }else if (op == "*"){
        a * b ;
    }else if (op == "/"){
        return a / b;
    }else{
        return("operador invalido");
    }
}

// console.log(calculadora(2,2,"/"));

let objCalc= {
    a:2,
    b:2,
    somar: function(){
        return this.a+this.b;
    },
    dividir: function(){
        return this.a / this.b
    },
    subtrair: function(){
        return this.a - this.b
    },
    multiplicar: function(){
        return this.a * this.b
    },
}

// console.log(objCalc.somar())
// console.log(objCalc.subtrair())
// console.log(objCalc.dividir())
// console.log(objCalc.multiplicar())


function formatNumber_formart2Decimal(){
    let num = n.toFixed(2);
    return parseFloat (num);
}


function fromatNumber_percetageToUnity(n){
    let percent = n/100;
    return percent;
}

// console.log(fromatNumber_percetageToUnity(50));


//metodo

let pets = [
    {
        especie: "gato",
        pelo: "curto",
        raça: "siamês",
        nome: "nikita",
        miar: function () {
            console.log("Miau");
        },
        ronronar() {
            console.log("RonRonRon");
        },
    },
    {
        especie: "cao",
        nome: "dogao",
        som: function () {
            console.log("AuAu");
        },
    },
    {
        especie: "piriquito",
        nome: "shade",
        som: function () {
            console.log("PiuPiu");
        },
    },
];
function procurarPet(especie,nome){
    for(let i = 0 ; i <pets.length;i++){
        let pet = pets[i];
        if(especie == pet.especie && nome == pet.nome){
            return "Pet encontrado";
        }
    }
    return "Pet não encontrado"


}
console.log(procurarPet("gato","nikita"));


