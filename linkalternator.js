const links = document.querySelector("#links");
const innerLinks = links.querySelectorAll("a");
if (window.innerWidth < 876) {
    innerLinks[1].href = "film.html";
    console.log("link switched to FILM");
}
else {
    innerLinks[1].href = "project1.html";
    console.log("link switched to PROJECT1");
}