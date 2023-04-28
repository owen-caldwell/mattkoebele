const slider = document.getElementById('gallery');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const buttons = document.querySelectorAll('#btn')
console.log(buttons)
let direction;
let btnCounter = 0;
moveBtn();

prev.addEventListener('click', () => {
  direction = -1;
  btnCounter += -1;
  if (btnCounter < 0){
    btnCounter = (buttons.length - 1);
  };
  moveBtn();
  scroll();
});

next.addEventListener('click', () => {
  direction = 1;
  btnCounter += 1;
  if (btnCounter > (buttons.length - 1)){
    btnCounter = 0;
  };
  moveBtn();
  scroll();
});
function moveBtn(){
  buttons[btnCounter].src = "selected.svg"
  for (let i = 0; i <= (buttons.length - 1); i++) {
    if (i === btnCounter) {
      continue;
    }
    else {
      buttons[i].src = "unselected.svg"
    }
  }
};
function scroll() {
  console.log("ScrollBy running!");
  slider.scrollBy({
    left: direction * window.innerWidth,
    behavior: 'smooth'
  });
};
slider.addEventListener('touchstart', (event) => {
  console.log("Running handleTouchStart");
  let touch = event.touches[0];
  let xStart = touch.clientX;
  slider.addEventListener('touchend', (event) => {
    console.log("Running handleTouchEnd")
    let touch = event.changedTouches[0];
    let xEnd = touch.clientX;
    console.log("xStart:", xStart);
    console.log("xEnd:", xEnd);
    if ((xStart - xEnd) < 0) {
      console.log("Running first if")
      direction = -1;
      btnCounter += -1;
      moveBtn();
      scroll();
    };
    if ((xStart - xEnd) > 0) {
      console.log("Running second if")
      direction = 1;
      btnCounter += 1;
      moveBtn();
      scroll();
    };
  });
});