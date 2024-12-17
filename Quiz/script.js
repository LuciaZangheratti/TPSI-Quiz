// Timer per il quiz
let timerElement = document.getElementById('timer'); // Seleziona l'elemento HTML con l'ID "timer"
let timeRemaining = 60; // Imposta il tempo rimanente a 60 secondi

// Funzione per aggiornare il timer ogni secondo
const timerInterval = setInterval(() => {
    timeRemaining--; // Riduce il tempo rimanente di 1 secondo
    timerElement.textContent = timeRemaining; // Aggiorna il contenuto visivo del timer nell'HTML

    // Controlla se il timer ha raggiunto lo zero
    if (timeRemaining <= 0) {
        clearInterval(timerInterval); // Ferma l'intervallo del timer
        alert('Tempo scaduto! Le risposte sono state inviate.'); // Mostra un messaggio di avviso
        document.getElementById('quizForm').submit(); // Invia automaticamente il form
    }
}, 1000); // La funzione viene eseguita ogni 1000 millisecondi (1 secondo)

// Esegui una funzione quando il form viene inviato
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene il comportamento predefinito di invio del form
        alert('Risposte inviate con successo!'); // Mostra un messaggio di conferma
        // Qui puoi inserire ulteriore logica, ad esempio un invio manuale delle risposte
    });
});
