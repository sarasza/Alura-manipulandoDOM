const html = document.querySelector('html')
const focoBtt = document.querySelector('.app__card-button--foco')
const curtoBtt = document.querySelector('.app__card-button--curto')
const longoBtt = document.querySelector('.app__card-button--longo')

focoBtt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
})

curtoBtt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})

longoBtt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})