const titulo = document.getElementById("texto")

function typewriter(elemento) {
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra
            if (letra === 'Analista_de_Performance' || letra === 'Ligga_Telecom') {
                elemento.innerHTML += '<br>' // Adiciona uma quebra de linha após esses elementos
            }
        }, 70 * i)
    })
}

typewriter(titulo)
