//Sistema que faz relação da idade do usuário com a obrigatoriedade de voto (adaptado para o Brasil)

//Menor de 16 anos -> Não vota
//Entre 16 - 18 anos ou maior que 65 anos -> voto opcional
//Entre 18 e 65 anos -> voto obrigatório


var idade = 65

console.log(`Voce tem ${idade} anos`)

if (idade < 16) {
    console.log(`Não vota`)
} else if (idade < 18 || idade > 65) {
        console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}