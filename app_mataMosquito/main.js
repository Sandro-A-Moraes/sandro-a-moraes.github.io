let altura = 0
let largura = 0
let vidas = 1
let tempo = 60
let criarMosquitosTempo = 1500
let mosquitosMortos = 0

let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'facil'){
    criarMosquitosTempo = 1500
} else if (nivel === 'normal'){
    criarMosquitosTempo = 1000
} else if(nivel === 'dificil'){
    criarMosquitosTempo = 750
}

function ajustarTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustarTamanhoPalcoJogo()
let cronometro = setInterval(function(){
    tempo--

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criarMosquitos)
        window.location.href = 'vitoria.html?' + mosquitosMortos
    } else{
        document.getElementById('valorTempo').innerHTML = tempo
    }
}, 1000)

function calcularPosicaoAleatoria(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3){
            window.location.href = 'gameOver.html'
        } else{
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }


    let posicaoX = Math.floor((Math.random() * largura) - 90)
    let posicaoY = Math.floor(Math.random() * altura - 90)

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio()
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
        mosquitosMortos++
        document.getElementById('valorMosquitosMortos').innerHTML = mosquitosMortos

    }

    mosquito.classList.add(ladoAleatorio())
    document.body.appendChild(mosquito)
}
function tamanhoAleatorio(){
    let classeMosquito = Math.floor(Math.random()*3)

    switch(classeMosquito){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    let ladoMosquito = Math.floor(Math.random()*2)

    switch(ladoMosquito){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
        
    }
}



