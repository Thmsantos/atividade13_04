function test(){
    var dados = [
        {id: 1, login: 'will', senha: 1313},
        {id: 2, login: 'black', senha: 1111},
        {id: 3, login: 'sandra', senha: 2020}
    ]

    console.log(dados[0].login , dados[0].senha);
    console.log(dados[1].login , dados[1].senha);
    console.log(dados[2].login , dados[2].senha);

    window.alert(dados[0].login + ':' + dados[0].senha)
    window.alert(dados[1].login + ':' + dados[1].senha)
    window.alert(dados[2].login + ':' + dados[2].senha)

}
