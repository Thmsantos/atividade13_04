function calc(){
    let input_a = document.querySelector("#a");
    let input_b = document.querySelector("#b");

    let a = parseInt(input_a.value);
    let b = parseInt(input_b.value);

    class OperacoesMatematicas {
        soma(a, b) {
          return a + b;
        }
      
        subtracao(a, b) {
          return a - b;
        }
      
        divisao(a, b) {
          if (b === 0) {
            return "Não é possível dividir por zero";
          }
          return a / b;
        }
      
        multiplicacao(a, b) {
          return a * b;
        }
      }
    
}