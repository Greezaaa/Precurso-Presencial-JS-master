/* 

1.	Pide por prompt un número. 
2. Recójelo en una variable. 
3.   Pinta un párrafo en el html en el que inicialmente se mostrará ese valor, 
4.   y un botón debajo. 
5. El botón ejecutará una función que recibirá ese número como argumento y 
6. lo sumará al número inicial.

    */

const number = parseInt(prompt('Introduzca un numero')),
    p = document.querySelector("#num"),
    button = document.querySelector("#btn");

button.addEventListener("click", addNumber);
p.innerHTML = parseInt(number);
function addNumber() {
    p.innerHTML = parseInt(p.innerHTML) + number;
}