console.log("Klausur 20240930")
// 
// Bearbeiten Sie alle Aufgaben nach Vorgabe. 
// Deklarieren Sie stets Objekte mit Eigenschaften und sprechenden Namen und geben Sie einen Antwortsatz auf der Konsole aus.


console.log("Aufgabe 1")
// 1a) 
// Es soll das Volumen eines Würfels in Quadratzentimeter (cm3) ausgegeben werden. Arbeiten Sie mit einem Objekt und sprechenden Eigenschaften.
// Geben Sie das Volumen in einem Antwortsatz auf der Konsole aus.

class Wuerfel {
    constructor(){
        this.Volumen
        this.Kantenlaenge
    }
}

let wuerfel = new Wuerfel
wuerfel.Kantenlaenge = 11
wuerfel.Volumen = Math.pow(wuerfel.Kantenlaenge, 3)

console.log("Das Volumen des Würfels ist: " + wuerfel.Volumen + " cm3.")

// 1b 
// Wenn das Volumen 1000 oder mehr Quadratzentimeter beträgt soll eine Meldung auf der Konsole ausgegeben werden, die besagt,
// dass das Volumen 1000 oder mehr Quadratzentimeter beträgt.

if(wuerfel.Volumen >= 1000){
    console.log("Das Volumen beträgt 1000 oder mehr Quadratzentimeter.")
}

// 1c) - Nur Klausurschreiber
// Nutzen Sie die Math-Bibliothek .sqrt(), um die Wurzel aus dem Volumen zu errechnen. Geben Sie die Kantenlänge in einem Antwortsatz aus.

console.log(Math.sqrt(wuerfel.Volumen) + "ist die Wurzel des Volumens")

console.log("Aufgabe 2")
// Sie werden beauftragt ein Schulverwaltungsprogramm für das BKB zu erstellen. Konkret sollen Sie sich in einem ersten Schritt
// die Zeugnisse vornehmen. Deklarieren, Instanziieren und Initialisieren Sie ein Zeugnisobjekt, 
// in dem Sie neben "Deutsch", "Mathe" und "Englisch" 5 weitere, geeignete Eigenschaften deklarieren. 

// 2a)
// Definieren Sie die class

class Zeugniss{
    constructor(){
        this.Deutsch
        this.Mathe
        this.Englisch
        this.Bwl
        this.Politik
        this.Sport
        this.Vwl
        this.Spanisch
        this.Durchschnitt
        this.Klassenbeste
    }
}

let zeugniss = new Zeugniss
zeugniss.Bwl = 1
zeugniss.Vwl = 1
zeugniss.Mathe = 1
zeugniss.Sport = 1
zeugniss.Spanisch = 2
zeugniss.Politik = 2
zeugniss.Deutsch = 3
zeugniss.Englisch = 3

// 2b)
// Deklarieren, Instanziieren und Initialisieren Sie ein Objekt von der Zeignisklasse.

let zeugniss1 = new Zeugniss
zeugniss1.Bwl = 1
zeugniss1.Vwl = 2
zeugniss1.Mathe = 1
zeugniss1.Sport = 3
zeugniss1.Spanisch = 2
zeugniss1.Politik = 2
zeugniss1.Deutsch = 1
zeugniss1.Englisch = 3
zeugniss1.Durchschnitt = 1.875


// 2c)
// Geben Sie die Eigenschaftswerte Ihres Objekts auf der Konsole aus.

console.log("Die Noten des Schülers sind: Mathe " + zeugniss.Mathe + "; Englisch " + zeugniss.Englisch + "; Deutsch " + zeugniss.Deutsch+ "; BWL "+ zeugniss.Bwl+ "; VWL "+ zeugniss.Vwl + "; Sport "+ zeugniss.Sport + "; Spanisch "+ zeugniss.Spanisch + "; Politik "+ zeugniss.Politik)


// 2d) NUR KLAUSURSCHREIBER
// Berechnen Sie die Durchnittsnote Ihres Objekts. Geben Sie die Durchschnittsnote auf der Konsole aus.

zeugniss.Durchschnitt = (zeugniss.Bwl + zeugniss.Vwl + zeugniss.Deutsch + zeugniss.Mathe + zeugniss.Spanisch + zeugniss.Sport + zeugniss.Englisch + zeugniss.Politik) / 8
console.log("Der Noten Durchschnitt des Schülers ist: "+ zeugniss.Durchschnitt)

// 2e) NUR KLAUSURSCHREIBER
// Lisa hat die Durchsnittsnote 3, Tom hat die Durschnittsnote 4, Max hat die Durschnittsnote 5
// Vergleichen Sie Ihre Zeugnis-Objekt-Durchschnittsnote aus 2d) mit den Zeugnisdurchschnittsnoten von Lisa, Tom und Max.
// Wenn Ihre Zeugnis-Objekt-Durschnittsnote besser ist als die der anderen, dann soll das auf der Konsole entsprechend
// ausgegeben werden. Wenn die Note schlechter ist als die aller anderen, soll das ebenfalls ausgegeben werden.
// Ergänzen Sie die Eigenschaft "Klassenbeste" in Ihrem Zeugnisobjekt. 
// Setzen Sie die Eigenschaft entsprechend der Zeugnisnote auf true oder false
// Es hilft Ihnen dabei die Funktion Math.min() aus der Math-Bibliothek.
// Beispiel der Anwendung von Math.min():
// let x = Math.min(5, 10); --> Es werden 5 und 10 verglichen. x nimmt jetzt den Wert 5 an, da 5 der niedrigste der kommaseparierten Werte ist.

if(zeugniss.Durchschnitt < Math.min(3, 4, 5)){
    console.log("Durchschnittsnote Besser als die der Anderen")
    zeugniss.Klassenbeste = true
} else {
    zeugniss.Klassenbetse = false
}
if(zeugniss.Durchschnitt > Math.max(3, 4, 5)){
    console.log("Durchschnittsnote schlechter als die der Anderen")
}

if(zeugniss.Klassenbeste){
    console.log("mein schüler ist Klasenbester")
}

console.log("Aufgabe 3")
// Es gilt:
// Rabatt = Listenpreis · Rabatt-Prozentsatz : 100 %
// Netto-Rechnungsbetrag = Listenpreis – Rabatt
// MwSt = Netto-Rechnungsbetrag · MwSt-Prozentsatz : 100 %
// Brutto-Rechnungsbetrag = Netto-Rechnungsbetrag + MwSt
// Skonto = Brutto-Rechnungsbetrag · Skonto-Prozentsatz : 100 %
// Zahlungsbetrag = Brutto-Rechnungsbetrag – Skonto

// Der Netto-Rechnungsbetrag liegt bei 370,00 EUR.
// Die Mehrwertsteuer hängt von der Produktart ab: 
// * Lebensmittel, Zeitung und Buch: 7%
// * alles andere: 19%
// Dieses Produkt hat die Produktart "Zeitung"

// 3a)
// Deklarieren, Instanziieren Sie ein Objekt mit allen genannten Eigenschaften. 

class Produkt{
    constructor(){
        this.art
        this.mwstsatz
        this.mwst
        this.Nettorechnungsbetrag
        this.Bruttorechnungsbetrag
        this.SkontoProzent
        this.Zahlungsbetrag
        this.Rabatt
        this.RabattProzent
    }
}


// 3b
// Initialisieren Sie Ihr Objekt mit den gegebenen Werten. 
// Geben Sie die einen Anwortsatz auf der Konsole aus.

let produkt = new Produkt
produkt.art= "Zeitung"
produkt.Nettorechnungsbetrag = 370
if(produkt.art === "Zeitung" || produkt.art ==="Lebensmittel" || produkt.art === "Buch"){
    produkt.mwstsatz = 0.07
} else {
    produk.mwstsatz = 0.19
}

console.log("der Netto-Rechnungsbetrag ligt bei: " + produkt.Nettorechnungsbetrag + ". von der Produktart: "+ produkt.art + " liegt der MWST satz bei: "+ produkt.mwstsatz )

// 3c)
// Berechnen Sie die MwSt in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.

produkt.mwst = produkt.Nettorechnungsbetrag * produkt.mwstsatz
console.log("Die Mehrsertsteuer beträgt: "+ produkt.mwst + " euro")



// 3d)
// Berechnen Sie den Eigenschaftswert des Brutto-Rechnungsbetrags. 
// Wenn die Produktart sich ändert, muss Ihre Berechnung sich anpassen.
// Geben Sie den Wert in einen Anwortsatz auf der Konsole aus.

produkt.Bruttorechnungsbetrag = produkt.Nettorechnungsbetrag + produkt.mwst
console.log("der Bruttorechnungsbetrag beträgt: " + produkt.Bruttorechnungsbetrag + " euro")



// 3e) NUR KLAUSURSCHREIBER
// Das Skonto ist gestaffelt abhängig vom Brutto-Rechnungsbetrags.
// Brutto-Rechnungsbetrag kleiner als   |     Skonto
//                                  100 | 1
//                                  200 | 1,1
//                                  300 | 1,4
//                                  400 | 1,5
//                                  500 | 1,6
//                                  500 | 1,7
//                                  500 | 1,8
//                                  500 | 1,9
//                                  500 | 2

// Berechnen Sie das Skonto und geben Sie das Ergebnis auf der Konsole aus.

if(produkt.Bruttorechnungsbetrag < 100){
    produkt.SkontoProzent = 1
} else {
    if(produkt.Bruttorechnungsbetrag < 200){
        produkt.SkontoProzent = 1.1
    } else {
        if(produkt.Bruttorechnungsbetrag < 300){
            produkt.SkontoProzent = 1.4
        } else {
            if(produkt.Bruttorechnungsbetrag < 400){
                produkt.SkontoProzent = 1.5
            } else {
                if(produkt.Bruttorechnungsbetrag < 500){
                    produkt.SkontoProzent = 1.6
                
                    
                }
            }
        } 
    }
}
console.log("das skonto beträgt: " + (produkt.Bruttorechnungsbetrag * produkt.SkontoProzent/100)+ " euro")

console.log("Aufgabe 4") // NUR KLAUSURSCHREIBER

// Sie wollen Ihre Auto-Kaufentscheidung mit einem Programm stützen.

// 4a) // NUR KLAUSURSCHREIBER
// Erstellen Sie zwei Auto-Objekte mit den Eigenschaften Name, Leistung, Geschwindigkeit, Preis, Verbrauch
// Initialisieren Sie mit realsitischen Werten.

class Auto{
    constructor(){
        this.Name
        this.Leistung
        this.Geschwindigkeit
        this.Preis
        this.Verbrauch
    }
}

let auto1 = new Auto
auto1.Name = "polo"
auto1.Leistung = 105
auto1.Geschwindigkeit = 150
auto1.Preis = 9000
auto1.Verbrauch = 3

let auto2 = new Auto
auto2.Name = "mokka"
auto2.Leistung = 120
auto2.Geschwindigkeit = 160
auto2.Preis = 10000
auto2.Verbrauch = 4

// 4b) // NUR KLAUSURSCHREIBER
// Vergleichen Sie die beiden Autos:
// Wenn eines der Autos in Preis und Verbrauch besser ist, dann soll es das Auto werden.
// Wenn Preis und Verbrauch gleich sind, dann entscheidet die Geschwindigkeit.
// Wenn auch die Geschwindigkeit gleich ist, entscheidet die Leistung.
// Geben Sie entsprechende Antworten auf der Kosnole aus.

if(auto1.Preis < auto2.Preis && auto1.Verbrauch < auto2.Verbrauch){
    console.log("es wird auto1")
} else {
    if(auto2.Preis < auto1.Preis && auto2.Verbrauch < auto1.Verbrauch){
        console.log("es wird auto2")
    }
}

if(auto1.Preis === auto2.Preis && auto1.Verbrauch === auto2.Verbrauch){
    if(auto1.Geschwindigkeit < auto2.Geschwindigkeit){
        console.log("es wird auto2")
    } else {
        if(auto2.Geschwindigkeit < auto1.Geschwindigkeit){
            console.log("es wird auto1")
        } else {
            if(auto1.Leistung < auto2.Leistung){
                console.log("es wird auto2")
            } else {
                if(auto2.Leistung < auto1.Leistung){
                    console.log("es wird auto1")
                }
            }
        }
    }
        
}
