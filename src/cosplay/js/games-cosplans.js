const Datas = [
    [
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
    ],
    [
        // {
        //     src: 'images/cosplans/clove.jpg',
        //     alt: 'Clove'
        // },
        // {
        //     src: 'images/cosplans/frieren.jpg',
        //     alt: 'Frieren'
        // },
        // {
        //     src: 'images/cosplans/megumin.jpg',
        //     alt: 'Megumin'
        // },
        // {
        //     src: 'images/cosplans/furina.jpg ',
        //     alt: 'Furina',
        //     title: 'Furina (redo)'
        // },
        // {
        //     src: 'images/cosplans/najimi.jpg',
        //     alt: 'Najimi Osana'
        // },
        // {
        //     src: 'images/cosplans/ellen.jpg',
        //     alt: 'Ellen Joe'
        // }
    ]
]

function initGamesCosplans() {
    [
        {
            div: document.querySelector('.int-games'),
            data: Datas[0]
        },
        {
            div: document.querySelector('.int-cosplans'),
            data: Datas[1]
        }
    ]
    .forEach((container) => {
        container.data.forEach((game, index) => {
            const img = document.createElement('img');
            img.src = game.src;
            img.alt = game.alt;
            img.loading = 'lazy';
            img.title = game.title || game.alt;
        
            if (index === 3) container.div.appendChild(document.createElement('br'));
        
            container.div.appendChild(img);
        });
    });
}

(() => initGamesCosplans())();