// Dynamically create cherry blossom effect
const container = document.getElementById('cherryBlossomContainer');
const blossomCount = 15;

function createCherryBlossom() {
    const blossom = document.createElement('div');
    blossom.className = 'cherry-blossom';
    
    // Random position (spawn above viewport)
    const startX = Math.random() * 100;
    blossom.style.left = startX + '%';
    blossom.style.top = '-50px'; // Spawn 50px above viewport
    
    // Random animation duration
    const duration = 8 + Math.random() * 8;
    const delay = Math.random() * 5;
    
    blossom.style.animation = `fall ${duration}s linear ${delay}s infinite`;
    
    container.appendChild(blossom);
    
    // Remove and recreate after animation completes to save memory
    setTimeout(() => {
        blossom.remove();
    }, (duration + delay) * 1000);
}

// Create initial blossoms
for (let i = 0; i < blossomCount; i++) {
    setTimeout(() => {
        createCherryBlossom();
    }, i * 200);
}

// Continuously create new blossoms
setInterval(() => {
    createCherryBlossom();
}, 500);
