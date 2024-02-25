var myName = "Lauraaa";
//variavel usada antes de ser definida

function logName() {
  console.log(myName);
}

logName();

let nomeCachorro = "Bob";
let escolhaCachorroUsuario = "Marcelinho"
escolhaCachorroUsuario = "Bob"
if (escolhaCachorroUsuario !== nomeCachorro){
  console.log("Não é o nome do meu cachorro")

}else{
  console.log("É o meu cachorro")
}

let meuArray = ["Bob","Banguela","Brutus","Bolinha","Biba"];
let arrayNumeros = [12,4,6,8,10];
const meuCachorro = {
  nome: "Bob",
  idade: 4,
  raca: "pug",
  passatempo: "andar com a Laura",
  mae: "Laura"
};
console.log(meuCachorro.passatempo)

//Hoisting funciona bem com outros tipos de dados e variáveis. 
//As variáveis podem ser inicializadas e usadas antes de serem declaradas.

frase1 = "Melancia";
frase2 = "é vermelha";
console.log(frase1 + " " + frase2);
var frase1,frase2;

let frase3 =  "Banana";
console.log(frase3 + " " + frase4)//não possui hoisting, usamos antes de inicializar;
let frase4 = "maça";