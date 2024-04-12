function calcular() {
    let n1 = Number(prompt('Primer valor:'))
    let n2 = Number(prompt('Segundo valor:'))
    let op = Number(prompt(`Valores informados: ${n1} y ${n2}. \n¿Qué vamos hacer? \n[1] Sumar \n[2] Restar \n[3] Multiplicar \n[4] Dividir`))

    let salida = document.getElementById('saida')
    salida.innerHTML = `<h2>Calculando...</h2>`
    switch (op) {
        case 1:
            salida.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
            break
        case 2:
            salida.innerHTML += `<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
            break
        case 3:
            salida.innerHTML += `<p>${n1} x ${n2} = <strong>${n1*n2}</strong></p>`
            break
        case 4:
            salida.innerHTML += `<p>${n1} / ${n2} = <strong>${(n1/n2).toLocaleString('pt-BR')}</strong></p>`
            break
        default:
            salida.innerHTML += `<p>¡OPCIÓN INVÁLIDA! Usted ingresó ${n1} y ${n2}, pero no sé qué hacer con ellos.</p>`
            break
    }
}
