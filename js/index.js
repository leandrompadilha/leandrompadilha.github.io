const titulo = document.getElementById("texto")

function typewriter(elemento) {
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 70 * i)
    })
}

typewriter(titulo)