console.log("Bienvenido a los momentos historicos del futbol ⚽");

window.onload = function() {
    alert("¡Bienvenido a la ventana de los momentos mas historicos del Fútbol!");
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