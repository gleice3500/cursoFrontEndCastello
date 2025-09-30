// Funções de Texto (String)

let texto = "Aula de JavaScript"

// contar os caracteres (length)
console.log(texto.length); // 18

// MAIÚSCULAS e minúsculas
console.log(texto.toUpperCase()); //MAIÚSCULAS
console.log(texto.toLowerCase()); //minúsculas

// Partes do Texto
//substring
console.log(texto.substring(0,4)); //Aula
//slice(Quantidade)
console.log(texto.slice(-10)); //JavaScript

//Substituir parte do Texto
console.log(texto.replace("Java", "Type"));

//Tesoura (Trim) Somente começo e fim da Palavra
let texto1 = "  JavaScript  ";
console.log(texto1); //"  JavaScript  "
console.log(texto1.trim());

// Separar Texto (split) - Caracter comun
let linguagens = "JavaScript, Python, PHP, Java, C#";
let vetorlinguagens = linguagens.split(", ");
console.log(linguagens);
console.log(vetorlinguagens);

//Desafio
let caracter = "Bom Dia Com Muita Alegria";
let caracterSemEspaco = caracter.replaceAll
(" ","");
console.log(caracter);
console.log(caracter.length);
console.log(caracterSemEspaco);
console.log(caracterSemEspaco.length);

