// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma:
// la funzione deve ritornare true se la parola è palindroma
// deve ritornare false se la parola non è palindroma
// alla fine stampate in console un messaggio per dire all’utente il risultato del controllo

// Creare una variabile per la parola dell'utente
const userWord = prompt ('Sai scrivere una psrola palindroma?');
console.log(userWord)
let confrontedWord = false;

// Creare una funzione col compito di:
function isPalindrome() {

    // Dividere la parola dell'utente e generare un array
    let splitUserWord = userWord.split("");
    let reversedWord = [];

    // Invertire l'ordine di lettura con un ciclo che inizia la lettura dell'array dalla fine
    for (let i = splitUserWord.length-1; i >= 0; i--) {
        reversedWord = reversedWord.concat(splitUserWord[i]);
    }

    let joinedReversedWord = reversedWord.join('')

    // Confrontare la parola originale con il risultato
    if (userWord === joinedReversedWord) {
        // Se uguale corrisponde a true
        confrontedWord = true;
    } else {
        // Altrimenti se diversa corrisponde a false
        confrontedWord = false;
    };
    
    return confrontedWord;
}

// Evocare la funzione per analizzare la parola
let result = isPalindrome()

// Scrivere in console il risultato
if (result == true) {
    // Se è true "La parola è palindroma"
    console.log('La parola è palindroma')
} else if (result == false) {
    // Altrimenti se è false "La parola non è palindroma"
    console.log('La parola non è palindroma')
}