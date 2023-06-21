let profession = prompt("Escolha sua profissão:");
console.log("profissão: " + profession)
switch (profession){
    case 'programador':
        console.log("Sua camisa será verde");
        break;
    case 'professor':
        console.log("Sua camisa será amarela");
        break;
    case 'policial':
        console.log("Sua camisa será azul");
        break;
    default:
        console.log("Você fica sem camisa, seu bobão");
        break;
}