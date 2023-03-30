/*
Pari e Dispari:
    - L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    - Sommiamo i due numeri
    - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    - Dichiariamo chi ha vinto.
*/

// Variabile che prende l'input #play
let play = document.getElementById("play");

// Funzione attivata al "click"
play.addEventListener("click", function() {

    // Variabile che prende il valore inserito dall'utente (Pari o dispari)
    let pariDispari = document.getElementById("pariDispari").value;

    // Variabile che prende il valore inserito dall'utente (Numero)
    let player = parseInt(document.getElementById("player").value);

    // Variabile che prende il valore della Funzione( randoNumber() )
    let computer = randoNumber();

    // Somma di valori numerici inseriti da player e computer
    let somma = player + computer;

    // Funzione che crea un numero random da 1 a 5
    function randoNumber() {
        return Math.floor(Math.random() * 5) + 1;          
    }

    console.log( player + computer)

    // Condizioni per decidere chi sarà il vincitore
    if ( somma % 2 == 0 && pariDispari == "pari" || somma % 2 !== 0 && pariDispari == "dispari" ) {

        document.getElementById("risultato").innerHTML = 
        `
        <h3>Complimenti, hai vinto!</h3>
        <p>La somma dei due numeri è uguale a ${somma}</p>
        `;
    } else if ( somma % 2 !== 0 && pariDispari == "pari" || somma % 2 == 0 && pariDispari == "dispari" ) {

        document.getElementById("risultato").innerHTML = 
        `
        <h3>Mi dispiace, hai perso!</h3>
        <p>La somma dei due numeri è uguale a ${somma}</p>
        `;
    }

} )