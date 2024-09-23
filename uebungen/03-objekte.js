console.log("objekte")
console.log("=======")

//bis lang speicher wir werte in Variablen
//Bsp: let vorname = "hans"
//jede variable nimmt genau einen wert auf. in den beispiel ist der wert "Hans"
// in der realen welt gibt es objekte, über die mehrere werte abgespeichert werden sollen
// Beispiel: Schüler in Schulverwaltungsürogramm
// Interessierende eigenschaften: Vorname Nachname geb. gebort. Klasse Anschrift, ...
// bislang haben wir dass so gelöst : 
//let vorname = "hans"
//let klasse ="GW23A"
//let ...
//Problem: die Eigenschaften stehen in keinen zusammenhang
// Im zusammenhang zwischen einzelnen werten herzueéstellen. gibt es Klasen und Objekte
// Zunächst legt der programierer zur entwiklungszeit die Baupläne(klassen) fets, nach denne Objekte zur
//laufzeit erstellt werden Und das geht so

class Schueler{
    constructor(){
        this.Vorname
        this.Nachname
        this.Klasse
    }
}

// die objete werden nun aus dem Bauplan (=klasse) wie folgt erzeugt:

let schueler = new Schueler()
schueler.Vorname = "Hans"
schueler.Nachname = "Meyer"
schueler.Klasse = "GW23A"

// die werte könne wieder ausgegeben werden

console.log("Nachname: " + schueler.Nachname + ", Vorname: " + schueler.Vorname)

let schueler2 = new Schueler()
schueler2.Nachname = "Müller"
schueler2.Vorname = "Pit"
schueler2.Klasse = "GW23A"

console.log("Nachname: " + schueler2.Nachname + ", Vorname: " + schueler2.Vorname)

// Um aus dem Bauplan (=Klasee) ein kongrates objekt zu erzeugen sind drei schritte notwendig
// 1. Deklaration: let schueler 
//                  bei der Deklaration wird bekannt gegeben, dass es ein ojekt names schueler geben soll
// 2. INSTAziierung: = new Schueler()
//                  dabei werden speicherzellen im RAM reserviert um 
//                  eigenschaftswerte aufzunemen
// 3. INItialiesierung: schueler.Nachname = "schmidt"
//                  werden konkrete werte in die speicherzellen geschrieben.


console.log("Aufgabe 1")
// Für eine Autovermietung sollen autos verwaltet werden. Erstelle den Bauplan um dann Drei Objekte zu machen

class Auto{
    constructor(){
        this.Marke
        this.Baujahr
        this.Ps
    }
}

let auto1 = new Auto()
auto1.Marke = "Prosche"
auto1.Baujahr = "2022"
auto1.Ps = 510

let auto2 = Auto()
auto2.Marke = "Ferrai"
auto2.Baujahr = "2016"
auto2.Ps = 450

let auto3 = Auto()
auto3.Marke = "Lamborgini"
auto3.Baujahr = "2015"
auto3.Ps = 420

console.log("Aufgabe 2")
// 2

class Kunde{
    constructor(){
        this.Guthaben
        this.Nachname
        this.Vorname
    }
}

let kunde = new Kunde()
kunde.Guthaben = 100
kunde.Nachname = "Micheel"
kunde.Vorname = "Clemens"