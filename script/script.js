let global = document.getElementById('itemsEvent')

// Adicionar
function addButton() {
    // Obtém o elemento principal
    var main = document.getElementById("main");

    // Cria uma nova div com a classe "itemsEvent mb-4"
    var newTodo = document.createElement("div");
    newTodo.className = "itemsEvent mb-4";

    // Cria uma div para o título da tarefa
    var title = document.createElement("div");
    title.className = "title col-6";

    // Adiciona o título da tarefa ao elemento
    var task = document.createElement("h5")
    let adicionar = String(document.getElementById('adicionar').value)
    task.innerHTML = `${adicionar}`
    title.appendChild(task);

    // Cria uma div para os botões
    var buttons = document.createElement("div");
    buttons.className = "buttonsInEvent col-6";

    // Adiciona os botões ao elemento
    buttons.innerHTML = '<button class="finish-todo" onclick="confirmButton(event)">' +
        '<i class="bi bi-check-lg"></i>' +
        '</button>' +
        '&nbsp;' +
        '<button class="finish-todo" onclick="editButton(event)">' +
        '<i class="bi bi-pencil-fill"></i>' +
        '</button>' +
        '&nbsp;' +
        '<button class="finish-todo" onclick="deleteButton(event)">' +
        '<i class="bi bi-trash3-fill"></i>' +
        '</button>';

    // Adiciona o título e os botões à nova tarefa
    newTodo.appendChild(title);
    newTodo.appendChild(buttons);

    // Adiciona a nova tarefa à lista de tarefas
    main.appendChild(newTodo);
}


// Pesquisar
function searchButton() {
    window.alert('teste procurar');
}

// Confirmar
function confirmButton(event) {
    let changeColor = event.currentTarget.parentElement.parentElement;
    if (changeColor.style.backgroundColor === 'grey') {
      changeColor.style.backgroundColor = ''
    } else {
      changeColor.style.backgroundColor = 'grey'
    }
  }
  
  

// Editar
function editButton(event) {
    let editTitle = event.target.closest('.itemsEvent').querySelector('.title');
    let newTitle = prompt('Digite o novo título da tarefa: ');
    editTitle.innerHTML = `<h5>${newTitle}</h5>`;
  }
  

// Excluir
function deleteButton(event) {
    let delet = document.querySelector('.itemsEvent')
    delet.remove();
}
