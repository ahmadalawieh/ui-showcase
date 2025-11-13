const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const container = document.querySelector('.carousel-container');

let currentIndex = 0;

function updateSlide() {
  const offset = -currentIndex * 100; // slide width 100%
  container.style.transform = `translateX(${offset}%)`;
}

// Next slide
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
});

// Previous slide
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
});

// Optional auto-slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
}, 5000);
