numeroArrays = [1, 6 , 4 , 7 , 12, 23];
var armazenaNumeros = [];


const calcularElementos = (numeroArrays) => {
    for(var i = 1; i < numeroArrays.length; i++){
        for(var j = 1; j < numeroArrays.length; j++){
            if (numeroArrays[j] !== numeroArrays[i] && numeroArrays[j] + numeroArrays[i] == 10) {
                armazenaNumeros.push(numeroArrays[i]);
            }
        }
    }
    if(armazenaNumeros !== 0) {
        return armazenaNumeros;
    }
}

console.log(calcularElementos(numeroArrays));



const palavra1 = "otok";
const palavra2 = "koto";
const armazenaLetra = [];

const analisarPalavras = (palavra1, palavra2) => {
    arrayPalavra1 = palavra1.split;
    arrayPalavra2 = palavra2.split;
    for(var i = 0; i < arrayPalavra1.length; i++) {
        if(arrayPalavra1[i] == arrayPalavra2[i]) {
        return true;
        }
    }
}

console.log(analisarPalavras(palavra1, palavra2));



const idadeInformadaAnos = 19;
const idadeInformadaMeses = 5;
const idadeInformadaDias = 28;
var armazenaIdade = 0;


const transformaIdade = (idadeInformadaAnos, idadeInformadaMeses, idadeInformadaDias) => {
    armazenaIdade = (idadeInformadaAnos * 365) + (idadeInformadaMeses * 30) + idadeInformadaDias;
    return armazenaIdade;
}

console.log(transformaIdade(idadeInformadaAnos, idadeInformadaMeses, idadeInformadaDias));


const arrayOrdenar = [5, 3, 2, 1, 4];
const Ordenar = (arrayOrdenar) => {
    for(var m=1; m < arrayOrdenar.length; m++) {
        var auxiliar = arrayOrdenar[m];
        for(var n=m-1; n >= 0 && arrayOrdenar[n] > auxiliar; n--) {
            arrayOrdenar[n+1] = arrayOrdenar[n];
        }
        arrayOrdenar[n+1]=auxiliar;
    }
    return arrayOrdenar;
}

console.log(Ordenar(arrayOrdenar));

