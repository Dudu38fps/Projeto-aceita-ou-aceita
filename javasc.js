
document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("botao-negativo");

    function moveButton() {
        const x = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }

    noButton.addEventListener("mouseover", moveButton);
    noButton.addEventListener("click", moveButton);

});

function eventoDeClique() {
    window.open("https://youtu.be/uYHNdTPV7pM?si=960l-4nbZwW3ln1J", '_blank');
    
}