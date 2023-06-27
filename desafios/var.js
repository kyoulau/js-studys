idade = 12;

function VerificadoraDaIdade (idade) {
    if (idade >= 18){
        return true;
    } else {
        return false;
    }
}
let verificacao = VerificadoraDaIdade (idade);
if (verificacao){
    console.log("é de maior")
} else {
    console.log("é de menor")
}