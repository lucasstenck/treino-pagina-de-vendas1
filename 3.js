document.querySelectorAll('.content__section__13__accordion__botao__1').forEach((botao) => {
  botao.addEventListener('click', () => {
    const resposta = botao.nextElementSibling;

    document.querySelectorAll('.content__section__13__accordion__resposta').forEach((el) => {
      if (el !== resposta) {
        el.classList.remove('aberta');
        el.previousElementSibling.classList.remove('ativo');
      }
    });

    const estaAberto = resposta.classList.contains('aberta');
    if (estaAberto) {
      resposta.classList.remove('aberta');
      botao.classList.remove('ativo');
    } else {
      resposta.classList.add('aberta');
      botao.classList.add('ativo');
    }
  });
});


