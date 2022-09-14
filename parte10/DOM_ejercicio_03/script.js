let img = document.querySelector('img');
img.src = "reverso.png";

function flipCard() {
    if (img.src.includes('jpg')) {
        img.src = "reverso.png"
    } else {
        img.src = "anverso.jpg"
    }
}
img.addEventListener('click', () => {
    flipCard();
})