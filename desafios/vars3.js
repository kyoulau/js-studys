/* função que valide usuario e senha */
//usuario correto:kyoulau
//senha correta:abrobrinha123

let usuario = "macunaima"
let senha = "abrobrinha"
//função validação
function validar (usuario, senha){
    if (usuario=="kyoulau" && senha == "abrobrinha"){
        return true;
    } else {
        return false;
    }
}
//função acesso

let validacao = validar (usuario, senha);
if (validacao) {
    console.log("acesso positivo!");
} else {
    console.log("acesso negado.")
} 
