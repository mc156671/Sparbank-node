console.log("Booleans")
console.log("========")

console.log("Boolische werte sind Wahrheitswerte, die wahr (true) oder falsch (false) annehmen können")

// Wahrheiftswerte kennen wir bereits aus der Wennfunktion aus Excel.

console.log("Aufgabe 01")

if(true){
    console.log("Der Ausdruck ist wahr.")
}else{
    console.log("der Ausdruck ist unwahr / falsch / false")
}

//weil in dieser aufgabe die Prüfung immer war ist. wird immer die anweisung hinter if ausgeführt.
//die anweisung hinterr else kommt niemals zur ausführung
// ...

console.log("Aufgabe 02")

//In Erweiterung von Aufgabe 01 soll der Ausdruck dynamisch whar oder falsch sein.

let a = 5

//

//Prüfoperatoren
// == :prüfung auf glecihheit im wert
// >    größer als
// <    kleiner als
// >=   größer oder gleich
// <=   kleiner oder gleich
// ===  prüfung auf gleichheit im wert und im typ
if(a>6){
    console.log("true")
} else {
    console.log("false")
}

console.log("Aufgabe 3")

// Wenn die Schülerin 16 oder jünger ist muss sie fahrrad fahren.
// 17 begleitet fahren
// 18 fahren
// Vorrasusetzung führs fahren ist der führerschein

let fuehrerschein = false 
let alter = 18

if(alter <= 16 || fuehrerschein === false ){ //wenn dei schülerin 16 ist oder keinen führerschein hat oder beides dann fahrrad
    console.log("fahrrad")
} else {
        if(alter === 17 ){
            console.log("begleitet") //wenn 17 UND führerschein dann begleitet
        } else{
            console.log("alleine fahren") // wenn 18 und führerschein dann fahren
        }
}


console.log("aufgabe 4")
//zahlen könne in javascript ture oder false sein.

let zahl1 = 0;
let zahl2 = 5;
let zahl3 = NaN;

if (zahl1) {
    console.log("zahl1 ist true");

} else {
    console.log("zahl1 ist false");
}

if (zahl2) {
    console.log("zahl2 ist true");
} else {
    console.log("zahl2 ist false");
}

if (zahl3) {
    console.log("zahl3 ist true");
} else {
    console.log("zahl3 ist false");
}

// Null und NaN sind false alles ander ist true

console.log("Aufgabe5")
// auf einem sparkonto soll bei einem positiven kotostand auf der console stehen : zinsen berechen"
// Wenn kein guthaben vorhanden : keien zinsen

let kotostand = 1000

if(kotostand){
    console.log("zinsen berechnen")
}else{
    console.log("keien zinsen")
}

console.log("aufgabe 6")

//

alter = 1;

if (alter){
    console.log("alt");
} else {
    console.log("neu");
}