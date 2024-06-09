// Crie variáveis
// O documento HTML, onde serão manipulados os elementos;
// O elemento HTML em que irá aparecer o temporizador;
// O elemento HTML no qual as imagens de cada contexto irão trocar de posição;
// O elemento HTML onde as frases de cada contexto irão trocar de posição.

const html = document.querySelector('html')
const timer = document.querySelector('#timer')
const text = document.getElementsByClassName('app__title')
const image = document.getElementsByClassName('app__image')

// Botão que servirá para iniciar e pausar o temporizador;
// Botão para escolher o temporizador de “Foco”;
// Botão para escolher o temporizador de “Descanso curto”;
// Botão para escolher o temporizador de “Descanso longo”.

const start = document.querySelector('.app__card-primary-button')
const focoBtt = document.getElementsByClassName('app__card-button--foco')
const curtoBtt = document.getElementsByClassName('app__card-button--curto')
const longoBtt = document.getElementsByClassName('app__card-button--longo')

// Temporizador de foco com valor 1500;
// Temporizador de descanso curto com valor 300;
// Temporizador de descanso longo com valor 900.

const focoTime = 1500
const curtoTime = 300
const longoTime = 900