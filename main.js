
// VARIABLES
const inputNumber = document.querySelector('.js-inputNumber');
const inputParImpar = document.querySelector('.js-inputParImpar');
const text = document.querySelector('.js-text');
const p = document.querySelector('.js-p');

// FUNCIONES

// Averigua si el nº es par o impar
function parImpar(valueInput) { // le metemos a valueInput entre paréntesis para que no sea undefined
    if(valueInput % 2 === 0){
        p.innerHTML = "¡Es par!"; 
    } else { 
        p.innerHTML = "¡Es impar!"; 
    }
}

// FUNCIONES HANDLE

// Copia texto del input en etiqueta p
function handleInput() {
    const newP = inputNumber.value;
    text.innerHTML = newP; 
    /* p1.innerHTML = input.value; */ // + corto - descriptivo
}

// Muestra si el nº es par o impar
function handleClick() {
    /* event.preventDefault(); */
    const valueInput = inputNumber.value;
    console.log(valueInput);
    parImpar(valueInput);   // le metemos a valueInput entre paréntesis para que no sea undefined
}

// EVENTS/LISTENERS
inputNumber.addEventListener('input', handleInput); // copiar texto
inputParImpar.addEventListener('click', handleClick); // es par o impar?






