function showConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = ''; // Clear any existing confetti

    const numberOfConfetti = 200;
    for (let i = 0; i < numberOfConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.width = `${Math.random() * 10 + 10}px`;
        confetti.style.height = confetti.style.width;
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${Math.random() * 100}vh`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confettiContainer.appendChild(confetti);

        // Animation
        confetti.animate([
            { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
            { transform: `translateY(100vh) rotate(360deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'ease-out',
            iterations: 1
        });
    }

    // Show fireworks-like crackers
    showCrackers();
}

function getRandomColor() {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A1', '#33FFCE'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function showCrackers() {
    const crackersContainer = document.getElementById('crackers');
    crackersContainer.innerHTML = ''; // Clear any existing crackers

    const numberOfCrackers = 20;
    for (let i = 0; i < numberOfCrackers; i++) {
        const cracker = document.createElement('div');
        cracker.className = 'cracker';
        cracker.style.backgroundColor = getRandomColor();
        cracker.style.left = `${Math.random() * 100}vw`;
        cracker.style.top = `${Math.random() * 100}vh`;
        cracker.style.animationDuration = `${Math.random() * 2 + 1}s`;
        crackersContainer.appendChild(cracker);
    }
}
