let resp = window.document.getElementById('salida')
// Recuerda que todas las variables declaradas aquí fuera tienen un alcance global. Consulta más sobre el alcance en tu material en PDF, en la lección 07.

function accion1() {
    resp.innerHTML += '<p>Has hecho clic en el primer botón</p>'
}

function accion2() {
    resp.innerHTML += '<p>Has hecho clic en el segundo botón</p>'
}

function accion3() {
    resp.innerHTML += '<p>Has hecho clic en el tercer botón</p>'
}

function accion4() {
    resp.innerHTML += '<p>Has hecho clic en el cuarto botón</p>'
}
