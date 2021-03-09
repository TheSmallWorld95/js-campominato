// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.

// In seguito deve chiedere all’utente (100 - 16) volte
// di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//
// Bonus (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50

// Creo un array che contenga 16 numeri
// I numeri devono essere compresi tra 1 e 100
// Non ci possono essere numeri doppi all'interno dell'array

var numeriComputer = [];
var min = 1;
var numeroBombe = 16
var numeriUtente = []

var difficoltà = prompt("Scegli una difficoltà tra facile, normale, difficile").toLowerCase();

switch (difficoltà) {
  case "facile":
    var max = 100;
    numeriComputer = createArray(numeriComputer, min, max, numeroBombe);
    console.log(numeriComputer);
    punteggio = campoMinato(numeriComputer, numeriUtente, min, max, numeroBombe);
    console.log("Hai totalizzato " + punteggio + " punti");
    break;
  case "normale":
    var max = 80;
    numeriComputer = createArray(numeriComputer, min, max, numeroBombe);
    console.log(numeriComputer);
    punteggio = campoMinato(numeriComputer, numeriUtente, min, max, numeroBombe);
    console.log("Hai totalizzato " + punteggio + " punti");
    break;
  case "difficile":
    var max = 50;
    numeriComputer = createArray(numeriComputer, min, max, numeroBombe);
    console.log(numeriComputer);
    punteggio = campoMinato(numeriComputer, numeriUtente, min, max, numeroBombe);
    console.log("Hai totalizzato " + punteggio + " punti");
    break;

}










  // UTILITY FUNCTIONS

// Creo un array che conterrà i numeri dell'utente
function campoMinato(numeriComputer, numeriUtente, min, max, numeroBombe) {
 while (numeriUtente.length < max - numeroBombe) {
   // Chiedo all'utente di inserire un numero che sia compreso tra min e max
   // Il numero non deve essere ripetuto 2 volte (!numeriUtente.includes(numeroUtente))
   var numeroUtente = parseInt(prompt("Inserisci un numero"));
   if (!isNaN(numeroUtente) && min <= numeroUtente && numeroUtente <= max && !numeriUtente.includes(numeroUtente) ) {
     // Il numero inserito dall'utente se fa parte delle bombe termina il gioco
     if (!numeriComputer.includes(numeroUtente)) {
       numeriUtente.push(numeroUtente)
       // Altrimenti se non fa parte delle bombe verrà pushato nell'array
       // contenente i numeri dell'utente
     } else {
       return numeriUtente.length
     }
   } else {
     console.log("Non hai inserito un numero compreso tra " + min + " e " + max + " o hai inserito 2 volte lo stesso numero");
   }

 }
 // Una volta finito il ciclo while l'utente saprà il suo punteggio dato
 // dalla lunghezza dell'array contenente i numeri da lui generati
 return numeriUtente.length
}


function createArray(array, min, max, numeroBombe) {
  // Con un ciclo while creo 16 numeri randomici
  while (array.length < numeroBombe) {
    var numeroComputer = randomNumberInRange(min, max)
  // Con includes pusho nel mio array solo numeri diversi tra loro
    if (!numeriComputer.includes(numeroComputer)) {
      numeriComputer.push(numeroComputer)
    }
  }
  return numeriComputer;
}

function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
