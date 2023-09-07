document.addEventListener("DOMContentLoaded", () => {
  const novoItemInput = document.getElementById("input-novo-item");
  const btnAdicionarItem = document.getElementsByClassName("btn-adicionar")[0];
  const listaItens = document.getElementsByTagName("ul")[0];
  const botoesApagar = document.getElementsByClassName("btn-apagar");

  /* Botão de adicionar elemento ficar inutilizado quando o mesmo não tiver caracteres */

  novoItemInput.addEventListener("input", () => {
    if (novoItemInput.value != "") {
      btnAdicionarItem.classList.remove("desabilitado");
      btnAdicionarItem.disabled = false;
    } else {
      btnAdicionarItem.classList.add("desabilitado");
      btnAdicionarItem.disabled = true;
    }
  });

  /* Botão de adicionar elemento ficar inutilizado quando o mesmo não tiver caracteres */

  /* Adicionar elementos na lista com [createElement] */

  btnAdicionarItem.addEventListener("click", (e) => {
    e.preventDefault();

    adicionarItem(novoItemInput.value);
  });

  function adicionarItem(texto) {
    const item = document.createElement("li");
    const msg = document.createElement("input");
    msg.disabled = true;
    msg.value = texto;

    const containerBotoes = document.createElement("div");
    const botaoEditar = document.createElement("button");
    const botaoApagar = document.createElement("button");

    botaoEditar.innerText = "Editar";
    botaoApagar.innerText = "Apagar";

    botaoEditar.classList.add("btn-editar");
    botaoApagar.classList.add("btn-apagar");

    botaoApagar.addEventListener("click", () => {
      botaoApagar.parentNode.parentNode.remove();
    });

    containerBotoes.classList.add("container-botoes");

    containerBotoes.append(botaoEditar);
    containerBotoes.append(botaoApagar);

    item.append(msg);
    item.append(containerBotoes);
    listaItens.append(item);

    novoItemInput.value = "";

    btnAdicionarItem.disabled = true;
    btnAdicionarItem.classList.add("desabilitado");
  }

  /* Adicionar elementos na lista com [createElement] */

  /* Definindo a funcionalidade de APAGAR um item */

  for (let botao of botoesApagar) {
    botao.addEventListener("click", () => {
      botao.parentNode.parentNode.remove();
    });
  }

  /* Definindo a funcionalidade de APAGAR um item */
});
