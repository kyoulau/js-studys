/* calcule o preço do imovel 
- m2 = 3.000
1 quarto, m2 é 1x
2 quartos, m2 é 1.2x
3 quartos, m2 é 1.5x
*/
let metragem = 123;
let quartos =3
function calcularImovel (metragem, quartos) {
    let preco = 0;
    if (quartos===1){
        preco = metragem*3000;
        return preco;
    } else if (quartos===2){
        preco = metragem*(3000*1,2);
        return preco;
    } else if (quartos===2){
        preco = metragem*(3000*1.5);
        return preco;
    }
}
let preco = calcularImovel (metragem, quartos);
console.log(`a casa custa ${preco}`)