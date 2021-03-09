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
var max = 100;
var numeriGenerati = 16
var numeriUtente = []




numeriComputer = createArray(numeriComputer, min, max, numeriGenerati);

console.log(numeriComputer);

punteggio = campoMinato(numeriComputer, numeriUtente, min, max, numeriGenerati);

console.log("Hai totalizzato " + punteggio + " punti");

// Creo un array che conterrà i numeri dell'utente

function campoMinato(numeriComputer, numeriUtente, min, max, numeriGenerati) {
 while (numeriUtente.length < max - numeriGenerati) {
   var numeroUtente = parseInt(prompt("Inserisci un numero"));
   if (!isNaN(numeroUtente) && min <= numeroUtente && numeroUtente <= max && !numeriUtente.includes(numeroUtente) ) {
     if (!numeriComputer.includes(numeroUtente)) {
       numeriUtente.push(numeroUtente)
     } else {
       return numeriUtente.length
     }
   } else {
     console.log("Non hai inserito un numero compreso tra " + min + " e " + max + " o hai inserito 2 volte lo stesso numero");
   }

 }
 return numeriUtente.length
}



  // UTILITY FUNCTIONS
  function randomNumberInRange(min, max) {
    if (isNaN(min) || isNaN(max)) {
      console.log("Non sono numeri");
    } else {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }

  function createArray(array, min, max, numeriGenerati) {
    // Con un ciclo while creo 16 numeri randomici
    while (array.length < numeriGenerati) {
      var numeroComputer = randomNumberInRange(min, max)
    // Con includes pusho nel mio array solo numeri diversi tra loro
      if (!numeriComputer.includes(numeroComputer)) {
        numeriComputer.push(numeroComputer)
      }
    }
    return numeriComputer;
  }
