document.addEventListener("DOMContentLoaded", () => {
  const novoItemInput = document.getElementById("input-novo-item");
  const btnAdicionarItem = document.getElementsByClassName("btn-adicionar")[0];
  const listaItens = document.getElementsByTagName("ul")[0];

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

    containerBotoes.append(botaoEditar);
    containerBotoes.append(botaoApagar);

    item.append(msg);
    item.append(containerBotoes);
    listaItens.append(item);

    novoItemInput.value = "";
  }
});
