
        document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("botao-negativo");

    noButton.addEventListener("mouseover", function () {
        const x = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});

function eventoDeClique() {
    window.location.href = "https://www.youtube.com/shorts/TMYBABz563U";
    
}