function calc(){

    let input = document.querySelector("#input")
    let numero = parseInt(input.value)
    let serie

    switch(numero){
        case 1:
            serie = "Gosto de anime Naruto"
            break;
        case 2:
            serie = "One Punch é muito bom"
            break;
        case 3:
            serie = "A série Supernatural é muito boa"
            break;
        case 4:
            serie = "Vikings com Ragnar era o melhor"
            break;
        default:
            serie = "nenhum na lista com esse numero"
    }

    console.log(serie)
    
}





