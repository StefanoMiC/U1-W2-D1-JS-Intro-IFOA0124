console.log("Hello World");

console.log("Ciao Ragazzi! Benevnuti in JavaScript");

// Il lavoro del software developer si incentra sulla RISOLUZIONE DI PROBLEMI, ovvero la scrittura di ALGORITMI!
// un Algoritmo è composto da una serie di passaggi ordinati e finiti che portano alla risoluzione di un problema.
// Dato uno stesso problema dovrebbe portare allo stesso risultato.

// Cosa ci serve sapere per poter sviluppare un algoritmo? Uno dei concetti fondamentali è quello delle VARIABILI.
// Una variabile la possiamo immaginare come un contenitore (una scatola, una ciotola, un cassetto... ecc) con del contenuto.
// in ambito di hardware o computer in genere una variabile è un'allocazione di memoria atta a contenere un valore.

// una variabile ci servirà quando vorremo salvare un dato per poterlo usare anche più volte nel nostro programma
// non salvarlo lo farebbe morire nell'istante immediatamente successivo alla sua creazione.

// VARIABILI
// in JS le varibili si dichiarano tipicamente con la parola chiave (keyword) ---> let

let dog; // creazione di variabile o contenitore (vuoto)
// ho appena creato una variabile chiamata "dog".
console.log(dog); // sto chiedendo alla console di leggere il contenuto della variabile accessibile tramite il suo nome: dog. // risultato --> undefined
// sto assegnando un valore a posteriori tramite l'operatore = (l'operatore di assegnazione)
dog = "Pluto";

// sto rileggendo il NUOVO valore di dog
console.log(dog); // risultato --> "Pluto"

// sto ri-assegnando un valore tramite l'operatore = (l'operatore di assegnazione)s
dog = "Fido";

// sto rileggendo il NUOVO valore di dog
console.log(dog); // risultato --> "Fido"

// è possibile anche fare questi due passaggi (creazione + assegnazione) in un'unica riga
let cat = "Tom";
let mouse = `Jerry`;

// le variabili dovrebbero essere dichiarate in camelCase, ovvero prima lettera minuscola e ogni successiva prima lettera della nuova parola maiuscola.
let myFavNum = 3; // il valore in questo è di tipo numero
console.log(myFavNum);
myFavNum = 17;
console.log(myFavNum);
// myFavNum = "Stefano"; // evitiamo di cambiare il tipo dei nostri dati iniziali. se prima avevo un numero non dovrebbe andarci una stringa
// console.log(myFavNum);

// TIPI DI VALORI ASSEGNABILI AD UNA VARIABILE (anche detti PRIMITIVI)
// string es. "Mario", 'Rossi', `Epicode`, "30"
// number es. 100, 0, 88, 65.12, 90.45
// boolean es. true, false (non ce ne sono altri)
// undefined --> rappresenta l'assenza di valore. es. variabile inizializzata vuota
// null --> rappresenta un'assenza di valore intenzionale. es. se troviamo null una variabile è stata svuotata dallo sviluppatore
// NaN --> Not a Number - ritornato da operazioni non numeriche

// primitive complesse:
// bigInt
// symbol

// un valore booleano rappresenta la semplice verità o falsità di un'affermazione
let canYouDrive = true;
let areYouItalian = false;

canYouDrive = false;

// es. con null
let myName = null;
myName = "Mario";

let num1 = 15;
let num2 = 20;
let num3 = num1;

// quanto vale num3? 15 --> ha aperto la variabile num1 e ne ha ricevuto il suo valore che da quel momento userà come proprio.
console.log("NUMERO 1:", num1);
console.log("NUMERO 2:", num2);
console.log("NUMERO 3:", num3);

let num4 = num2 + num3;
console.log("NUMERO 4:", num4);

console.log(3 * 5); // 15
console.log(num1 * num2);
console.log(num2 / num1);
console.log(num2 - num1);

// questo operatore si chiama "modulo operator" e ritorna il resto della divisione
console.log(22 % 5); // risultato --> 2
console.log(6 % 2); // è pari perché risulato --> 0
console.log(3 % 2); // è dispari perché risulato --> 1

// concatenazione di stringhe
let composedString = dog + " è un cane, e ha come amici " + cat + " & " + mouse;

console.log(composedString);

// conversione automatica dei tipi ( non auspicabile ), cercheremo sempre di evitare che succeda: es. convertiamo uno dei due valori manualmente (da string a number e viceversa)
let falseNum2 = "20";

console.log("somma di elementi misti", falseNum2 + null); // 20null
console.log("somma di stringhe con numeri", num1 + falseNum2);

// conversione di stringa a numero con parseInt() per numero intero, parseFloat() per numero decimale, Number()
console.log("somma di stringhe con numeri", num1 + parseInt(falseNum2));
console.log("sottrazione di stringhe con numeri", num1 - falseNum2);

// typeof rivela il tipo intriseco di un dato
console.log(typeof num1); // 15 --> "number"

// ho convertito il dato dentro alla variabile e ho chiesto di che tipo fosse dopo la conversione
console.log(typeof num1.toString()); // "15" --> "string"

// operatori di uguaglianza

// === - triplo uguale è una comparazione per uguaglianza STRETTA (consigliata)
// == - doppio uguale è una comparazione per uguaglianza non stretta (sconsigliata)

// !== disuguaglianza STRETTA
// != disuguaglianza non stretta

console.log(5 === 5); // true
console.log(5 !== 5); // controlla che 5 sia diverso da 5 --> false

console.log(6 % 2 === 0); // true
console.log(6 % 2 == 0); // true

console.log(6 % 2 === "0"); // false // non effettua la conversione implicita
console.log(6 % 2 == "0"); // true // effettua la conversione implicita

// operatori di comparazione
// < > <= >=

console.log(6 > 3); // true
console.log(6 >= 6); // true
console.log(6 >= 8); // false
console.log(6 >= 0); // true
console.log(6 < 10); // true
console.log(6 < 1); // false

let n1 = 5;
let n2 = 10;
let n3 = 10;

console.log(n1 < n2); // (5 < 10) --> true
console.log(n1 <= n2); // (5 <= 10) --> true
console.log(n1 > n2); // (5 > 10) --> false

console.log(n1 < n3); // true
console.log(n2 < n3); // false
console.log(n2 <= n3); // true

// come verifico se n2 è UGUALE a n3? ===
// esiste anche il == --> il == verifica l'uguaglianza di due valori, a scapito del loro TIPO
// console.log(5 == '5') // --> true --> please non usatelo :)
console.log(5 === 5); // true --> usate SEMPRE i ===
console.log(5 === "5"); // false
console.log(n2 === n3); // true

// console.log(n2 = n3) // !!! ATTENZIONE !!! operatore di ASSEGNAZIONE, abbiamo appena assegnato a n2 il valore di n3 :)

console.log(n1 < n2); // true
console.log(n1 < n2 && n2 < n3); // (true && false) --> false
console.log(n1 < n2 && n2 <= n3); // (true && true) --> true

console.log(n1 < n2 || n2 < n3); // (true || false) --> true
console.log(n1 < n2 || n2 <= n3); // (true || true) --> true
console.log(n1 > n2 || n2 < n3); // (false || false) --> false

console.log(n1 < n2); // true
console.log(!(n1 < n2)); // false, il ! ribalta il significato di un'espressione

// operatori logici:
// && - AND - tutti i valori confrontati devono risultare true perché l'intera condizione ritorni true
// || - OR - almeno un valore confrontato devone risultare true perché l'intera condizione ritorni true
// ! - NOT

let eyeColor = "green";
let age = 16;
let height = 162;

// con && vogliamo che TUTTE le condizioni si verifichino per avere come risultato true
// ne basta una false per avere come risultato: false
console.log("AND &&", eyeColor === "green" && height >= 160 && age >= 18);
//                      true     &&     true      &&     false             --> false

// con || ci basta un valore positivo per avere l'intera valutazione a true
// lo utilizziamo per sapere se c'è almeno una cosa verificata nella condizione
console.log("OR || ", eyeColor === "blue" || height >= 160 || age >= 18);
//                      false     ||     true      ||     false             --> true

console.log("NOT !", !(eyeColor === "green"));
//                             !true              ---> false
console.log(!true); // false
console.log(!false); // true

window.alert("Ciao Ragazzi, questo è un avviso nella pagina come popup");
