document.addEventListener("DOMContentLoaded", function () {
  const modeSwitch = document.getElementById("darkmode-toggle");
  const body = document.body;

  // Aplica dark mode salvo
  if (localStorage.getItem("darkMode") === "on") {
    body.classList.add("dark");
  }

  // Alterna dark mode e salva preferência
  if (modeSwitch) {
    modeSwitch.addEventListener("click", () => {
      body.classList.toggle("dark");
      if (body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "on");
      } else {
        localStorage.setItem("darkMode", "off");
      }
    });
  }
});

// Acessibilidade

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btnAcessibilidade");
  const modal = document.getElementById("meuModal");
  if (btn && modal) {
    btn.addEventListener("click", function () {
      modal.showModal();
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btnAcessibilidade");
  const modal = document.getElementById("meuModal");
  const btnClose = document.getElementById("btnclose-popup");

  if (btn && modal) {
    btn.addEventListener("click", function () {
      modal.showModal();
    });
  }

  if (btnClose && modal) {
    btnClose.addEventListener("click", function () {
      modal.close();
    });
  }
});

// coisa

document.addEventListener("DOMContentLoaded", function () {
  const btnDaltonismo = document.getElementById("btnDaltonismo");
  const body = document.body;

  if (btnDaltonismo) {
    btnDaltonismo.addEventListener("click", function () {
      body.classList.toggle("daltonismo");
      // Salva preferência no localStorage
      if (body.classList.contains("daltonismo")) {
        localStorage.setItem("daltonismo", "on");
      } else {
        localStorage.setItem("daltonismo", "off");
      }
    });
  }

  // Aplica modo daltonismo salvo
  if (localStorage.getItem("daltonismo") === "on") {
    body.classList.add("daltonismo");
  }
});
