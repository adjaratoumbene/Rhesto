// Fonction pour valider un email avec une regex
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Fonction pour valider un numéro de téléphone avec une regex
function validatePhoneNumber(phoneNumber) {
    const regex = /^\d{10}$/; // Suppose que le numéro de téléphone doit avoir 10 chiffres
    return regex.test(phoneNumber);
}

// Exemple d'utilisation
const emailInput = "test@example.com";
const phoneNumberInput = "1234567890";

if (validateEmail(emailInput)) {
    console.log("L'email est valide.");
} else {
    console.log("L'email n'est pas valide.");
}

if (validatePhoneNumber(phoneNumberInput)) {
    console.log("Le numéro de téléphone est valide.");
} else {
    console.log("Le numéro de téléphone n'est pas valide.");
}

// Créer les cartes et les ajouter au jeu
const images = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
const cards = [...images, ...images];
cards.sort(() => Math.random() - 0.5);

const gameBoard = document.getElementById('game-board');

cards.forEach((image, index) => {
    const card = document.createElement('div');
    card.classList.add('memory-card');
    card.dataset.index = index;
    card.textContent = image;
    card.addEventListener('click', () => flipCard(card));
    gameBoard.appendChild(card);
});

// Interactions utilisateur
const colorPicker = document.getElementById('colorPicker');
const fontSize = document.getElementById('fontSize');
const textToChange = document.getElementById('textToChange');

colorPicker.addEventListener('input', () => {
    textToChange.style.color = colorPicker.value;
});

fontSize.addEventListener('input', () => {
    textToChange.style.fontSize = `${fontSize.value}px`;
});

// Fonction pour retourner une carte
function flipCard(card) {
    // Code pour retourner une carte
}

// Fonction pour vérifier si les cartes retournées sont identiques
function checkForMatch() {
    // Code pour vérifier si les cartes retournées sont identiques
}

// Fonction pour désactiver les cartes identiques
function disableCards() {
    // Code pour désactiver les cartes identiques
}

// Fonction pour retourner les cartes si elles ne sont pas identiques
function unflipCards() {
    // Code pour retourner les cartes si elles ne sont pas identiques
}

// Fonction pour réinitialiser le plateau de jeu
function resetBoard() {
    // Code pour réinitialiser le plateau de jeu
}

// Fonction pour mélanger les cartes
(function shuffle() {
    // Code pour mélanger les cartes
})();

// Ajouter des écouteurs d'événements à toutes les cartes
cards.forEach(card => card.addEventListener('click', flipCard));
// Fonction pour retourner une carte avec une animation
function flipCard(card) {
    if (lockBoard) return;
    if (card === firstCard) return;

    card.classList.add('flip');

    if (!hasFlippedCard) {
        // Première carte retournée
        hasFlippedCard = true;
        firstCard = card;
    } else {
        // Deuxième carte retournée
        secondCard = card;
        checkForMatch();
    }
}

// Fonction pour désactiver les cartes identiques avec une animation
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

// Fonction pour retourner les cartes si elles ne sont pas identiques avec une animation
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}
// Sélection de l'élément contenant le texte
const texteElement = document.querySelector('.texte');

// Fonction pour déplacer le texte
function deplacerTexte() {
    // Récupérer la position actuelle du texte
    let position = parseFloat(texteElement.style.left);

    // Augmenter la position de défilement (vous pouvez ajuster la vitesse ici)
    position -= 1; // Vous pouvez ajuster la vitesse en modifiant cette valeur

    // Vérifier si le texte a atteint la fin de la bande passante
    const largeurBandePassante = document.querySelector('.bande-passante').offsetWidth;
    const largeurTexte = texteElement.offsetWidth;
    if (position < -largeurTexte) {
        // Remettre le texte à la position de départ
        position = largeurBandePassante;
    }

    // Déplacer le texte à la nouvelle position
    texteElement.style.left = position + 'px';
}

// Appeler la fonction de déplacement toutes les X millisecondes pour créer l'animation
setInterval(deplacerTexte, 50); // Vous pouvez ajuster la fréquence de rafraîchissement ici