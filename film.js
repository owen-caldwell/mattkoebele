console.log("FILM");
// this is a really stupid way of doing this
// and I want a new way

// buttons
const button1 = document.getElementById("proj1");
const button2 = document.getElementById("proj2");
const button3 = document.getElementById("proj3");
const button4 = document.getElementById("proj4");
// project wrappers
const project1 = document.getElementById("pjwrapper1");
const project2 = document.getElementById("pjwrapper2");
const project3 = document.getElementById("pjwrapper3");
const project4 = document.getElementById("pjwrapper4");

const galleries = document.querySelectorAll("#gallery");
const buttons = document.querySelectorAll("#gallery-buttons")

button1.addEventListener('click', ()=> {
    for (let i = 0; i < galleries.length; i++) {
        galleries[i].classList.remove("activegallery");
        buttons[i].classList.remove("activebuttons");
    }
    galleries[0].classList.add("activegallery");
    buttons[0].classList.add("activebuttons");
    project1.style.display = "flex";
    project2.style.display = "none";
    project3.style.display = "none";
    project4.style.display = "none";
    button1.classList.add("btnClkd");
    button2.classList.remove("btnClkd");
    button3.classList.remove("btnClkd");
    button4.classList.remove("btnClkd");

})
button2.addEventListener('click', ()=> {
    for (let i = 0; i < galleries.length; i++) {
        galleries[i].classList.remove("activegallery");
        buttons[i].classList.remove("activebuttons");
    }
    galleries[1].classList.add("activegallery");
    buttons[1].classList.add("activebuttons");
    project1.style.display = "none";
    project2.style.display = "flex";
    project3.style.display = "none";
    project4.style.display = "none";
    button1.classList.remove("btnClkd");
    button2.classList.add("btnClkd");
    button3.classList.remove("btnClkd");
    button4.classList.remove("btnClkd");

})
button3.addEventListener('click', ()=> {
    for (let i = 0; i < galleries.length; i++) {
        galleries[i].classList.remove("activegallery");
        buttons[i].classList.remove("activebuttons");
    }
    galleries[2].classList.add("activegallery");
    buttons[2].classList.add("activebuttons");
    project1.style.display = "none";
    project2.style.display = "none";
    project3.style.display = "flex";
    project4.style.display = "none";
    button1.classList.remove("btnClkd");
    button2.classList.remove("btnClkd");
    button3.classList.add("btnClkd");
    button4.classList.remove("btnClkd");
})
button4.addEventListener('click', ()=> {
    for (let i = 0; i < galleries.length; i++) {
        galleries[i].classList.remove("activegallery");
        buttons[i].classList.remove("activebuttons");
    }
    galleries[3].classList.add("activegallery");
    buttons[3].classList.add("activebuttons");
    project1.style.display = "none";
    project2.style.display = "none";
    project3.style.display = "none";
    project4.style.display = "flex";
    button1.classList.remove("btnClkd");
    button2.classList.remove("btnClkd");
    button3.classList.remove("btnClkd");
    button4.classList.add("btnClkd");

})