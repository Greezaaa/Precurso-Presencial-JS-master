/* 	
1.Crea un html con un párrafo y un botón. 
2. El párrafo tendrá dentro la frase “la variable está en false”. 
3. Cuando hagamos click en el botón, el
4.valor de la variable cambiará a true 
5. y el párrafo tendrá dentro la frase “la variable está en true”

*/

let pValue = false,
    p = document.querySelector("#p"),
    button = document.querySelector("#btn");

button.addEventListener('click', () => {
    pValue = true;
    p.innerHTML = 'la variable está en true';
})
