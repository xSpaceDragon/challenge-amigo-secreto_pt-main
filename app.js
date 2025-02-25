let listaAmigos = [];

function adicionarAmigo() {
    let inputField = document.querySelector("#amigo");
    let amigoNome = inputField.value.trim();

    if (amigoNome === "") {
        alert("Por favor, insira um nome");
        return;
    }

    listaAmigos.push(amigoNome);
    inputField.value = "";
    exibirLista();
}

function exibirLista() {
    let listContainer = document.querySelector("#listaAmigos");
    listContainer.innerHTML = "";

    listaAmigos.forEach(amigo => {
        let listItem = document.createElement("li");
        listItem.textContent = amigo;
        listContainer.appendChild(listItem);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];

    let resultadoContainer = document.getElementById("resultado");
    resultadoContainer.innerHTML = `<li>${amigoSorteado}<li>`;
}