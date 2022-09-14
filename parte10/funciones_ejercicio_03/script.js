
/*
3. Escribe un programa que pida al usuario dos números. Usa esos 2 números en una función que divide el primero por el segundo y devuelve el resultado. Muestra el resultado que devuelve la función en un alert. Después vuelve a pedir los números y hacer todo otra vez hasta que el usuario introduzca un 0 como segundo número
*/

function ejercicio3() {
    let num1, num2, result;
    function dividir() {
        num1 = prompt('Primer numero');
        num2 = prompt('Segundo numero');
        result = num1 / num2;
        if (num2 == 0) {
            alert('No se puede dividir con 0');
            throw 'No se puede dividir con 0';
        }
        return alert(result)
    }
    while (true) {
        dividir()
    }
}
ejercicio3()




