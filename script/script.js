// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

// richiamo il bottone
const bottone = document.querySelector('.button');
// richiamo l'immagine
const immagine = document.querySelector('img');



// Aggiungo un evento al bottone per cambiare l'immagine al clic
bottone.addEventListener('click', function() {
    // Cambia la sorgente dell'immagine con quella nuova
    immagine.src = './img/yellow_lamp.png';   
});



