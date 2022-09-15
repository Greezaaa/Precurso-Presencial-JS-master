// Respuesta 1
//let dolares = 1.28611,
//     yenes = 129.852,
//     libras = 0.86,
//     total = 0,
//     euros = 0,

// resultado = document.querySelector('.resultado');
// resultado.innerHTML = `${euros}€ son ${total}`;

// function calc(euros, currency) {
//     total = (euros * currency).toFixed(2);
//     resultado.innerHTML = `${euros}€ son ${total}`;
// }

// document.querySelector('.dolares').addEventListener("click", () => {
//     euros = parseInt(document.querySelector('input').value);
//     calc(euros, dolares);
// });
// document.querySelector('.yenes').addEventListener("click", () => {
//     euros = parseInt(document.querySelector('input').value);
//     calc(euros, yenes);
// });
// document.querySelector('.libras').addEventListener("click", () => {
//     euros = parseInt(document.querySelector('input').value);
//     calc(euros, libras);
// });



// Respuesta 2
let total = 0,
    euros = 0,
    currency = 'Dolares',
    resultado = document.querySelector('.resultado');
resultado.innerHTML = `${euros}€ son ${total}${currency}`;
btns = document.querySelectorAll('.btn'),
    btnArray = Array.from(btns)

btnArray.forEach(
    btn => btn.addEventListener('click', () => {
        euros = parseInt(document.querySelector('input').value);
        currency = btn.innerHTML;
        convert(euros, currency);
    })
);

function convert(euros, currency) {
    switch (currency) {
        case "Dolares":
            total = (euros * 1.28611).toFixed(2)
            break;
        case "Libras":
            total = (euros * 0.86).toFixed(2)
            break;
        case "Yenes":
            total = (euros * 129.852).toFixed(2)
            break;

        default:
            total = 0
            break;
    }
    resultado.innerHTML = `${euros}€ son ${total}${currency}`;
    return resultado.innerHTML;
}