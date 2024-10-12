function openModal(canvas) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalCopyright = document.getElementById("modalCopyright");
    
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    document.body.classList.add("no-scroll"); // Empêche le scroll
    modal.style.display = "flex"; // Modale centrée avec flexbox
    modalImg.src = canvas.toDataURL(); // Convertir le canvas en image
    modalCopyright.textContent = '© 2024 - Turbo Thrill'; // Récupérer le copyright

    // Ajoute un écouteur d'événements pour détecter la touche "Escape"
    document.addEventListener('keydown', handleEscape);
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Cacher la modale
    document.body.classList.remove("no-scroll"); // Réactiver le scroll
}

function handleEscape(event) {
    if (event.key === 'Escape') {
        closeModal(); // Fermer la modale si la touche 'Escape' est pressée
    }
}
