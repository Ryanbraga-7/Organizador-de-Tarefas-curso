 
    const input = document.getElementById("tarefaInput");
    const addBtn = document.getElementById("addBtn");
    const lista = document.getElementById("listaTarefas");

    // Adicionar tarefa
    addBtn.addEventListener("click", () => {
      const texto = input.value.trim();
      if (texto === "") {
        alert("Digite uma tarefa!");
        return;
      }

      // Criar novo item da lista
      const li = document.createElement("li");
      li.textContent = texto;

      // Evento para marcar como concluída
      li.addEventListener("click", () => {
        li.classList.toggle("concluida");
      });

      // Criar botão de remover
      const removerBtn = document.createElement("button");
      removerBtn.textContent = "Remover";

      removerBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Evita conflito com marcar concluída
        lista.removeChild(li);
      });

      // Adiciona o botão ao item
      li.appendChild(removerBtn);

      // Insere o item na lista
      lista.appendChild(li);

      // Limpar input
      input.value = "";
      input.focus();
    });
  