'use strict';
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.project-trigger').forEach(openButton => {
  const dialog = document.getElementById(openButton.dataset.dialog);
  const closeButton = dialog.querySelector('.dialog-close');
  openButton.addEventListener('click', () => {
    dialog.showModal();
    document.body.classList.add('dialog-open');
    closeButton.focus();
  });
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    openButton.focus();
  });
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reduceMotion.matches && 'IntersectionObserver' in window) {
  document.body.classList.add('motion-enabled');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.section-heading, .featured-project, .about-content, .credentials, .contact h2').forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
  });
}

