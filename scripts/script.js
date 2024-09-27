// JavaScript Document
console.log("hi");

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});


// Dit is de javascript voor de tab-shortcut, bron ChatGPT: voeg een shortcut toe op de tab-toets, wanneer een gebruiker op tab drukt, dan moet het id-theme veranderen naar de volgende: verander de radio button checked naar de radio button eronder:
// Functie om naar volgende radio button te gaan
function selectNextRadio() {
    const radios = document.querySelectorAll('input[name="theme"]');
    let selectedIndex = Array.from(radios).findIndex(radio => radio.checked);
    
    // Deselecteer de huidige geselecteerde radio button en selecteert de volgende
    radios[selectedIndex].checked = false;
    let nextIndex = (selectedIndex + 1) % radios.length;
    radios[nextIndex].checked = true;
}

// Listen voor de Tab Key event
document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        event.preventDefault(); // Voorkom dat default tab gedrag in de browser is ingesteld
        selectNextRadio(); // Roep de functie aan
    }
});