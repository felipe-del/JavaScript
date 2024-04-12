function generar() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random() // Esta función genera un valor Real aleatorio entre 0 y 1
    let num = min + Math.trunc(dif * aleatorio)

    let res = document.querySelector('section#resultado')
    res.innerHTML += `<p>¡Acabo de pensar en el número <mark>${num}</mark>!</p>`
}

function limpiar() { // Esta es la funcionalidad del otro botón, para limpiar todo
    let res = document.querySelector('section#resultado')
    res.innerHTML = null // Va a vaciar toda la sección
}
