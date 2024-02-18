function verificar() {
    //Captando e processando o ano digitado pelo usuário
    var txt_ano_usuario = document.getElementById('txtano')
    var ano_usuario = Number(txt_ano_usuario.value)

    //Captando e processando o ano atual
    var data = new Date()
    var ano_atual = data.getFullYear()

    //Calculando a idade, levando em conta o ano atual e ano digitado pelo usuário
    var idade = ano_atual - ano_usuario

    //Captando o gênero do usuário
    var genero_usuario = document.getElementsByName('sexo')
    var genero = ''
    if (genero_usuario[0].checked) {
        genero = 'Homem'
    } else if (genero_usuario[1].checked) {
        genero = 'Mulher'
    }

    //Captando a DIV de resultado
    var resultado = document.getElementById('resultado')

    //Captando arquivo IMG
    var img = document.getElementById('foto')
    


    //Caso o usuário não digite nada no ano, ou o ano digitado pelo usuário seja maior que o ano atual, sistema retorna erro
    if (ano_usuario.lenght == 0 || ano_usuario > ano_atual) {
        window.alert('ERRO! Preencha os dados e tente novamente')
    } else {
        //Caso esteja tudo certo, sistema retorna gênero e idade do usuário, e depois mostra a imagem
        resultado.innerHTML = (`Detectamos ${genero} com ${idade} anos`)

        //Analisando e mostrando a imagem conforme idade - Homem
        if (genero == 'Homem') {
            if (idade >= 0 && idade < 10) {
                //Bebe
                img.src = 'foto-bebe-m.png'
            } else if (idade < 21) {
                //Jovem
                img.src = 'foto-jovem-m.png'
            } else if (idade < 50) {
                //Adulto
                img.src = 'foto-adulto-m.png'
            } else {
                //Idoso
                img.src = 'foto-idoso-m.png'
            }

        //Analisando e mostrando a imagem conforme idade - Mulher
        } else if (genero == 'Mulher') {
            if (idade >= 0 && idade < 10) {
                //Bebe
                img.src = 'foto-bebe-f.png'
            } else if (idade < 21) {
                //Jovem
                img.src = 'foto-jovem-f.png'
            } else if (idade < 50) {
                //Adulto
                img.src = 'foto-adulto-f.png'
            } else {
                //Idoso
                img.src = 'foto-idoso-f.png'
            }
        }
    }

}