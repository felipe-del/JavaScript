function tabuada() {
    let salida = document.getElementById('saida')
    let n = Number(document.getElementById('fnum').value)

    salida.innerHTML = `<h2>Tabla de multiplicar de ${n}</h2>`
    let c = 1
    while (c <= 10) {
        salida.innerHTML += `${n} x ${c} = <strong>${n * c}</strong><br>`
        c ++
    }
}
