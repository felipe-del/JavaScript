function calcularMedia() {
    let nombre = window.prompt('¿Cuál es el nombre del estudiante?')
    let nota1 = Number(window.prompt(`¿Cuál fue la primera nota de ${nombre}?`))
    let nota2 = Number(window.prompt(`Además de ${nota1}, ¿cuál fue la otra nota de ${nombre}?`))
    let media = (nota1 + nota2) / 2

    let mensaje // crea una variable y la deja vacía
    if (media >= 6) { // Si la media es 6.0 o más...
        mensaje = '¡Felicidades!'
    } else { // de lo contrario...
        mensaje = '¡Sigue estudiando!'
    }
    // El if es una estructura que crea una CONDICIÓN, que ejecuta un bloque de comandos u otro, dependiendo del resultado de una prueba lógica.

    let resultado = document.getElementById('situacion')
    resultado.innerHTML = `<p>Calculando la media final de <mark>${nombre}</mark>.</p>`
    resultado.innerHTML += `<p>Las notas obtenidas fueron <mark>${nota1} y ${nota2}</mark>.</p>`
    resultado.innerHTML += `<p>La media final será <mark>${media}</mark>.</p>`
    resultado.innerHTML += `<p>El mensaje que tenemos es: <strong style='color:red;'>${mensaje}</strong></p>` // Nota que incluso usé un poco de CSS para hacer el mensaje rojo ;)
}
