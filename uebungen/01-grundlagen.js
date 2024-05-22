console.log('GRUNDLAGEN');
console.log('==========');

console.log('Aufgabe 1');
console.log('Erstelle zwei Variablen namens a und b. Initialisiere mit den Werten 1 und 2.');

// Der Wert 1 wird zugewiesen (=) an eine Variable namens a.
let a = 1;
let b = 2;

// Mit dem Plus-Operator findet eine String-Verkettung statt. Ein String ist eine Zeichenkette, eingerahmt 
// mit Hochkommas.
console.log('Der Wert der Variablen a ist: ' + a);

console.log('Aufgabe 2');
console.log('Gib das Ergebnis der Addition von a und b aus.');

// Wenn links oder rechts vom Plus-Operator ein String steht, wird verkettet.
// Wenn links und rechts Zahlen stehen, wird addiert.
console.log(a+b);
console.log('Das Eregbnis der Addition: ' + (a + b));

console.log('Aufgabe 3');
console.log('Gib das Ergebnis der Subtraktion, Multiplikation, Division von a und b aus.');

console.log("Subtraktion:" + (a - b));
console.log("Multiplikation:" + (a * b));
console.log("Division:" + (a / b));

console.log('Aufgabe 4');
console.log('Der Wert von c sei das Ergebnis der Addition von a und b.');

let c = a + b;

console.log("c hat den Wert: " + c);

console.log('Aufgabe 5');
console.log('a und b sind die Seitenlängen der Katheten eines rechtwinkligen Dreiecks. Bestimme die Länge der Hypotenuse c');

// cQuadrat ist in Kamelhöcker-Notation geschrieben. Das heißt: zuerst ein Kleinbuchstabe. Verbundene Wörter beginnen groß.
let cQuadrat = a * a + b * b;

// Javascript kennt eine Bibliothek namens Math. In der Bibliothek gibt es eine Funktion namens sqrt. Als Parameter in den
// runden Klammern erwartet sqrt eine Zahl, aus der dann die Wurzel gezogen wird.
c = Math.sqrt(cQuadrat);

console.log('Die Hypotenuse ist ' + c + ' lang.');

console.log('Aufgabe 6');
console.log('Ein Kunde legt 100 Euro auf dem Sparbuch an. Jedes Jahr bekommt er 10% Zinsen. Wie viel bekommt der Kunde');
console.log('nach zwei Jahren ausgezahlt. Beachte den Zinseszinseffekt.');

let laufzeit = 2;
let startkapital = 100;
let zinssatz = 0.1;   /* Das Komma ist zur Entwicklungszeit ein Punkt. */

let kapitalNachEinemJahr = startkapital * (1 + zinssatz);

console.log("Kapital nach einem Jahr: " + kapitalNachEinemJahr + " EUR.");

let kapitalNachZweiJahren = kapitalNachEinemJahr * (1 + zinssatz);

console.log("Kapital nach zwei Jahren: " + kapitalNachZweiJahren + " EUR.");

let endkapital = startkapital * Math.pow(1 + zinssatz, laufzeit);

console.log("Endkapital nach " + laufzeit + " Jahren: " + endkapital + " EUR.");

console.log('Aufgabe 6');
console.log('Die Werte aus de vorherigen aufgabe werden als reihe dargestellt');

// im zeitpunkt null 
endkapital = startkapital;
console.log(endkapital);

// nach 
endkapital = endkapital * (1 + zinssatz);
console.log(endkapital);

// nach zweiten
endkapital = endkapital * (1 + zinssatz);
console.log(endkapital);

// nach DREI
endkapital = endkapital * (1 + zinssatz);
console.log(endkapital);

// nach 4
endkapital = endkapital * (1 + zinssatz);
console.log(endkapital);

console.log('Aufgabe 8');
console.log('In Aufgabe 7 wurde die anweisung endkapital =... mehrfach wieder holt.');
console.log('Um sich tipparbeit zu sparen und die wiederholung der Anweisung in der ');
console.log('gewünschten Häufigkeit durchzuführen, nutzt der Programierer eine Schleife.');

startkapital = 100;
endkapital = startkapital;
zinssatz = 0.1;
laufzeit = 3;

for (let i = 0; i < laufzeit; i++) {
    endkapital = endkapital * (1 + zinssatz);
    console.log(endkapital);
}


console.log('Aufgabe 9');
console.log('wenn der artikel lebensmittel ist dann ist die mehrsteurer 7%, ansonsten 19%');
console.log('in exel');

let artikel = 'lebensmittel';
let mwstSatz = (artikel === "lebensmittel") ? 7 : 19;

// der
// auf
// Wert
// anders als in exel 
// für einen vergleich 

console.log('der mwst satz für en artikel '+ artikel + ' berägt '+ mwstSatz + '%');

console.log('Aufgabe 10');
console.log('wenn der der gesamtbetrag gößre oder glecih 100 euro ist beträgt der rabatt 20%')
console.log('ansonsten keinen rabatt')

// die
let gesamtbetrag = 120;
let rabatt;

// 
if (gesamtbetrag >= 100){

    // 
    rabatt = 20;
}else{

    //
    rabatt = 0;
}

console.log('Bei einem gesamt betrag '+ gesamtbetrag + ' Euro brägt der Rabatt '+ rabatt + '%.');

console.log('Aufgabe 11');
console.log('wenn der der gesamtbetrag gößre oder glecih 100 euro ist beträgt der rabatt 20%')
console.log('wenn der der gesamtbetrag zwischen 50 und 100 euro ist beträgt der rabatt 10%')
console.log('ansonsten keinen rabatt')

gesamtbetrag = 120;
rabatt;

// 
if (gesamtbetrag >= 100){
    rabatt = 20;
}else{
    if (gesamtbetrag >=50){
        rabatt = 10;
    }else{
        rabatt = 0;
    }
}

console.log('Bei einem gesamt betrag '+ gesamtbetrag + ' Euro brägt der Rabatt '+ rabatt + '%.');

console.log('Aufgabe 12');
console.log('wenn der der gesamtbetrag gößre oder glecih 200 euro ist, ist der versand kostenlos');
console.log('wenn der der gesamtbetrag zwischen 100 und 200 euro ist beträgt versand 5 Euro');
console.log('ansonsten versand 10 Euro');

gesamtbetrag = 120;
let versand;

if (gesamtbetrag >= 200){
    versand = 0;
}else{
    if (gesamtbetrag >=100){
        versand = 5;
    }else{
        versand = 10;
    }
}

console.log('Bei einem Gesamtbetrag '+ gesamtbetrag + ' Euro brägt der Versand '+ versand + ' Euro.');

console.log('Aufgabe 13');
console.log('Frauen ab 18 Zahlen 10 Euro eintritt. Männer ab 18 zahlen 15 Euro eintritt. Kinder zahlen 6 Euro');

let alter = 17;
let geschlecht = 'm';
let eintritt;

if (alter < 18){
    eintritt = 6;
}else{
    if (geschlecht === 'm'){
        eintritt = 15;
    }else{
        eintritt = 10;
    }
}

console.log('der eintritt kostet ' + eintritt + ' euro');