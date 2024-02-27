//Captando valores inicias, dos elementos do HTML que contém o número, a lista e o resultado
var num = document.getElementById('num')

var lista = document.getElementById('lista')

var resultado = document.getElementById('resultado')
// -------------------------------------------------------------

//Lista que irá conter os valores adicionados
var valores = []

//Função para verificar se o número digitado é entre 1 e 100, conforme ordem da atividade
function isNumero(num) {
    if(Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

//Função para verificar se número digitado já está na lista. Repare que a lista utiliza dois parâmetros, um para o número e outro para a lista, que serão utilizados posteriormente no chamamento da função
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
}

//Função para adicionar valor digitado na lista
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { //Caso o número digitado retorne true na função isNumero e false na função inLista, o código prossegue
        valores.push(Number(num.value)) //O valor do número digitado é adicionado na lista
        var item = document.createElement('option') //Cria-se um elemento option para ser mostrado na tela
        item.text = `Valor ${num.value} adicionado` //É mostrado no option o valor adicionado
        lista.appendChild(item) //Option vira child do select do HTML
        resultado.innerHTML = '' //Sempre que um novo valor é adicionado, o resultado é limpo
    } else {
        window.alert('Valor inválido ou já encontrado na lista') //Caso o número não esteja entre 1 e 100, e já esteja na lista, retorna erro
    }
    num.value = '' //Sempre que adicionado um novo valor, o campo do input number é limpo, para já ser colocado outro valor
    num.focus()
}


//Função para analisar e mostrar os resultados
function finalizar() {
    if (valores.length == 0) { //Caso a lista esteja vazia, sistema trava
        window.alert('Adicione valores antes de finalizar')
    } else { //Caso haja valores na lista, prossegue
        var total = valores.length //O total é resultado do tamanho da lista
        var maior = valores[0] //O maior número é analisado no laço for abaixo, esse laço for verifica, dentre todos os números da lista, qual o maior, e atribui a variável seu valor
        var menor = valores[0] //O menor número é analisado no laço for abaixo, esse laço for verifica, dentre todos os números da lista, qual o menor, e atribui a variável seu valor
        var soma = 0 //A soma é feita no laço for abaixo, sempre que passa pela lista, o valor é adicionado a variável de soma
        var media = 0 // A média é calculada abaixo do laço for

        //Laço for, para captar maior e menor, e realizar soma
        for(var pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            
            if (valores[pos] < menor) 
                menor = valores[pos]
            
        }

        media = soma / total //Calculo da média, levando em conta o valor da soma, e o total de elementos da lista

        //MOSTRANDO RESULTADOS NO HTML
        resultado.innerHTML = '' //Sempre que executada a função, div do resultado é limpa

        //Abaixo apenas mostrando os resultados de cada atributo analisado
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados </p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        resultado.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}
