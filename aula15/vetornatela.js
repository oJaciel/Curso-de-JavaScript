let valores = [8,1,7,4,2,9]

for (var posicao = 0; posicao < valores.length; posicao ++) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}

console.log('------------------------------')

for (let pos in valores) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}