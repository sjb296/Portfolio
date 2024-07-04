document.addEventListener("mousemove", (e) => {
    const images = document.querySelectorAll(".image-stack__item");
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Rotate images towards mouse cursor with CSS perspective
    images.forEach(image => {
        const rect = image.getBoundingClientRect();
        const imageX = rect.left + rect.width / 2;
        const imageY = rect.top + rect.height / 2;

        const deltaX = e.clientX - imageX;
        const deltaY = e.clientY - imageY;

        const rotateX = (deltaY / centerY) * -3;
        const rotateY = -(deltaX / centerX) * -3;

        image.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
});