let votos_joao = 0
var votos_jose = 0

var joao = document.querySelector('#botao01')
joao.addEventListener('click', voto_joao)

var jose = document.querySelector('#botao02')
jose.addEventListener('click', voto_jose)

var resultado = document.querySelector('#resultado')
resultado.addEventListener('click', encerrar)

function voto_joao() {
    alert("Digite o número do seu titulo de eleitor: ");
    var titulo = Number(prompt());
    if (titulo >= 0) {
        votos_joao++
        alert('Parabéns, seu voto foi computado!')
    } else {
        alert('Título inválido')
    }
}

function voto_jose() {
    alert("Digite o número do seu titulo de eleitor: ");
    var titulo = Number(prompt());
    if (titulo >= 0) {
        votos_jose++
        alert('Parabéns, seu voto foi computado!')
    } else {
        alert('Título inválido')
    }
}

function encerrar() {
    alert('Votação encerrada!')
    alert(`O candidato João recebeu ${votos_joao}\nO candidato José recebeu ${votos_jose}`)
    if (votos_joao > votos_jose) {
        window.location.href = "/joao.html"
    } else if (votos_joao < votos_jose) {
        window.location.href = "/jose.html"
    } else {
        alert("Empatou")
    }
}