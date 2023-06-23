const gallery = document.querySelector('#gallery');
const images = gallery.querySelectorAll('div');
let currentImage = 0;

function changeImage(n) {
  images[currentImage].style.display = "none";
  currentImage = (currentImage + n + images.length) % images.length;
  images[currentImage].style.display = "block";
}