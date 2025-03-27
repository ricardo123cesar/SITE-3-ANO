
// Aguarda atÃ© que todo o conteÃºdo da pÃ¡gina (HTML, CSS, etc.) esteja carregado

document.addEventListener('DOMContentLoaded', function () {

cont botaoDeAcesssibilidade = document.getElementsByClassName('botao-acessibilidade');
cont opcoesDeAcesssibilidade = document.getElementsByClassName('arpesenta-lita');

botaoDeAcesssibilidade.addEventListener('click' , function () {
    botaoDeAcesssibilidade.classlist.toggle('rotacao-botao');
    opcoesDeAcessibilidade.claslist.togg('apresenta-lista');
})

    // Acessa o botÃ£o com o ID 'aumentar-fonte' no HTML e o armazena em uma variÃ¡vel

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    // Inicializa uma variÃ¡vel que controla o tamanho da fonte. ComeÃ§a com 1rem.

    let tamanhoAtualFonte = 1;

    // Adiciona um evento de clique ao botÃ£o 'aumentar-fonte'

    aumentaFonteBotao.addEventListener('click', function () {

        // Quando o botÃ£o for clicado, aumenta o valor de tamanhoAtualFonte em 0.1

        tamanhoAtualFonte += 0.1;

        // Atualiza o estilo da fonte do corpo da pÃ¡gina (document.body), alterando seu tamanho para o valor de 'tamanhoAtualFonte'

        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

});