// Simple fade-in animation on load
window.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
      heroContent.classList.add('visible');
    }, 100);
  });
  