const numero = Number(prompt("Digite um numero: "));
const numeroTitulo = document.getElementById("numero_escolhido");
//document means that you can manipulate the DOM
const texto = document.getElementById("texto");
numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu numero é ${numero}</p>`;