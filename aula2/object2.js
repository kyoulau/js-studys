let deftonesAlbum = {
    name: "White Pony",
    singer:{
        name: "Chino Moreno",
        style: ["NU Metal", "Alternative"]
    },
    year:2000,
    tapes: ["Feiticeira", "Digital Bath", "Elite", "Rx Queen", "Street Carp", "Teenager", "Knife Prty", "Korea", "Passenger", "Change (In the House of Flies)", "Pink Maggit"],
};

let {nome,singer:{style:[style]},favorite = true} = deftonesAlbum;
console.log(deftonesAlbum.singer.style)
console.log(nome)

let name = deftonesAlbum?.singer?.name;
//o ?? é um operador logico que retorna o operador da esquerda se ele existir e não for undefined, caso o operador da esquerda não exista, ele ira retornar o valor do operador da direita;
//Esse operador é útil para atribuir valores padrões a variáveis que podem não ter sido inicializadas.

let usuario = {
    nome,
    idade: 21
};

let user = usuario.nome ?? "Anonimo";
console.log(usuario)

var x = null
var numero = x || 10;
console.log(numero)

x = undefined
var numero = x ?? 10;
console.log(numero)
//vai receber o valor de x se ele nao for null ou undefined
