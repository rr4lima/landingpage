const cards = document.querySelectorAll("#sobre .card");
const imagem = document.getElementById("imgDinamica");
const cima = document.getElementById("cima");
const scrollsuave = document.querySelector(".scroll-suave");

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".contato-form");



        alert("Mensagem enviada com sucesso!");

   
  

});
      
document.addEventListener("DOMContentLoaded", () => {

  const cima = document.getElementById("cima");

  cima.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  cima.addEventListener("mouseover", () => {
    cima.style.opacity = "0.8";
  });

  cima.addEventListener("mouseout", () => {
    cima.style.opacity = "1";
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      cima.style.display = "block";
    } else {
      cima.style.display = "none";
    }
  });

});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card1');
  const btnPrev = document.getElementById('anterior');
  const btnNext = document.getElementById('proximo');

  let currentIndex = 0;
  const tempo = 6000; 
  const duracao = 1200; 

  cards.forEach(card => {
    card.style.display = 'none';
    card.style.animation = '';
  });

  cards[0].style.display = 'flex';

  function showCard(newIndex, direction) {
    if (newIndex === currentIndex) return;

    const atual = cards[currentIndex];
    const proximo = cards[newIndex];

    if (direction === 'next') {
      atual.style.animation = `sairParaEsquerda ${duracao}ms forwards`;
      proximo.style.animation = `entrarDaDireita ${duracao}ms forwards`;
    } else {
      atual.style.animation = `sairParaDireita ${duracao}ms forwards`;
      proximo.style.animation = `entrarDaEsquerda ${duracao}ms forwards`;
    }

    proximo.style.display = 'flex';

    setTimeout(() => {
      atual.style.display = 'none';
      atual.style.animation = '';
      proximo.style.animation = '';
      currentIndex = newIndex;
    }, duracao);
  }

  function proximoAuto() {
    let next = currentIndex + 1;
    if (next >= cards.length) next = 0;
    showCard(next, 'next');
  }

  let autoplay = setInterval(proximoAuto, tempo);

  btnNext.addEventListener('click', () => {
    clearInterval(autoplay);
    proximoAuto();
    autoplay = setInterval(proximoAuto, tempo);
  });

  btnPrev.addEventListener('click', () => {
    clearInterval(autoplay);
    let prev = currentIndex - 1;
    if (prev < 0) prev = cards.length - 1;
    showCard(prev, 'prev');
    autoplay = setInterval(proximoAuto, tempo);
  });
});

