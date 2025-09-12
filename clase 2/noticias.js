console.log("Bienvenido a las Noticias⚽");

window.onload = function() {
    alert("¡Bienvenido a la ventana de noticia del Fútbol!");
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