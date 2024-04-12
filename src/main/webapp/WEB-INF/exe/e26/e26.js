function contagem() {
    let saida = document.getElementById('saida')
    let numInicio = Number(document.getElementById('fn1').value)
    let numFinal = Number(document.getElementById('fn2').value)

    saida.innerHTML = `<h2>Contando desde ${numInicio} hasta ${numFinal}</h2>`

    if (numInicio < numFinal) {
        for (let i = numInicio; i <= numFinal; i++) {
            saida.innerHTML += ` ${i} &#x1F449;`
        }
    } else {
        for (let i = numInicio; i >= numFinal; i--) {
            saida.innerHTML += ` ${i} &#x1F449;`
        }
    }

    saida.innerHTML += ` &#x1F3C1;`
}
