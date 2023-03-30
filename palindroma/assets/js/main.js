/*
Palidroma:
    - Chiedere all’utente di inserire una parola
    - Creare una funzione per capire se la parola inserita è palindroma

*/

// Costante che si riconduce all'input id="btn"
const button = document.getElementById("btn");

let reversed;

// Funzione che parte al click su "btn"
button.addEventListener("click", function() {
    
    // Variabile che prende il value dall'input #parola
    let parola = document.getElementById("parola").value;
    
    /* Quando la parola viene inserita viene:
        - scomposta( .split )
        - cambiato l'ordine( .reverse() )
        - ricomposta come parola unica ( .join("") )
    */
    reversed = parola.split("").reverse().join("");

    
});



