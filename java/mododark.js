const lua = document.querySelector('.lua');
const sol = document.querySelector('.sol');
const botao = document.querySelector('.box-darkmode');
const menu = document.querySelector('menu');
const boxNomeh1 = document.querySelector('.box-nome h1');
const boxNomea = document.querySelector('.box-nome a');

function modoDark() {
    const container = document.querySelector('.container');
    container.classList.toggle('body-darkmode');
    menu.classList.toggle('body-darkmode');
    menu.classList.toggle('sombra-branca');
}

botao.addEventListener('click', function() {
    const bola = document.querySelector('.bola-darkmode');
    const leftAtual = bola.style.left;
    if (leftAtual === '28px') {
      bola.style.left = '4px';
      bola.style.background =  'white';
      sol.style.display = 'block';
      lua.style.display = 'none';
      boxNomeh1.style.color = 'black';
      boxNomea.style.color = 'black';
    } else {
      bola.style.left = '28px';
      bola.style.background =  'black';
      sol.style.display = 'none';
      lua.style.display = 'block';
      boxNomeh1.style.color = 'white';
      boxNomea.style.color = 'white';
    }
  });