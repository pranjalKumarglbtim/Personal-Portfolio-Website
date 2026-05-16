const menuToggle = document.querySelector('#mobile-nav-toggle');
const navLinks = document.querySelector('#primary-navigation');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('active');
    menuToggle.textContent = expanded ? '☰' : '✕';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('active');
      menuToggle.textContent = '☰';
    });
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('active')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('active');
    menuToggle.textContent = '☰';
  }
});