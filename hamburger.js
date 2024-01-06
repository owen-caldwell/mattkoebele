let nav = document.querySelector(".mobile-nav");
let hamburger = document.querySelector("#hamburger");
let content = document.querySelector(".index-wrapper");
let filmcontent = document.querySelector(".indexfilm-wrapper");
let tree = document.querySelector("#tree");
let isOpen = false;

hamburger.addEventListener("click", () => {
    if (isOpen === false) {
        isOpen = true;
        content.style.visibility = "hidden";
        nav.style.transition = "height .3s ease";
        nav.style.height = "500px";
        hamburger.src = "media/close.svg";
        try{tree.src = "media/navtree.png";}
        catch{}
        try {filmcontent.style.display = "none";}
        catch{}
    } else {
        isOpen = false
        content.style.visibility = "visible";
        nav.style.transition = "height 0s ease";
        nav.style.height = "0";
        hamburger.src = "media/hamburger.svg";
        try{tree.src = "media/tree.png";}
        catch{}
        try {filmcontent.style.display = "block";}
        catch{}
    }
});