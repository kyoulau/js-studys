// falso no js: false, null, undefined, 0, NaN, '';
let sing = {
    name: "Michael Jackson",
    style: "Pop"
};

let album = {
    name: "Thriller",
    singer: "Michael jackson",
    year: 1982,
    nota: 10
};

//Quando você usa a desestruturação de objeto, você cria novas variáveis que recebem os valores das propriedades do objeto original, mas não alteram o objeto original. Para mudar o objeto original, você precisa usar a notação de ponto ou de colchetes3.

let {name, singer, year, nota}= album
console.log(album)

name = "Deftones";
band = "Deftones";
year = 2003;
favorite = true

let newAlbum = {name, singer:band, year,favorite: true,nota};

console.log(newAlbum);
console.log(band)
console.log(singer)


//arrays

let list = [1,2,3,4,5,6,7,8,9,10];
let copyList = [0,...list,11,12,13];
//usamos o recurso de desestruturacao em js ..list
console.log(list);
console.log(copyList);


