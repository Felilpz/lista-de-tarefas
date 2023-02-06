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
    buttons.innerHTML = '<button class="finish-todo" onclick="confirmButton()">' +
        '<i class="bi bi-check-lg"></i>' +
        '</button>' +
        '&nbsp;' +
        '<button class="finish-todo" onclick="editButton()">' +
        '<i class="bi bi-pencil-fill"></i>' +
        '</button>' +
        '&nbsp;' +
        '<button class="finish-todo" onclick="deleteButton()">' +
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
function confirmButton() {
    let changeColor = document.querySelector(".itemsEvent")
    changeColor.style.backgroundColor = ''
    
}

// Editar
function editButton() {
    window.alert('teste editar');
}

// Excluir
function deleteButton() {
    window.alert('teste excluir');
}