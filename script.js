//ex1
function reverseString(input) {
    console.log(input);
    var newString = "";
    for (var i = input.length - 1; i >= 0; i--) {
        newString += input[i]; // or newString = newString + str[i];
    }
    console.log(newString);
}

//ex2
function removeStringAtPosition(string, position){
    console.log(string);
    str = string.slice(0, position) + string.slice(position+1, string.length);
    console.log(str);
}

//ex3
function isDivBy3orBy7(a){
    if(a%3 === 0) console.log(a + " este divizibil cu 3");
    else if(a%7 === 0) console.log(a + " este divizibil cu 7");
    else console.log("Nu este divizibil nici cu 3, nici cu 7");
}

//ex4
function isNumber(a){
    if(isNaN(a)) console.log("Nu este numar");
    else console.log("este numar");
}

//ex5
function suma(b){
    let c = b.length;
    let isNumber = 1;

    for(let i = 0; i<c; i++){
        if(isNaN(b[i])===1){
            isNumber = 0;
            break;
        }
    }

    if(isNumber===1) {
        let suma = 0;
        for (let i = 0; i < c; i++) {
            suma = suma + b[i];
        }
        console.log(suma);
    }
    else{
        let suma = "";
        for (let i = 0; i < c; i++) {
            suma = suma + b[i];
        }
        console.log(suma);
    }
}


//ex6
function hasProp (obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}





reverseString("1234");
removeStringAtPosition("Cosmin",5)
isDivBy3orBy7(13);
isNumber("abkps");
suma([1,2,3]);
suma([23,"as"]);

var masina = {
    marca: "VW",
    culoare: "negru",
    tipDeCombustibil: "electric"
};

if (hasProp(masina, 'marca')) {
    console.log("proprietatea exista");
}else{
    console.log("proprietatea nu exista");
}