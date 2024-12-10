// let color = prompt('Digite a cor de fundo');
// window.document.body.style= `background : ${color}`;

// let title = prompt("Digite o Titulo do Site");
// document.title = title;
// let background= "gray"
// window.document.body.style= `background: ${background}`;

// let titulo = document.querySelector("#titulo");
// titulo.style= `color : white`;

// let texto = document.querySelector(".texto")
// texto.style="font-weigth: bold; font-size:50px;text-decoration: underline;";

// let ancora = document.querySelector('a');
// ancora.style = `text-decoration: none`;

// // let div1 = document.querySelector('#div1');
// // div.innerHTML= "Atualizado";

// // let div2 = document.querySelector("#div2");
// // div.innerHTML = "Processando";

// // se torna arrays de lista para atualizar nescessário o uso do for
// let divs = document.querySelectorAll("div");

// for(let i = 0 ; i < divs.length; i++){
//     let div= divs[i];
//     div.innerHTML=`atualizado ${i+1}`;
//     div.style= "margin-top: 30px;"
// }

let p1 = document.querySelector(`p`);
p1.innerHTML = "primeiro paragrafo selecionado";

let p2= document.querySelector('.paragrafo');
p2.innerHTML= " Segundo paragrafo modificado";

let p3 = document.querySelector('#paragrafo1');
p3.innerHTML = "Terceiro paragrafo capturado";

let section = document.createElement('section');
section.style = `display:flex;align-items:center;justify-content:center;flex-direction:column;border: 1px solid black;width:1250px;`
section.appendChild(p1);
section.appendChild(p2);
section.appendChild(p3);

let body= document.querySelector('body');
body.appendChild(section);
body.style= "display:flex;justify-content:center;align-items:center;margin:auto;flex-direction:column;"

let parag = document.createElement('p');
parag.innerText= "Estudar sozinho é possível";
parag.setAttribute('class','Titutlo-body');

body.appendChild(parag);

let usuarios = [
    {
        nome:'Maicon',
        idade:25,
        cargo:'Desenvolvedor Web',
    },
    {
        nome:"Mika",
        idade:19,
        cargo:"Interprete de LIBRAS",
    },
    {
        nome:"Marcos",
        idade:59,
        cargo:"Suporte",
    },
    {
        nome:"Mailon",
        idade:32,
        cargo:"Cuidador",
    }
];

let ul = document.createElement('ul');

for(let i=0; i < usuarios.length; i++){
    let user = usuarios[i];
    let li = document.createElement('li')
    li.innerHTML = `${user.nome} tem ${user.idade} e possui o cargo de ${user.cargo}`;
    ul.appendChild(li);
}

let listContainer= document.querySelector('#userList');
listContainer.appendChild(ul)
listContainer.style= "border: solid 1px black;width: 1250px;display:flex;justify-content:center;align-items:center;"

