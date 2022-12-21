// Chiediamo il nome e il cognome all'utente
const myName = document.getElementById('my_name');

// Chiediamo il chilometraggio del viaggio all'utente
let myKm = document.getElementById('my_km');

// Chiediamo la fascia di età all'utente 
let ageRange = document.getElementById('age-range');

// Generatore
const myGenerate = document.getElementById('generate');

myGenerate.addEventListener('click',

    function() {

    console.log('Il nome e il cognome sono:', myName.value);
        
    console.log('I Km da percorrere sono:', myKm.value);

    console.log("La fascia d'età del cliente è:", ageRange.value);

    const myPrice = 0.21; // Prezzo base al Km

    let totalPrice = myKm.value * myPrice; // Prezzo intero del biglietto

    console.log('Prezzo biglietto:', totalPrice);

    totalPrice = (totalPrice.toFixed(2));

    console.log('Prezzo biglietto arrotondato:', totalPrice);

    if (ageRange.value == 'min') {

        totalPrice = totalPrice - ((totalPrice / 100) * 20);
        totalPrice = (totalPrice.toFixed(2));
        console.log('Prezzo scontato del 20%:',totalPrice);

        document.getElementById('offert').innerHTML = 'Offerta Light';

        document.getElementById('price').innerHTML = totalPrice + ' €';



    } else if (ageRange.value == 'ov') {

        totalPrice = totalPrice - ((totalPrice / 100) * 40);
        totalPrice = (totalPrice.toFixed(2));
        console.log('Prezzo scontato del 40%:',totalPrice);

        document.getElementById('offert').innerHTML = 'Offerta Silver';

        document.getElementById('price').innerHTML = totalPrice + ' €';

    
    } else {

        document.getElementById('offert').innerHTML = 'Offerta Standard';

    }

    document.getElementById('passenger_name').innerHTML = myName.value;

    document.getElementById('cab').innerHTML = Math.floor(Math.random() * 10) + 1;

    document.getElementById('cp_code').innerHTML = Math.floor(Math.random() * 9999) + 9000;

    document.getElementById('price').innerHTML = totalPrice + ' €';

    let myArrow = document.getElementById('my_arrow');

    myArrow.style.display = 'block';

    let ticket = document.getElementById('ticket');

    ticket.style.display = 'block'; 

    }

);

// Annulla 

const cancel = document.getElementById('cancel');

cancel.addEventListener('click',

    function() {

        document.getElementById('ticket').style.display = 'none';

    }
);