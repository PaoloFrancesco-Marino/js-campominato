/**
 * Minesweeper
 * Descrizione:
    1- Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
    2- In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
    3- Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    4- La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
    5- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
 */


// 1.1 - Genero una function che mi permetta di creare dei numeri random (utilizzo una funciont mix e max cosi poi la posso riutilizzare per la task bonus)
// 1.2 - attraverso un ciclo for genero randomicamente 16 numeri
// 1.3 - sempre all'interno del ciclo for faccio un push di questi numeri che mi popolano l'array (vuoto) che saranno le mie bombe (quindi i numeri vietati)

var bombNumber = [];
var selectNum = [];
var tentativiMax = 1;
var score = 0;


alert('Benvenuto in Campo Minato \nIstruzioni: \nScegli una delle difficoltà disponibili \nInserire un numero compreso tra 0 e 100 \nRicordati che non puoi inserire un numero gia inserito \n')



// aggiungi difficoltà

var level = prompt('Scegli il livello di difficoltà: \nNormale \nMedia \nDifficile \nUltra').toLocaleLowerCase();

var normale = 'normale';
var media = 'media';
var difficile = 'difficile';
var ultra = 'ultra';

if (level == normale) {
    tentativiMax = 84;
} else if (level == media) {
    tentativiMax = 64;
} else if (level == difficile) {
    tentativiMax = 34;
} else {
    tentativiMax = 2;
}



// generazione numeri random casuali non ripetuti chiamando la funzione max e min

while (bombNumber.length < 16 ) {
    var bomb = getRandomNumber(1,100)

    if (!bombNumber.includes(bomb)) {
        bombNumber.push(bomb)
    }
}

console.log(bombNumber);

// 2.1- chiedo all'utente un numero compreso tra 1 e 100  
// 2.2- verifico le condizioni cioè che il numero inserito non sia uguale ad un numero delle bombe e che l'utente non metta lo stesso numero più volte (ciclo while)
// 2.3- Se supero le condizioni continuo a chiedere un numero all'utente altrimenti la mia partita termina

var numeroUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));

for (var i= 0; i <= tentativiMax; i++) {
    if (selectNum.includes(numeroUtente)) {
        numeroUtente = parseInt(prompt('Hai gia Inserito questo numero, Riprova'));
        i--;

    } else if ((!bombNumber.includes(numeroUtente)) && !selectNum.includes(numeroUtente)) {
        selectNum.push(numeroUtente);
        numeroUtente = parseInt(prompt('Inserisci nuvo numero'));
        score += 1;
    
    } else {
        console.log('Boom! Punteggio Totale: ' + score); 
        alert('Boom! Punteggio Totale: ' + score);
        break;
    }
}

console.log(score);


/***********
 * Function
 ***********/

// Function che genera numeri random tra un valore max e min

function getRandomNumber (min, max) { 
    var random = Math.floor(Math.random() * (max - min +1) ) + min;
    return random;
}
