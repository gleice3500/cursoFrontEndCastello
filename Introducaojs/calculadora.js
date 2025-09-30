//Criar uma Calculadora Simples em JS
//import da biblioteca
const prompt = require("prompt-sync")();

//funções - Operações
//soma
function soma(a,b){
    return (a+b);
}
//subtração
function sub(a,b){
    return (a-b);
}
//multiplicação
function multi(a,b){
    return (a*b);
}
//divisão 
function div(a,b){
    return (a/b);
}

//menu de Operações 
function menuOperacoes(){
    console.log("===Calculadora Simples===");
    console.log("| 1. Soma               |");
    console.log("| 2. Subtração          |");
    console.log("| 3. Multiplicação      |");
    console.log("| 4. Divisão            |");
    console.log("=========================");
    let operacao = prompt("Escolha a Operação Desejada: ");
    //entrada dos n°s
    let numero1 = Number(prompt("Digite n° 1: "));
    let numero2 = Number(prompt("Digite n° 2: "));
    //condicional
    let resultado;
    switch (operacao) {
        case "1":
            resultado = soma(numero1,numero2);
            break;
        case 2:
            resultado = sub(numero1,numero2);
            break;
        case 3:
            resultado = multi(numero1,numero2);
            break;
            case 4:
                if(numero2==0){
                    console.log("Não Dividiras por Zero!!!");
                    resultado = null;
                }else{
                    resultado = div(numero1,numero2);
                }
        default:
            console.log("Operação Inválida")
            break;
    }//fim switch
    console.log("Resultado "+resultado);

}
//Execução do programa

var continuar = true;
while (continuar) {
    menuOperacoes();
    let sair = prompt("1. Continuar | 2. Sair")
    if (sair == "2"){
        continuar = false;
        console.log("Saindo...");
    }
}