// let color = prompt('Digite a cor de fundo');
// window.document.body.style= `background : ${color}`;

// let title = prompt("Digite o Titulo do Site");
// document.title = title;
let background= "gray"
window.document.body.style= `background: ${background}`;

let titulo = document.querySelector("#titulo");
titulo.style= `color : white`;

let texto = document.querySelector(".texto")
texto.style="font-weigth: bold; font-size:50px;text-decoration: underline;";

let ancora = document.querySelector('a');
ancora.style = `text-decoration: none`;

// let div1 = document.querySelector('#div1');
// div.innerHTML= "Atualizado";

// let div2 = document.querySelector("#div2");
// div.innerHTML = "Processando";

// se torna arrays de lista para atualizar nescessário o uso do for
let divs = document.querySelectorAll("div");

for(let i = 0 ; i < divs.length; i++){
    let div= divs[i];
    div.innerHTML=`atualizado ${i+1}`;
    div.style= "margin-top: 30px;"
}
