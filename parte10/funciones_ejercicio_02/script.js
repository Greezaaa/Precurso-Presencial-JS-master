

/* 
2. Escribe una función a la que le damos dos números y que devuelva true si el primer número es más grande que el segundo número y false en el caso contrario. Pide dos números al usuario, y pásalos a la función. Muestra en consola “El primer número es más grande” o “El primer número no es más grande”.
*/
let num1 = parseInt(prompt('Primer numero')),
    num2 = parseInt(prompt('Segundo numero'));

function ejercicioDos(num1, num2) {
    if (num1 > num2) {
        alert("El primer número es más grande");
    } else {
        alert("El primer número no es más grande");

    }
}
ejercicioDos(num1, num2);
