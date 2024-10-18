document.addEventListener('DOMContentLoaded', () => {
  // Menu móvel toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  mobileMenuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');

      // Atualiza o atributo aria-expanded para acessibilidade
      const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
  });

  // Verifica se o navegador suporta IntersectionObserver
  if ('IntersectionObserver' in window) {
      const fadeElements = document.querySelectorAll('.fade-in');
      const observerOptions = {
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      fadeElements.forEach(element => {
          observer.observe(element);
      });
  }

  // Botão "Voltar ao topo"
  const backToTopButton = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
          backToTopButton.classList.add('visible');
      } else {
          backToTopButton.classList.remove('visible');
      }
  });

  backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Remove qualquer código de envio de formulário via JS, já que o Formspree cuida disso.
});
