// =============================
// Funções
// =============================


function saudacaoPrincipal() {
  console.log("Olá, seja bem-vindo!");
}

function cumprimentarUsuario(nomeUsuario) {
  console.log(`Olá, ${nomeUsuario}!`);
}


const mensagemAnonima = function () {
  console.log("Essa é uma mensagem de uma função anônima!");
};


const multiplicarValores = (valor1, valor2) => valor1 * valor2;


saudacaoPrincipal();
cumprimentarUsuario("Maria");
mensagemAnonima();
console.log("Multiplicação:", multiplicarValores(5, 3));

// =============================
//DOM: Manipulação
// =============================


function alterarTexto() {
  document.getElementById("paragrafoPrincipal").innerText = "Texto alterado com JS!";
}


function alterarFundo() {
  document.body.style.backgroundColor = "lightyellow";
}


function adicionarLista() {
  let itemNovo = document.createElement("li");
  itemNovo.textContent = "Novo Item";
  document.getElementById("listaItens").appendChild(itemNovo);
}


function removerParagrafoPrincipal() {
  let p = document.getElementById("paragrafoPrincipal");
  if (p) p.remove();
}


function customizarPagina() {
  document.getElementById("paragrafoPrincipal").style.color = "blue";
  document.getElementById("paragrafoPrincipal").style.fontSize = "20px";
  document.getElementById("tituloPrincipal").style.color = "green";
  document.getElementById("tituloPrincipal").style.fontSize = "35px";
}

// =============================
//DOM: Eventos
// =============================


document.getElementById("inputTexto").addEventListener("input", function() {
  document.getElementById("saidaTexto").innerText = this.value;
});


document.getElementById("btnMouseOver").addEventListener("mouseover", function() {
  this.innerText = "Você passou o mouse!";
});


document.getElementById("btnDblClick").addEventListener("dblclick", function() {
  document.getElementById("paragrafoEscondido").style.display = "none";
});


document.getElementById("btnMudarFonte").addEventListener("click", function() {
  let tamanhoAleatorio = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
  document.getElementById("paragrafoFonte").style.fontSize = tamanhoAleatorio + "px";
});