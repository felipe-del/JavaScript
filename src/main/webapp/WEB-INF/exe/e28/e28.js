function fatorial() {
    let saida = document.getElementById('saida')
    let n = Number(document.getElementById('fnum').value)

    saida.innerHTML += `<h2>Calculando ${n}!</h2>`
    let c = n
    let fat = 1
    while (c > 1) {
        saida.innerHTML += `${c} x `
        fat *= c // Corresponde a fat = fat * c
        c --
    }
    saida.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
    // Utilicé toLocaleString() en la línea anterior solo para que aparezcan los separadores de miles/millones, etc...
}
