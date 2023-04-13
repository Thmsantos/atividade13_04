function calc(){
    let input = document.querySelector("#input")
    let idade = parseInt(input.value)
    let x = 0
    while (x < idade){
        console.log('dado não encontrado')
        x = x + 1
    }
    if (x == idade){
        console.log("sua idade é: ", x)
    }
}