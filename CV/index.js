// Sélectionnez la bande "CONTACT"
const contactBand = document.querySelector('.infinte-scroll.contact1');

// Sélectionnez la fenêtre contextuelle
const contactPopup = document.getElementById('contact-popup');

// Ajoutez un gestionnaire d'événements pour le clic sur la bande "CONTACT"
contactBand.addEventListener('click', function() {
  // Affichez la fenêtre contextuelle en la rendant visible
  contactPopup.style.display = 'block';
});

// Ajoutez un gestionnaire d'événements pour le clic en dehors de la fenêtre contextuelle pour la fermer
window.addEventListener('click', function(event) {
  if (event.target === contactPopup) {
    contactPopup.style.display = 'none';
  }
});
