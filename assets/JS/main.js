/*  
     Esercizio 1
     Dichiara una variabile chiamata number e assegnale il valore 100. 
     Stampa il valore della variabile in console.
*/


let number = 100; // number

console.log(number); //number

/* 
    Esercizio 2 
    Dichiara una costante chiamata PI e assegnale il valore di 3.14.
    Stampa il valore della costante in console.
*/

const PI = 3.14; //number

console.log(PI);  //number

/* 
    Esercizio 2 / B 
    Prova ad assegnare alla costante chiamata PI il valore di 3.1416.
    Sai dire cosa succede ?



//  PI = 3.1416;
//  TypeError: Assignment to constant variable. 
//  Non è possibile riassegnare un valore ad una costante già dichiarata.


*/

/*
    Esercizio 2 / C 
    Dichiara una variabile chiamata radius e assegnale il valore 8. 
    Moltiplica radius x 2 e x PI e assegna il valore a una variabile di nome circle.
    Stampa il valore della variabile circle in console.
 */

const radius = 8;  //number

let circle = (radius * 2 * PI);  //number

console.log(circle);  //number


/*
   Esercizio 3 Dichiara una variabile chiamata name e assegnale il valore "Carlo". 
   Successivamente, modifica il valore della variabile in "Marco". 
   Stampa il nuovo valore in console.
 */


let userName = 'Carlo';  //string

let replacedValue = userName.replace('Carlo', 'Marco');

console.log(replacedValue);  //string

// console.log(userName);

