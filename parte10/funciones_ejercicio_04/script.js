let dolares = 1.28611,
    yenes = 129.852,
    libras = 0.86,
    total = 0,
    euros = 0,
    resultado = document.querySelector('.resultado');

resultado.innerHTML = `${euros}€ son ${total}`;

function calc(euros, currency) {
    total = (euros * currency).toFixed(2);
    resultado.innerHTML = `${euros}€ son ${total}`;
}

document.querySelector('.dolares').addEventListener("click", () => {
    euros = parseInt(document.querySelector('input').value);
    calc(euros, dolares);
});
document.querySelector('.yenes').addEventListener("click", () => {
    euros = parseInt(document.querySelector('input').value);
    calc(euros, yenes);
});
document.querySelector('.libras').addEventListener("click", () => {
    euros = parseInt(document.querySelector('input').value);
    calc(euros, libras);
});

