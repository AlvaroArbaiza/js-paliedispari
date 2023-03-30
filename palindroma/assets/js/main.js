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

    // Condizione per la quale la parola dovrà essere palindroma
    if ( parola == reversed ) {

        document.getElementById("risultato").innerHTML = 
        `
        <p>La parola <strong>${parola}</strong> è palindroma perchè letta al contrario è sempre uguale!</p>
        `;
    // "Altrimenti", se la parola non è palindroma avrà questo output  
    } else {

        document.getElementById("risultato").innerHTML = 
        `
        <p>La parola <strong>${parola}</strong> non è palindroma!</p>
        `;
    }
    
});



