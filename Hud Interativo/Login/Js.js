document.getElementById("loginForm").addEventListener("submit", function (e) {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!email || !senha) {
    alert("Preencha todos os campos!");
    e.preventDefault();
    return false;
  }

  // Aqui você pode adicionar a lógica de autenticação
  // Exemplo: window.location.href = "/Home/hud-interativo.html";
});

//  validando o login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // Exemplo de usuário fixo
  const emailCorreto = "benaducci.felipe@gmail.com";
  const senhaCorreta = "Rodolfo123";

  if (email === emailCorreto && senha === senhaCorreta) {
    // Salva no localStorage e redireciona
    localStorage.setItem("token", "abc123");
    localStorage.setItem(
      "userLogado",
      JSON.stringify({ nome: "Usuário Senai" })
    );
    window.location.href = "/Home/hud-interativo.html";
  } else {
    alert("Email ou senha incorretos!");
  }
});
