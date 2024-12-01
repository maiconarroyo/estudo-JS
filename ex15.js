function palindromo(string){
    let invertedString = "";
    for(let i=0 ; i <string.length; i++){
        invertedString = string[i] + invertedString;
    }
        console.log('string', string);
        console.log('invertedstring', invertedString);

        if (string === invertedString){
            return true;
        }else {
            return false;
        }
    }


const string = 'carta';
const palindromoResult = palindromo(string);
console.log(palindromoResult);