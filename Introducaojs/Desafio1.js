// desafio1 - idade

const prompt = require("prompt-sync")();

var idade = prompt("Informe sua Idade: ");

if(idade<18){
    console.log("Menor de idade");
}else if(idade<60){
    console.log("Adulto");
}else{
    console.log("Idoso")
}
