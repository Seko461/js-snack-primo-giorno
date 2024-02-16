/*  
     Esercizio 4 
     Dichiara una variabile chiamata 
     temperature e assegnale il valore 22.5. 
     Successivamente, aumenta il suo valore di 5 e 
     stampa il nuovo valore in console.
*/
let temperature = 22.5;

let newTemperature = temperature + 5;

console.log(newTemperature);


/* 
    Esercizio 5: 
    Differenza tra var e let Scrivete un piccolo 
    blocco di codice che utilizza un blocco 
    if per vedere come var e let si comportano 
    diversamente rispetto allo scope. 
    Non soffermatevi per ora sul significato di scope, 
    vi verrà spiegato, è solo il limite di visibilità di una variabile

    if (true) { var variabileVar = "Sono definita con var"; 
    let variabileLet = "Sono definita con let"; }

    console.log(variabileVar); 
    console.log(variabileLet); 
    Scrivete in un commento dopo i 2 console.log che cosa sta succedendo ... 
    Avete capito ora che cos'è il Hoisting? 
    Chiedete a Fabio domattina in caso contrario.
*/
if (true) {
    var variabileVar = "Sono definita con var";
    let variabileLet = "Sono definita con let";
}

console.log(variabileVar);
console.log(variabileLet);

// la variabile let è locale quindi non può essere richiamata al di fuori della funzione
/* (L'hoisting di funzioni 
   è utile perché possiamo nascondere l'implementazione nella parte inferiore 
   di un file e lasciare che chi legge si possa concentrare su quello che sta 
   facendo il codice.
   In altre parole, possiamo aprire un file e vedere cosa fa il codice senza prima 
   capire come è implementato.) da https://www.freecodecamp.org/

   In conclusione le var dovrebbero essere dichiarate poco prima la funzione mentre le let in cima
    (hoisting) ciò permette una lettura del codice senza entrare nello specifico 

*/





/* 
   Esercizio 6: 
   Numeri Rispondete in un commento a più righe: 
   Che differenza c'è tra il numero 3.14 e 100 sono diversi? 
   Perchè? Che tipo di dato è uno e che tipo di dato è l'altro? 
   (aiutatevi con una ricerca su google per allenare il vostro cerebro)


   Come già avevo risposto su slack 3.14 è un numero decimale 
   di cui decimale è il .14 mentre 
   il 100 è un numero intero, 
   vi sono anche numeri interi negativi tipo - 20.
   Lo 0 (zero) è un numero a se
   Vi sono poi numeri ottali esempio let numeroOttale = 0123; //equivalente a 83
   ed esadecimali esempio numeroEsadecimale = 0x123; //equivalente a 291



*/
/*
    Esercizio 7: 
    console Per scrivere dentro la nostra console utilizziamo 
    la sua funzione .log() ma se scrivessimo console.info('Il mio messaggio') 
    che differenza c'è? Perche? Esistono altri metodi da usare con console. ? 
    (aiutatevi con una ricerca su internet per tennere allenate il vostro brain)

    console.info ritorna solo un messaggio in console ma non segnala un errore del codice se c'è
    poi c'è console.warn che appunto richiama l'attenzione su un probabile errore
    e console.error che segnala l'errore

    */



