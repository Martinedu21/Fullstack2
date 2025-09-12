console.log("Bienvenido a los mejores equipos del mundo ⚽");

window.onload = function() {
    alert("¡Bienvenido a la ventana de los mejores equipos del Fútbol!");
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