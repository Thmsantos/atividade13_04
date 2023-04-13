function calc() {

    var input = document.querySelector("#input")
    var idade = input.value;
    if (idade < 0){
        console.log('idade inválida')
    }
    else if(idade < 18){
        console.log('adolescente')
    }
    else if(idade > 18 && idade <= 65){
        console.log('jovem')
    }
    else if(idade > 65){
        console.log("vc é idoso")
    }
  }

