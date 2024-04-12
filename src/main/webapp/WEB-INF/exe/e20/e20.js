function estacion() { // Sí, se puede usar acentos
    let mes = prompt('Ingrese el mes por extenso (ej: Septiembre)')
    let salida = document.querySelector('section#saida')
    let estacion
    switch (mes.toUpperCase()) { // El método toUpperCase() convierte todas las letras de una cadena a mayúsculas
        case 'ENERO': case 'FEBRERO': case 'MARZO': // Podemos probar múltiples casos en una misma línea de esta manera
            estacion = 'INVIERNO'
            break // ¡Nunca olvides el break!
        case 'ABRIL': case 'MAYO': case 'JUNIO':
            estacion = 'PRIMAVERA'
            break
        case 'JULIO': case 'AGOSTO': case 'SEPTIEMBRE':
            estacion = 'VERANO'
            break
        case 'OCTUBRE': case 'NOVIEMBRE': case 'DICIEMBRE':
            estacion = 'OTOÑO'
            break
        default:
            estacion = 'INDEFINIDA'
            break
    }
    salida.innerHTML = `<p>En el mes de <mark>${mes}</mark>, estamos en la estación <mark><strong>${estacion}</strong></mark>.</p>`
}

// Sugerencia de mejora: reescribe este programa para que acepte tanto el mes por extenso como el número del mes.
