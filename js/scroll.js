// Scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const alvo = document.querySelector(this.getAttribute('href'));
      alvo.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Animação de entrada ao rolar
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    const trigger = window.innerHeight * 0.85;
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < trigger) {
        sec.classList.add('visible');
      }
    });
  });
