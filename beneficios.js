document.addEventListener("DOMContentLoaded", function () {

    const slide = document.getElementById("carrosselSlide");
    const imagens = slide.querySelectorAll("img");
    const botaoProximo = document.getElementById("botaoProximo");
    const botaoAnterior = document.getElementById("botaoAnterior");

    let indiceAtual = 0;
    const totalImagens = imagens.length;

    function mostrarSlide(indice) {

        if (indice >= totalImagens) {
            indiceAtual = 0;
        } else if (indice < 0) {
            indiceAtual = totalImagens - 1;
        } else {
            indiceAtual = indice;
        }

        const deslocamento = -indiceAtual * 100;
        slide.style.transform = `translateX(${deslocamento}%)`;
    }

    botaoProximo.addEventListener("click", function () {
        mostrarSlide(indiceAtual + 1);
    });

    botaoAnterior.addEventListener("click", function () {
        mostrarSlide(indiceAtual - 1);
    });

    // automático
    setInterval(function () {
        mostrarSlide(indiceAtual + 1);
    }, 4000);

});