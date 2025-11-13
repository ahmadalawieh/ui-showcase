const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if(i === index) slide.classList.add('active');
  });
}

prevBtn.addEventListener('click', () => {
  current = (current === 0) ? slides.length - 1 : current - 1;
  showSlide(current);
});

nextBtn.addEventListener('click', () => {
  current = (current === slides.length - 1) ? 0 : current + 1;
  showSlide(current);
});

// Optional: auto-slide
setInterval(() => {
  current = (current === slides.length - 1) ? 0 : current + 1;
  showSlide(current);
}, 5000); // change every 5 seconds
