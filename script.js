document.addEventListener("DOMContentLoaded", () => {
  const novoItemInput = document.getElementById("input-novo-item");
  const btnAdicionarItem = document.getElementsByClassName("btn-adicionar")[0];
  const listaItens = document.getElementsByTagName("ul")[0];

  btnAdicionarItem.addEventListener("click", (e) => {
    e.preventDefault();

    adicionarItem(novoItemInput.value);
  });

  function adicionarItem(texto) {
    console.log(texto);
  }
});
