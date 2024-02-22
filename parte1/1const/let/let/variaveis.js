function somarMult(x){
    function Multiplicacoes(a,b){
       return a * b;
    }
    return Multiplicacoes(a) + Multiplicacoes(b);
  }
  
  console.log(somarMult(2, 3));