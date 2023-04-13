function calc(){
    let input = document.querySelector("#input")
    let idade = parseInt(input.value)
    let debugg = idade + 1
    for(i = 0; i < debugg; i++){
        if(i != idade){
            console.log('nao encontrado')
        }else if(i == idade){
            console.log('sua idade é: ', i)
        }
    }
}