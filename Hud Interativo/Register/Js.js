let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validNome = false;

let usuario = document.querySelector("#usuario");
let labelUsuario = document.querySelector("#labelUsuario");
let validUsuario = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

let confirmSenha = document.querySelector("#confirmSenha");
let labelConfirmSenha = document.querySelector("#labelConfirmSenha");
let validConfirmSenha = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

// Validação dos campos
nome.addEventListener("keyup", () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute("style", "color: red");
    labelNome.innerHTML = "*Insira no minimo 3 caracteres";
    nome.setAttribute("style", "border-color: red");
    validNome = false;
  } else {
    labelNome.setAttribute("style", "color: green");
    labelNome.innerHTML = "Nome";
    nome.setAttribute("style", "border-color: green");
    validNome = true;
  }
});

usuario.addEventListener("keyup", () => {
  if (usuario.value.length <= 4) {
    labelUsuario.setAttribute("style", "color: red");
    labelUsuario.innerHTML = "*Insira no minimo 5 caracteres";
    usuario.setAttribute("style", "border-color: red");
    validUsuario = false;
  } else {
    labelUsuario.setAttribute("style", "color: green");
    labelUsuario.innerHTML = "Usuário";
    usuario.setAttribute("style", "border-color: green");
    validUsuario = true;
  }
});

senha.addEventListener("keyup", () => {
  if (senha.value.length <= 5) {
    labelSenha.setAttribute("style", "color: red");
    labelSenha.innerHTML = "*Insira no minimo 6 caracteres";
    senha.setAttribute("style", "border-color: red");
    validSenha = false;
  } else {
    labelSenha.setAttribute("style", "color: green");
    labelSenha.innerHTML = "Senha";
    senha.setAttribute("style", "border-color: green");
    validSenha = true;
  }
});

confirmSenha.addEventListener("keyup", () => {
  if (senha.value != confirmSenha.value) {
    labelConfirmSenha.setAttribute("style", "color: red");
    labelConfirmSenha.innerHTML = " *As senhas não conferem";
    confirmSenha.setAttribute("style", "border-color: red");
    validConfirmSenha = false;
  } else {
    labelConfirmSenha.setAttribute("style", "color: green");
    labelConfirmSenha.innerHTML = "Confirmar Senha";
    confirmSenha.setAttribute("style", "border-color: green");
    validConfirmSenha = true;
  }
});

// Função de cadastro
function cadastrar() {
  if (validNome && validUsuario && validSenha && validConfirmSenha) {
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

    listaUser.push({
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value,
    });

    localStorage.setItem("listaUser", JSON.stringify(listaUser));

    msgSuccess.setAttribute("style", "display: block");
    msgSuccess.innerHTML = "<strong>Cadastrando usuário...</strong>";
    msgError.setAttribute("style", "display: none");
    msgError.innerHTML = "";

    setTimeout(() => {
      window.location.href = "../Login/Index.html";
    }, 3000);
  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML =
      "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>";
    msgSuccess.innerHTML = "";
    msgSuccess.setAttribute("style", "display: none");
  }
}

// Olho para mostrar/ocultar senha
document.getElementById("verSenha").addEventListener("click", function () {
  const input = document.getElementById("senha");
  if (input.type === "password") {
    input.type = "text";
    this.textContent = "🙈";
  } else {
    input.type = "password";
    this.textContent = "👁️";
  }
});

document
  .getElementById("verConfirmSenha")
  .addEventListener("click", function () {
    const input = document.getElementById("confirmSenha");
    if (input.type === "password") {
      input.type = "text";
      this.textContent = "🙈";
    } else {
      input.type = "password";
      this.textContent = "👁️";
    }
  });
