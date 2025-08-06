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

  const observerHabilides = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.fill').forEach(barra => {
          const valor = barra.getAttribute('data-percent');
          barra.style.width = valor + '%';
        });
        observerHabilides.unobserve(entry.target);
      }
    });
    }, { threshold: 0.5 });

    const secHabilidades = document.querySelector('#habilidades');
    if (secHabilidades) observerHabilides.observe(secHabilidades);
