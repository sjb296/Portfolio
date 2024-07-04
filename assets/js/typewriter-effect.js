let currentIndex = 0;
let currentText = '';
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenTexts = 3000;

const type = () => {
    // Get the element and its phrases
    const el = document.querySelector(".typewriter");
    const phrases = el.dataset.phrases.split(";");

    const currentString = phrases[currentIndex];
    if (isDeleting) {
        // Remove a letter
        currentText = currentString.substring(0, currentText.length - 1);
    } else {
        // Add a letter
        currentText = currentString.substring(0, currentText.length + 1);
    }

    el.textContent = currentText;

    let timeout = typingSpeed;
    if (isDeleting) {
        timeout = deletingSpeed;
    }

    if (!isDeleting && currentText === currentString) {
        timeout = delayBetweenTexts;
        isDeleting = true;
    } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % phrases.length;
        timeout = typingSpeed;
    }

    setTimeout(type, timeout);
};

document.addEventListener("DOMContentLoaded", type);