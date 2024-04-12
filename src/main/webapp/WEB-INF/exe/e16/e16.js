function calcular() {
    let ahora = new Date
    let ano = ahora.getFullYear()

    let nasc = Number(window.prompt('¿En qué año naciste?'))
    let edad = ano - nasc

    let salida = document.getElementById('salida')
    salida.innerHTML = `<p>Quien nació en ${nasc} cumplirá <strong>${edad}</strong> años en ${ano}.</p>`
}
