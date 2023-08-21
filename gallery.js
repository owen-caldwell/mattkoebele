const slideshow = document.querySelector('.gallery');
const slides = Array.from(slideshow.children);
const num = document.querySelector("#num");
const total = document.querySelector("#total");
let currentIndex = 0;
function goToSlide(index) {
  currentIndex = index;
  const offset = -currentIndex * 100; // +2% for margin -- (slide = 100% + margin*2)
  slideshow.style.transform = `translateX(${offset}%)`;
  num.innerHTML = `${index + 1}`;
  total.innerHTML = `${slides.length}`
  //for (i = 0; i < slides.length; i++)
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  
  goToSlide(currentIndex);
}
goToSlide(0);
var refreshIntervalID = setInterval(nextSlide, 5000); // Auto scroll every 5 seconds
slideshow.addEventListener('click', nextSlide);