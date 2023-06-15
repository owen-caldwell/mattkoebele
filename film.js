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

button1.addEventListener('click', ()=> {
    project1.style.display = "flex";
    project2.style.display = "none";
    project3.style.display = "none";
    project4.style.display = "none";

})
button2.addEventListener('click', ()=> {
    project1.style.display = "none";
    project2.style.display = "flex";
    project3.style.display = "none";
    project4.style.display = "none";

})
button3.addEventListener('click', ()=> {
    project1.style.display = "none";
    project2.style.display = "none";
    project3.style.display = "flex";
    project4.style.display = "none";

})
button4.addEventListener('click', ()=> {
    project1.style.display = "none";
    project2.style.display = "none";
    project3.style.display = "none";
    project4.style.display = "flex";

})