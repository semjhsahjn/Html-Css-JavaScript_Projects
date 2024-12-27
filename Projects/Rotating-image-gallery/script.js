const container = document.querySelector('.image-container');
let angle = 0;

document.getElementById('next').addEventListener('click', () => {
    angle -= 60; // Her tıklamada açıyı 60 derece azalt
    container.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
});

document.getElementById('prev').addEventListener('click', () => {
    angle += 60; // Her tıklamada açıyı 60 derece artır
    container.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
});