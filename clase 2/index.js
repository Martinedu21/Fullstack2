console.log("Bienvenido al Mundo del Fútbol ⚽");

window.onload = function() {
    alert("¡Bienvenido a la página principal de Fútbol!");
};

const links = document.querySelectorAll("nav a");
links.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "red";
    });
    link.addEventListener("mouseout", () => {
        link.style.color = "";
    });
});
