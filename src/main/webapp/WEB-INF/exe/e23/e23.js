function contar() {
    let salida = document.getElementById('saida')

    salida.innerHTML += `<h2>Números pares de 1 hasta 10</h2>`
    let cont = 2
    while (cont <= 10) {
        salida.innerHTML += ` ${cont} &#x1F449;`
        cont += 2 // Equivalente a cont = cont + 2
    }
    salida.innerHTML += ` &#x1F3C1;`
}
