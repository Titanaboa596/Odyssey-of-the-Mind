// script.js
const player = document.querySelector('#player'); // Adjust the selector based on your actual player element
const movePlayer = 10; // Set your desired movement speed

const handleMovement = (e) => {
    let left = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    const bottom = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));

    switch (e.key) {
        case 'a':
            if (left <= 0) return (player.style.left = 0);
            player.style.left = left - movePlayer + 'px';
            break;
        case 'd':
            // Handle right movement
            break;
        case 'w':
            // Handle up movement
            break;
        case 's':
            // Handle down movement
            break;
    }
};

window.addEventListener('keydown', handleMovement);
