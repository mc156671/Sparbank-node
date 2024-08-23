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

console.log("Aufgabe 02")

//In Erweiterung von Aufgabe 01 soll der Ausdruck dynamisch whar oder falsch sein.

let a = 5

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

