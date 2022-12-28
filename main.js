let altura = 0
let largura = 0
let vidas = 1
let tempo = 15

let tempoDarth = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'facil') {
    tempoDarth = 1500
} else if( nivel === 'medio') {
    tempoDarth = 1000
} else if( nivel === 'dificil'){
    tempoDarth = 750
}




function ajusteAltura() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajusteAltura()


let cronometro = setInterval( function() {
    tempo-=1
    if(tempo < 0 ) {
        clearInterval(cronometro)
        clearInterval(criaDarth )
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)


function posicaoDartAleatorio() {

    //anula mais de um darth (caso exista)
    if (document.getElementById('darth')) {

        document.getElementById('darth').remove()

        if (vidas > 3) {
            window.location.href = 'game-over.html'

        } else {

            document.getElementById('p' + vidas).src = "./img/coracao_vazio.png"

            vidas++
        }

    }

    let posicaoX = Math.floor(Math.random() * largura) - 100
    let posicaoy = Math.floor(Math.random() * altura) - 200

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoy = posicaoy < 0 ? 0 : posicaoy

    console.log(posicaoX, posicaoy)



    let darth = document.createElement('img')
    darth.src = "img/darth-removebg-preview.png"
    darth.className = scaleAleatorio() + ' ' + faceAleatorio()
    darth.style.right = posicaoX + "px"
    darth.style.top = posicaoy + "px"
    darth.style.position = "absolute"
    darth.id = 'darth'
    darth.onclick = function () {
        this.remove()
    }




    document.body.appendChild(darth)

}



function scaleAleatorio() {
    let classe = Math.floor(Math.random() * 3)
    switch (classe) {

        case 0:
            return "darth1"

        case 1:
            return "darth2"

        case 2:
            return " darth3"
    }
}


function faceAleatorio() {
    let classe = Math.floor(Math.random() * 2)
    switch (classe) {

        case 0:
            return "face1"

        case 1:
            return "face2"


    }
}