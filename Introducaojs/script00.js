// declaração de variáveis e constantes

let nome = "joão"; // String
nome = "José"; //reatribuição de valor let
//let nome = "Pedro"; erro - não pode redeclarar

var idade = 25; // Numeric
idade = 26; //retribuição de valor var
var idade = 30; //redeclarar - ok

const PI =3.1415; // Numeric
//PI = 3.1954; //erro - não pode reatribuir

let teste = true; // Boolean
var x = null; // Null
var y; // Undefined

console.log("Nome: "+nome);
console.log("Idade: "+idade);
console.log("PI: "+PI);
console.log("Teste: "+teste);
console.log("Null: "+x);
console.log("Undefined:"+y);

//======================================
// Tipos de Operadores

//operadores aritiméticos (+ , - , * , / , %)
var a = 10;
var b = 3;
console.log("Soma: "+(a+b)); //13
console.log("Sub: "+(a-b)); //7
console.log("Multiplicação: "+(a*b)); //30
console.log("Divisão: "+(a/b)); //3.333
console.log("Resto: "+(a%b)); //1

// Operadores Relacionais (> , >= , < , <= , == , ===)

var a = 10; // var numeric
var b = 20; // var numeric
var c = "10"; // var string

console.log("a>b: "+(a>b)); //Comparação maior
console.log("a==c: "+(a==c)); //Igualdade simples
console.log("a===c: "+(a===c)); //Igualdade Estrita

//Operadores Lógicos (&& - E, || - OU, ! - Não)
var nota1 = 5;
var nota2 = 8;

console.log("Aprovação: "+(nota1>7 && nota2>7)); //false
console.log("Aprovação: "+(nota1>7 || nota2>7)); //true
console.log(!true); //false

