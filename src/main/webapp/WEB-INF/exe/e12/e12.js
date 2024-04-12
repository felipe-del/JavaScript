function verificarParImpar() {
    let numero = Number(window.prompt('Ingresa un número: '))
    let tipo
    if (numero % 2 === 0) {
        tipo = '<strong>PAR</strong>'
    } else {
        tipo = '<strong>IMPAR</strong>'
    }

    let resultado = document.querySelector('section#resultado')
    resultado.innerHTML = `<p>El número ${numero} que has ingresado es ${tipo}.</p>`
}
