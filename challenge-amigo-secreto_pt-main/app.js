let amigos = [];
let coresAmigos = [];

function adicionarAmigo() {
    const inputNome = document.getElementById('amigo');
    const nomeAmigo = inputNome.value.trim();
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    const novaCor = getRandomColor();
    amigos.push(nomeAmigo);
    coresAmigos.push(novaCor);

    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const novoLi = document.createElement('li');
        novoLi.textContent = amigos[i];
        novoLi.style.backgroundColor = coresAmigos[i];
        listaAmigos.appendChild(novoLi);
    }
    inputNome.value = "";
    inputNome.focus();
}

function sortearAmigo() {
    if (amigos.length === 0) {
      alert("Adicione amigos antes de sortear.");
      return;
    }
  
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    const corSorteada = coresAmigos[indiceSorteado];
  
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li style="background-color: ${corSorteada};">O amigo sorteado foi: ${amigoSorteado}</li>`;
  }

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}