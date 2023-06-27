/* Calcule a % entre 2 numeros.
ex: 25% de 40 é 10
formula de porcentagem: (y/x) *100
uso da função
*/

/* let numero1 = 40;
let numero2 = 10;
function calculoPorcentagem (numero1,numero2){
    (numero2/numero1) *100
}
let porcentagem = calculoPorcentagem (numero1,numero2);
console.log(`porcentagem de ${numero1} é ${numero2}`); */

let x =40;
let y =10;
function calcPct(x,y){
    let pct = (y/x) *100;
    return pct;
}
let pct = calcPct(x,y);
console.log(`${pct} de ${x} é ${y}`);