let login = document.getElementById("login_tl");
let card = document.getElementById("cartao");
let nome;

function btoLogin() {
  nome = document.getElementById("nome").value.trim();

  if (nome == "") {
    alert("Digite seu nome");
    return;
  }

  textoBNV = document.getElementById("Bem_vindo");
  textoBNV.innerHTML = `Seja bem vindo ${nome}!`;

  login.classList.remove("tela");
  login.classList.add("oculta");

  setTimeout(() => {
    card.classList.remove("oculta");
    card.classList.add("tela");
  }, 500);
}

function Adbto() {
  let conteiner = document.getElementById("taref");
  let titu = document.getElementById("titulo").value.trim();
  let desc = document.getElementById("des").value.trim();

  if (titu == "" || desc == "") {
    alert("Prencha as lacunas");
    return;
  }

  // aqui eu criei a div e adcionei a classe que eu estilisei
  let DIV = document.createElement("div");
  DIV.classList.add("estiloTarefa");
  // aqui  vai vim o h1 e o p, que estão dentro dentro dele, mas ainda vou adcionar dentro.
  let CTV = document.createElement("h1");
  CTV.innerHTML = `${titu}`;

  let CD = document.createElement("p");
  CD.innerHTML = `${desc}`;

  // aq eu adciono ao html, e dentro daodne eu quero

  DIV.append(CTV, CD);

  conteiner.appendChild(DIV);

  document.getElementById("titulo").value = "";
  document.getElementById("des").value = "";
}
