/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants
// Die Anweisungen werden von oben nach unten abgearbeitet.
// der wert 300 wird von nach rechts nach links zugewiesen an die konstante namens port.
const PORT = 3000;
// der wert '0.0.0.0' wird zugewisen an eine const HOST 
const HOST = '0.0.0.0';


// App
const app = express();
app.get('/', (req, res) => {

	// res ist die antwrt des servers an den Browser.
	// send() ist die anweisung etwas an den browser zu senden
	// 'Hello...' ist der wert, der an die anweisung send() übergeben wird
	// res.send('Hello remote world!\n');

	// das res-objekt kann noch mehr als nur eine zeichenkette an den
	// browser zu senden. Das res-Objekt kann mit der funktion render()
	// eine html-Datei an den browser senden.
	res.render('index.ejs',{});
});

// mit listen wird der server angewiesen, auf dem angegebenden HOST und
// PORT zu lausche. 
app.listen(PORT, HOST);

// Mit der anweisung console.log()wird dem Server administrator auf der
// KOnsole angezeigt, was der Server macht. der Programmierer schreibt dazu
// in die Runden klammer den Ausdruck, der auf der Konsole angezeigt 
// werden sol. Die werte der Beiden konstanten HOST und PORT werden in den
// ausdruck übergeben. Ein Verb mit anschließenden runden Klammer steht
// immmer für eine Anweisung etwas zu tun.
console.log(`Running on http://${HOST}:${PORT}`);