function openModal(element) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    document.body.classList.add("no-scroll"); // Empêche le scroll
    modal.style.display = "flex"; // Modale centrée avec flexbox
    modalImg.src = element.src;

    // Ajoute un écouteur d'événements pour détecter la touche "Escape"
    document.addEventListener('keydown', handleEscape);
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    document.body.classList.remove("no-scroll"); // Réactive le scroll
    modal.style.display = "none";

    // Supprime l'écouteur d'événements une fois la modale fermée
    document.removeEventListener('keydown', handleEscape);
}

// Fonction qui détecte si la touche "Escape" est pressée
function handleEscape(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}
