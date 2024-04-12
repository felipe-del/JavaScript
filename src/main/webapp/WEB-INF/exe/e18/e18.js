// Todas las variables declaradas aquí arriba, fuera de las funciones, se consideran GLOBALES y funcionan en cualquier otra función.
let res = document.querySelector('section#result')
let computadora = 0
let jugador = 0

function sortear() {
    let min = 1 // Las variables declaradas aquí dentro son LOCALES y solo funcionan dentro de la función donde se declararon
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computadora = min + Math.trunc(dif * aleatorio)
}

function jugar() {
    jugador = Number(window.prompt('¿Cuál es tu suposición?'))
    if (jugador < computadora) {
        res.innerHTML += `<p>Has dicho ${jugador}. ¡Mi número es <strong>MAYOR</strong>!</p>`
    } else if (jugador > computadora) {
        res.innerHTML += `<p>Has dicho ${jugador}. ¡Mi número es <strong>MENOR</strong>!</p>`
    } else if (jugador === computadora) {
        res.innerHTML += `<p>¡<strong>FELICIDADES!</strong> ¡Has acertado! Yo había sorteado el valor ${computadora}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}
