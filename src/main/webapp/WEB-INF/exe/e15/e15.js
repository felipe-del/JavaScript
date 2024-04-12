function info() {
    let meses = new Array('Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic')
    let semana = new Array ('Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb')
    let ahora = new Date
    let salida = document.getElementById('salida')
    let dia = ahora.getDate()
    let mes = ahora.getMonth() // Ene = 0 | Feb = 1 | Mar = 2 y así sucesivamente...
    let ano = ahora.getFullYear()
    let sem = ahora.getDay()  // Dom = 0 | Lun = 1 | Mar = 2 y así sucesivamente...
    let hora = ahora.getHours()
    let min = ahora.getMinutes()
    let seg = ahora.getSeconds()
    salida.innerHTML = `<p>Día: <mark>${dia}</mark></p>`
    salida.innerHTML += `<p>Mes: <mark>${meses[mes]}</mark></p>`
    salida.innerHTML += `<p>Año: <mark>${ano}</mark></p>`
    salida.innerHTML += `<p>Día de la semana: <mark>${semana[sem]}</mark></p>`
    salida.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
    salida.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`
    salida.innerHTML += `<p>Segundos: <mark>${seg}</mark></p>`
}
