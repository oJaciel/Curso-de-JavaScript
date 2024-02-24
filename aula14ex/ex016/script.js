function contar() {

    var inicio_txt = document.getElementById('inicio')

    var fim_txt = document.getElementById('fim')

    var passo_txt = document.getElementById('passo')

    var resultado = document.getElementById('resultado')

    if (inicio_txt.value.lenght == 0 || fim_txt.value.lenght == 0 || passo_txt.value.lenght == 0) {
        resultado.innerHTML = 'Impossível contar!'
    } else {
        resultado.innerHTML = 'Contando <br>'

        var inicio = Number(inicio_txt.value)
        var fim = Number(fim_txt.value)
        var passo = Number(passo_txt.value)

        if (passo <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            passo = 1
        }

        if (inicio < fim) {


            for (var c = inicio; c <= fim; c += passo) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }

            
        } else {
            for (let c = inicio; c >= fim; c -= passo) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }
        resultado.innerHTML += '\u{1F3C1}'
    }
}