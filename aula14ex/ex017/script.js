function tabuada() {
    //Captando o valor, em texto, do campo de número
    var num_txt = document.getElementById('txtnum')

    //Captando o select do campo da tabuada
    var tabuada = document.getElementById('tabuada')

    //if para validar se campo está vazio. Caso esteja, sistema dispara alerta
    if (num_txt.value == '') {
        window.alert('[ERRO] Preencha o campo')
        //Caso esteja tudo ok, sistema continua
    } else {
        //Convertendo valor do número em texto para número
        numero = Number(num_txt.value)

        //Criando contador da tabuada, para ser utilizado como multiplicador no while
        var contador_tabuada = 1

        //Deixando campo do select vazio, para cada vez que disparar a função, limpar e aí entrar os novos dados (caso deixar sem, sistema vai ir adicionando mais elementos abaixo da tabuada anterior)
        tabuada.innerHTML = ''

        //While para calcular e mostrar a tabuada
        while (contador_tabuada <= 10) {
            var item = document.createElement('option')
            item.text = `${numero} x ${contador_tabuada} = ${numero * contador_tabuada}`
            item.value = `tab${contador_tabuada}`
            tabuada.appendChild(item)
            contador_tabuada++
        }
    }
}