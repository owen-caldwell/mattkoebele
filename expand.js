const mobileMain = document.querySelector("#mfilm-dd");
const desktopMain = document.querySelector("#dfilm-dd");
const mfilmwrap = document.querySelector(".mfilm-wrapper");
const dfilmwrap = document.querySelector(".dfilm-wrapper");
const mArrow = mobileMain.querySelector("img");
const dArrow = desktopMain.querySelector("img");
let mobileExpand = true;
let desktopExpand = false;
mobileMain.addEventListener("click", () => {
  if (mobileExpand === false) {
    mobileExpand = true;
    console.log("opening");
    mArrow.style.transform = "rotate(180deg)";
    mfilmwrap.style.height = "260px";
    mfilmwrap.style.marginBottom = "2em";
  } else {
    mobileExpand = false;
    console.log("closing");
    mArrow.style.transform = "rotate(0deg)";
    mfilmwrap.style.height = "0px";
    mfilmwrap.style.marginBottom = "0";
  }
});
desktopMain.addEventListener("click", () => {
  if (desktopExpand === false) {
    desktopExpand = true;
    console.log("opening");
    dArrow.style.transform = "rotate(0deg)";
    dfilmwrap.style.height = "260px";
  } else {
    desktopExpand = false;
    console.log("closing");
    dArrow.style.transform = "rotate(180deg)";
    dfilmwrap.style.height = "0px";
  }
});
