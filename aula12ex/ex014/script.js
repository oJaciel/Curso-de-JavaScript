function carregar() {
var msg = document.getElementById('msg')

var img = document.getElementById('imagem')

var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora <12) {
    //Bom dia
    img.src = 'foto_manha.png'
    document.body.style.background = '#FEFEFF'

} else if (hora >= 12 && hora <= 18) {
    //Boa tarde
    img.src = 'foto_tarde.png'
    document.body.style.background = '#FDCCA1'

} else {
    //Boa noite
    img.src = 'foto_noite.png'
    document.body.style.background = '#061731'

}

}