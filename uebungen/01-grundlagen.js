console.log('Grundlagen');
console.log('==========');

console.log('Aufgabe 1');
console.log('Erstelle zwei variablen names a und b. Initaliesiere mit den werten 1 und 2');

// Der Wert 1 wird zugewiesen (=) an eine Variable names a.
let a = 1;
let b = 2;



console.log('der wert der variable a ist:' +a);

console.log('Aufgabe 2');
console.log('Gib das ergebniss der addition der variable a und b aus');

// wenn rechts oder links vom + ein strting steht, wird verkettet. 
// wenn links und rechts zahlen stehen. wird addirt.
console.log(a+b);
console.log('das ergebniss der addition:'+ (a + b));

console.log('Aufgabe 3');
console.log('Gib das ergebniss der subtraktion, multiplikation, division von a und b aus');

console.log('Substraktion: ' + (a - b));
console.log('multiplikation: ' + (a * b));
console.log('division: ' + (a / b));

console.log('Aufgabe 4');
console.log('c ist das ergebniss der addition von a und b');

let c = a + b;

console.log('C hat den wert: ' + c);

console.log('Aufgabe 5');
console.log('A und b sind die kateten eines rechtwinklingen dreieks. Bestimme die hypothenuse.');

// cQuadrat ist in kamel höker notation geschreiben. das heißt zuerst ein klein buchstabe. Verbundene wörter beginnen groß.
let cQuadrat = a*a + b*b;

// Javascript kennt eine bibliotekt names Math. dort gubt es eine funktion names sqrt. als parameter in den
// runden klammern erwartet sqrt eine zahl aus der dan die wurzel gezogen wird.
c = Math.sqrt(cQuadrat);

console.log('die hypotenuse c hat die länge: '+ c);

console.log('Aufgabe 6');
console.log('ein kunde legt hundert euro auf den sparbuch an jedes jar bekommt er 10% zinsen. wie viel bekommt der kunde');
console.log('nach zwei jahren ausbezahlt. beachte zinses zins');

let laufzeit = 2;
let startkapital = 100;
let zinssatz = 0.1;

let kapital1 = startkapital * (1+ zinssatz);
let kapital2 = kapital1 * (1+ zinssatz);

console.log(kapital1);
console.log(kapital2);

let endkaptial = Math.pow((startkapital * zinssatz),laufzeit);

console.log(endkaptial)
let zins = 10;
let guthaben0 = 100;
let guthaben1 = ((guthaben0 * zins)/100)+ guthaben0;
let guthaben2 = ((guthaben1 * zins)/100)+ guthaben1;

console.log('der kunde hat nach zwei jahren: '+ guthaben2);

