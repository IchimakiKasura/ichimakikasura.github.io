const container = document.getElementById('cherryBlossomContainer');
const blossomCount = 15;

function createCherryBlossom() {
    const blossom = document.createElement('div');
    blossom.className = 'cherry-blossom';
    
    const startX = Math.random() * 100;
    blossom.style.left = startX + '%';
    blossom.style.top = '-50px';
    
    const duration = 8 + Math.random() * 8;
    const delay = Math.random() * 5;
    
    blossom.style.animation = `fall ${duration}s linear ${delay}s infinite`;
    
    container.appendChild(blossom);
    
    setTimeout(() => {
        blossom.remove();
    }, (duration + delay) * 1000);
}

for (let i = 0; i < blossomCount; i++) {
    setTimeout(() => {
        createCherryBlossom();
    }, i * 200);
}

setInterval(() => {
    createCherryBlossom();
}, 500);
