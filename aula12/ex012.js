//Sistema que dá bom dia, boa tarde ou boa noite dada a hora atual

//Sistema utiliza a função date e gethours() para captar a hora atual do sistema

var agora = new Date()

var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas`)

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite!')
}