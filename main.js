const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if(elemento === null || elemento.localName != 'audio') {
    alert('Dont do it!')
  }
  if(elemento && elemento.localName === 'audio') {
    elemento.play();
  }
}

for (let contador = 0; contador < listaDeTeclas.length; contador++){
  const tecla = listaDeTeclas[contador]
  const efeito = tecla.classList[1];

  const idAudio = `#som_${efeito}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  }

  tecla.onkeydown = function (evento){
    if(evento.code === ('Enter' || 'Space')) {
      tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function (evento){
    if(evento.code === ('Enter' || 'Space')) {
      tecla.classList.remove('ativa');
    }
  }

}
