/*
1. Escribe una función que escriba “Hola” tantas veces como el número que le pasamos de
parámetro. Llámala dos veces, primero con 5 y después con 3.
*/

function ejercicioUno(times) {
    let time = times;
    for (let i = 0; i < time; i++) {
        console.log("hola");
    }

}

let primeraLlamda = ejercicioUno(5)
let segundaLlamada = ejercicioUno(3)

