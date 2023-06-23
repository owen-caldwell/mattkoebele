console.log("GALLERY")
let currentImage = 0;
function changeImage(n) {
  let gallery = document.querySelector('.activegallery');
  let images = gallery.querySelectorAll('div');
  let buttons = document.querySelector('.activebuttons');
  let dots = buttons.querySelectorAll("#btn");
  images[currentImage].style.display = "none";
  dots[currentImage].src = "unselected.svg";
  currentImage = (currentImage + n + images.length) % images.length;
  dots[currentImage].src = "selected.svg"
  images[currentImage].style.display = "block";
}