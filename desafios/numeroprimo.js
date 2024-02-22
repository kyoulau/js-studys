/* Escreva uma função que receba um número como parâmetro e verifique se é um número primo. Retorne true se for primo, caso contrário, retorne false. */
function verificadoraDoNumero(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
//console.log(verificadoraDoNumero(7)); -> false
//console.log(verificadoraDoNumero(6)); -> true