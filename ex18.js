// const array =['m1', 'm2', 'm3', 'm4'];

function showArrayValues(array, wordToSearch){
    for (let i = 0 ; i < array.length; i++){
        console.log(array[i]);
        if(array[i] === wordToSearch){
            return "Valor Encontrado";
        }        
    }
    return "Valor não Encontrado"
    
}
const instrutor = ["toninho", "heleno", "genilson", "maicon"];
const search = "genilson";

const searchResult = showArrayValues (instrutor, search);
console.log(searchResult)