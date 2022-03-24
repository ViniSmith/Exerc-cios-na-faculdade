const palavra1 = "solem";
const palavra2 = "melos";


var palavrasSplit1 = palavra1.split("");
var palavrasSplit2 = palavra2.split("");
var palavrasSort1 = palavrasSplit1.sort();
var palavrasSort2 = palavrasSplit2.sort();
console.log(palavrasSort1);
console.log(palavrasSort2);


if(palavrasSort1.join("") == palavrasSort2.join("")) {
        console.log(true);
} else {
        console.log(false);
        console.log(palavrasSort1.join(""))
        console.log(palavrasSort2.join(""))
        
}
    





