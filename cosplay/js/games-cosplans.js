const gamesData = [
    {
        src: 'images/games/gi.png',
        alt: 'Genshin Impact'
    },
    {
        src: 'images/games/zzz.png',
        alt: 'Zenless Zone Zero'
    },
    {
        src: 'images/games/cs2.png',
        alt: 'Counter Strike 2'
    },
    {
        src: 'images/games/val.png',
        alt: 'Valorant'
    },
    {
        src: 'images/games/mc.png',
        alt: 'Minecraft'
    },
    {
        src: 'images/games/lol.png',
        alt: 'League of Legends'
    }
];

const cosplansData = [
    {
        name: 'Clove',
        source: 'Valorant'
    },
    {
        name: 'Frieren',
        source: 'Sousou no Frieren'
    },
    {
        name: 'Megumin',
        source: 'KonoSuba'
    },
    {
        name: 'Furina',
        source: 'Genshin Impact [redo]'
    },
    {
        name: 'Najimi osana',
        source: 'Komi Can\'t Communicate'
    }
];

function initGames() {
    const gamesContainer = document.querySelector('.int-games');
    const existingImages = gamesContainer.querySelectorAll('img');
    existingImages.forEach(img => img.remove());
    
    gamesData.forEach((game, index) => {
        const img = document.createElement('img');
        img.src = game.src;
        img.alt = game.alt;
        img.loading = 'lazy';
        
        if (index === 3) gamesContainer.appendChild(document.createElement('br'));
    
        gamesContainer.appendChild(img);
    });
}

function initCosplans() {
    const cosplansContainer = document.querySelector('.int-cosplans');
    const existingHeaders = cosplansContainer.querySelectorAll('h5');
    existingHeaders.forEach(header => header.remove());
    
    cosplansData.forEach(cosplan => {
        const h2 = document.createElement('h2');
        const nameSpan = document.createTextNode(cosplan.name + ' ');
        const sourceSpan = document.createElement('span');
        sourceSpan.style.fontSize = '5px';
        sourceSpan.textContent = `(${cosplan.source})`;
        
        h2.appendChild(nameSpan);
        h2.appendChild(sourceSpan);
        cosplansContainer.appendChild(h2);
    });
}

(() => {
    initGames();
    initCosplans();
})();