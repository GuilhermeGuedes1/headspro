function mostrarMenu(){
    let menu = document.querySelector('.menu')
    let overlay = document.querySelector('.overlay')

    menu.classList.toggle('active')
    overlay.classList.toggle('escondido')
}

function removerOverlay(){
    let menu = document.querySelector('.menu')
    let overlay = document.querySelector('.overlay')

    menu.classList.remove('active')
    overlay.classList.add('escondido')


}