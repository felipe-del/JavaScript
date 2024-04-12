function contar() {
    let salida = document.getElementById('saida')

    salida.innerHTML += `<h2>Contando de 1 a 10, marcando los pares</h2>`

    let cont = 1
    while (cont <= 10) {
        if (cont % 2 == 0) {
            salida.innerHTML += `<mark><strong> ${cont} </strong></mark>&#x1F449;`
        } else {
            salida.innerHTML += ` ${cont} &#x1F449;`
        }
        cont ++ // Equivale a cont = cont + 1
    }
    salida.innerHTML += ` &#x1F3C1;`
}
