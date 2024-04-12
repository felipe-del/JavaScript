function contar() {
    let salida = document.getElementById('saida')

    salida.innerHTML += `<h2>Cuenta Regresiva de 10 a 1</h2>`
    let cont = 10
    while (cont >= 1) {
        salida.innerHTML += ` ${cont} &#x1F449;`
        cont -- // Corresponde a cont = cont - 1
    }
    salida.innerHTML += ` &#x1F3C1;`
}
