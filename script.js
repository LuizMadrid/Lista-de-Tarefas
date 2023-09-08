document.addEventListener("DOMContentLoaded", () => {
  const novoItemInput = document.getElementById("input-novo-item");
  const btnAdicionarItem = document.getElementsByClassName("btn-adicionar")[0];
  const listaItens = document.getElementsByTagName("ul")[0];
  const botoesApagar = document.getElementsByClassName("btn-apagar");
  const botoesEditar = document.getElementsByClassName("btn-editar");
  const botoesSalvar = document.getElementsByClassName("btn-salvar");

  /* Inicio do botão de adicionar elemento ficar inutilizado quando o mesmo não tiver caracteres */

  novoItemInput.addEventListener("input", () => {
    if (novoItemInput.value != "") {
      btnAdicionarItem.classList.remove("desabilitado");
      btnAdicionarItem.disabled = false;
    } else {
      btnAdicionarItem.classList.add("desabilitado");
      btnAdicionarItem.disabled = true;
    }
  });

  /* Fim do botão de adicionar elemento ficar inutilizado quando o mesmo não tiver caracteres */

  /* ===================!!!!=================== */

  /* Começo da sessão de adicionar elementos na lista com [createElement] */

  btnAdicionarItem.addEventListener("click", (e) => {
    e.preventDefault();

    adicionarItem(novoItemInput.value);
  });

  function adicionarItem(texto) {
    const item = document.createElement("li");
    const msg = document.createElement("input");
    msg.disabled = true;
    msg.value = texto;

    /* Começo da criação dos botões EDITAR e APAGAR */

    const containerBotoes = document.createElement("div");
    const botaoEditar = document.createElement("button");
    const botaoApagar = document.createElement("button");

    botaoEditar.innerText = "Editar";
    botaoApagar.innerText = "Apagar";

    botaoEditar.classList.add("btn-editar");
    botaoApagar.classList.add("btn-apagar");

    containerBotoes.classList.add("container-botoes");

    containerBotoes.append(botaoEditar);
    containerBotoes.append(botaoApagar);

    /* Fim da criação dos botões EDITAR e APAGAR */
    /* ===================!!!!=================== */
    /* Começo da criação dos botões SALVAR e CANCELAR */

    const containerBotoesSalvarCancelar = document.createElement("div");
    const botaoSalvar = document.createElement("button");
    const botaoCancelar = document.createElement("button");

    botaoSalvar.innerText = "Salvar";
    botaoCancelar.innerText = "Cancelar";

    botaoSalvar.classList.add("btn-salvar");
    botaoCancelar.classList.add("btn-cancelar");

    containerBotoesSalvarCancelar.classList.add("container-botoes-salvar-cancelar", "esconder-botoes");

    containerBotoesSalvarCancelar.append(botaoSalvar);
    containerBotoesSalvarCancelar.append(botaoCancelar);

    /* Fim da criação dos botões SALVAR e CANCELAR */
    /* ===================!!!!=================== */
    /* Começo da criação do botão de REMOVER o elemento */

    botaoApagar.addEventListener("click", () => {
      botaoApagar.parentNode.parentNode.remove();
    });

    /* Fim da criação do botão de REMOVER o elemento */
    /* ===================!!!!=================== */
    /* Começo da criação do botão de EDITAR o elemento */

    botaoEditar.addEventListener("click", () => {
      const input = botaoEditar.parentNode.parentNode.getElementsByTagName("input")[0];
      input.disabled = false;

      input.setSelectionRange(0, 100);
      input.focus();

      const botoesSalvarCancelar = botaoEditar.parentNode.parentNode.getElementsByClassName("container-botoes-salvar-cancelar")[0];

      botoesSalvarCancelar.classList.remove("esconder-botoes");
      botaoEditar.parentNode.classList.add("esconder-botoes");

      const conteudoItem = input.value;

      /* ===================!!!!=================== */
      /* Começo do botão CANCELAR o elemento */

      botaoCancelar.addEventListener("click", () => {
        input.value = conteudoItem;
        input.disabled = true;

        botoesSalvarCancelar.classList.add("esconder-botoes");
        botaoEditar.parentNode.classList.remove("esconder-botoes");
      });
    });

    /* Fim do botão CANCELAR o elemento */
    /* ===================!!!!=================== */
    /* Começo do botão SALVAR o elemento */

    botaoSalvar.addEventListener("click", () => {
      const input = botaoSalvar.parentNode.parentNode.getElementsByTagName("input")[0];

      input.disabled = true;

      const botoesEditarApagar = botaoSalvar.parentNode.parentNode.getElementsByClassName("container-botoes")[0];

      botaoSalvar.parentNode.classList.add("esconder-botoes");
      botoesEditarApagar.classList.remove("esconder-botoes");
    });

    /* Fim do botão SALVAR o elemento */
    /* ===================!!!!=================== */
    /* Fim da criação do botão de EDITAR o elemento */

    item.append(msg);
    item.append(containerBotoes);
    item.append(containerBotoesSalvarCancelar);
    listaItens.append(item);

    novoItemInput.value = "";

    btnAdicionarItem.disabled = true;
    btnAdicionarItem.classList.add("desabilitado");
  }

  /* Fim da sessão de adicionar elementos na lista com [createElement] */

  /* ===================!!!!=================== */

  /* Começo da definição da funcionalidade de APAGAR um item */

  for (let botao of botoesApagar) {
    botao.addEventListener("click", () => {
      botao.parentNode.parentNode.remove();
    });
  }

  /* Fim da definição da funcionalidade de APAGAR um item */

  /* ===================!!!!=================== */

  /* Começo da definição da funcionalidade de EDITAR um item */

  for (let botao of botoesEditar) {
    botao.addEventListener("click", () => {
      const input = botao.parentNode.parentNode.getElementsByTagName("input")[0];
      input.disabled = false;

      input.setSelectionRange(0, 100);
      input.focus();

      const botoesSalvarCancelar = botao.parentNode.parentNode.getElementsByClassName("container-botoes-salvar-cancelar")[0];

      botoesSalvarCancelar.classList.remove("esconder-botoes");
      botao.parentNode.classList.add("esconder-botoes");

      const conteudoItem = input.value;

      /* Começo do botão CANCELAR o elemento */

      const botaoCancelar = botoesSalvarCancelar.getElementsByClassName("btn-cancelar")[0];

      botaoCancelar.addEventListener("click", () => {
        input.value = conteudoItem;
        input.disabled = true;

        botoesSalvarCancelar.classList.add("esconder-botoes");
        botao.parentNode.classList.remove("esconder-botoes");
      });

      /* Fim do botão CANCELAR o elemento */
    });
  }

  /* Fim da definição da funcionalidade de EDITAR um item */

  /* ===================!!!!=================== */

  /* Começo do botão SALVAR o elemento */

  for (let botao of botoesSalvar) {
    botao.addEventListener("click", () => {
      const input = botao.parentNode.parentNode.getElementsByTagName("input")[0];

      input.disabled = true;

      const botoesEditarApagar = botao.parentNode.parentNode.getElementsByClassName("container-botoes")[0];

      botao.parentNode.classList.add("esconder-botoes");
      botoesEditarApagar.classList.remove("esconder-botoes");
    });

    /* Fim do botão SALVAR o elemento */
  }
});
