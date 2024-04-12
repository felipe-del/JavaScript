function info() {
    let ahora = new Date();
    let salida = document.getElementById('salida');
    salida.innerHTML = `<p>Lo que recibí del sistema fue <mark>${ahora}</mark></p>`;
}
