function letraMaiuscula (string , letraMaiuscula){
    let modifiedString = ""
    for (let i = 0 ; i < string.length; i++ ){
        
        if (string[i] === letraMaiuscula){
           
            modifiedString = string[i].toUpperCase();
        }else{
            modifiedString += string[i];
        }
    }
    console.log("string ",string)
    console.log('modifiedString ', modifiedString)
    return modifiedString
}

const str= "casa"
const result = letraMaiuscula(str,"a");
console.log('result',result);