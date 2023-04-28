let tg = true;
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("links");
const head = document.getElementById("name");
console.log("Hi! I'm running for the hamburger menu.");
function toggleNav() {
    if (tg) {
        console.log("Nav opening.");
        tg = false;
        hamburger.src = "close.svg";
        nav.style.visibility = "visible";
        nav.style.transitionDelay = ".1s";
        nav.style.height = "6em";
        nav.style.paddingBottom = ".5em";
    }
    else {
        console.log("Nav closing.");
        tg = true;
        hamburger.src = "hamburger.svg";
        nav.style.visibility = "hidden";
        nav.style.transitionDelay = "0s";
        nav.style.height = "0em";
        nav.style.paddingBottom = "0em";
    };
    
};

hamburger.addEventListener("click", toggleNav);