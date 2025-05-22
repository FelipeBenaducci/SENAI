document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkmode-toggle');
  if (!toggle) return;

  // Carrega preferência ao abrir a página
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
});

