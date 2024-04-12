let contador = 0
let res = document.querySelector('section#result')
// Las variables declaradas aquí fuera se consideran GLOBALES y funcionan en todo el programa

function contar() {
    contador ++ // Es lo mismo que contador = contador + 1
    res.innerHTML = `<p>El contador tiene <mark>${contador}</mark> clics.</p>`
}

function reiniciar() {
    contador = 0
    res.innerHTML = null
}
