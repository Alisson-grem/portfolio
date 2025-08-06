
  // Menu responsivo
  const hamburguer = document.getElementById('menu-hamburguer');
  const menuLinks = document.getElementById('menu-links');

  hamburguer.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
  });

  const form = document.querySelector('form[action*="formsubmit.co"]');
  form.addEventListener('submit', function(e) {
    const nome = this.querySelector('input[name="nome"]').value.trim();
    const email = this.querySelector('input[name="email"]').value.trim();
    if (!nome || !email) {
      e.preventDefault();
      alert('Por favor, preencha seu nome e e-mail antes de enviar.');
    }
  });

  //Animaçõesao aparecer na tela
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('section').forEach(sec => {
    observer.observe(sec);

   });


