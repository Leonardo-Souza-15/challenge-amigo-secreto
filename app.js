// Para receber os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo na lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim();
    if (nome == "") {
        alert("Por favor, insira outro nome!");
        return;
    }
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }
    amigos.push(nome);
    exibirLista();
    inputAmigo.value = ""; // Limpar campo de texto
}

// Função para exibir lista de amigos
function exibirLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpar lista de amigos antes de renderizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li"); // Criar um novo item de lista
        li.textContent = amigo;
        li.className = "name-item";

        // Botão para remover um nome da lista
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.onclick = () => removerAmigo(index);
        li.appendChild(btnRemover);

        listaAmigos.appendChild(li);
    });
}

// Função para remover amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1);
    exibirLista();
}

// Função para sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione nomes antes de realizar o sorteio.");
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}
