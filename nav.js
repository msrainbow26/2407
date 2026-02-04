const navLinks = document.querySelectorAll("nav a");
const navLine = document.getElementById("nav-line");

navLinks.forEach(link => {
    link.addEventListener("mouseenter", e => {
        navLine.style.left = e.target.offsetLeft + "px";
        navLine.style.width = e.target.offsetWidth + "px";
    });
});