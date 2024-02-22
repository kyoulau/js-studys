var varA = "A";//b
var varB = "B";//c
var varC = "C";//a
console.log(varA,varB,varC);

[varA,varB,varC] = [varB,varC,varA]
console.log(varA,varB,varC);
//criacao de uma lista

const romanToInt = (s) => {
    const legend = "IVXLCDM";
    const l=[1,5,10,50,100,500,1000];
    let sum=0;
    while(s){
       if(!!s[1] && legend.indexOf(s[0]) < legend.indexOf(s[1])){
          sum += (l[legend.indexOf(s[1])] - l[legend.indexOf(s[0])]);
          s = s.substring(2, s.length);
       } else {
          sum += l[legend.indexOf(s[0])];
          s = s.substring(1, s.length);
       }
    }
    return sum;
 };
 console.log(romanToInt('CLXXVIII'));
 //O loop while percorre a string s enquanto ela não estiver vazia.
//Dentro do loop, há uma condição if que verifica se o caractere atual é menor que o próximo, usando o método indexOf para obter a posição dos símbolos na string legend. Por exemplo, se s for “IX”, o indexOf de “I” é 0 e o indexOf de “X” é 2, então a condição é verdadeira.
//Se a condição for verdadeira, significa que o valor do número romano é dado pela subtração do valor do caractere atual pelo valor do próximo. Por exemplo, “IX” vale 10 - 1 = 9. Então, o código soma esse valor à variável sum e remove os dois caracteres da string s usando o método substring.
//Se a condição for falsa, significa que o valor do número romano é dado pela soma dos valores dos caracteres. Por exemplo, “VI” vale 5 + 1 = 6. Então, o código soma o valor do caractere atual à variável sum e remove apenas esse caractere da string s.
//Ao final do loop, a variável sum contém o valor decimal equivalente ao número romano s.
//A função retorna a variável sum.