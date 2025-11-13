// Fade-in animation for hero-text
window.addEventListener('DOMContentLoaded', () => {
  const heroText = document.querySelector('.hero-text');
  setTimeout(() => {
    heroText.classList.add('visible');
  }, 200);
});
