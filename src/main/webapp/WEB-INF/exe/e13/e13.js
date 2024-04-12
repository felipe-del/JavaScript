function mayor() {
    let n1 = Number(window.prompt('Ingrese un número: '))
    let n2 = Number(window.prompt('Ingrese otro número: '))

    let res = document.querySelector('section#saida')
    if (n1 > n2) {
        res.innerHTML = `<p>Analizando los valores <mark>${n1}</mark> y <mark>${n2}</mark>, el número mayor es <strong>${n1}</strong></p>`
    } else if (n1 < n2) {
        res.innerHTML = `<p>Analizando los valores <mark>${n1}</mark> y <mark>${n2}</mark>, el número mayor es <strong>${n2}</strong></p>`
    } else {
        res.innerHTML = `<p>Analizando los valores <mark>${n1}</mark> y <mark>${n2}</mark>, ambos son <strong>IGUALES</strong></p>`
    }
}
