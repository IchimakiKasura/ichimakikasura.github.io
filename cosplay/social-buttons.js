const Socials = [
    {
        url: 'https://www.facebook.com/ichimaki.cos',
        label: 'Facebook',
        image: 'images/fb.png',
        selector: 'facebook'
    },
    {
        url: 'https://www.tiktok.com/@ichimaki.cos',
        label: 'TikTok',
        image: 'images/tiktok.png',
        selector: 'tiktok'
    },
    {
        url: 'https://www.instagram.com/ichimaki.cos',
        label: 'Instagram',
        image: 'images/ig.png',
        selector: 'instagram'
    },
    {
        url: 'https://www.github.com/IchimakiKasura',
        label: 'Github',
        image: 'https://skillicons.dev/icons?i=github',
        selector: 'github'
    },
    {
        url: 'https://www.youtube.com/@KasuraIchimaki',
        label: 'Youtube',
        image: 'images/youtube.png',
        selector: 'youtube'
    },
    {
        url: 'https://discord.com/users/716593062217908274',
        label: 'Discord',
        image: 'https://skillicons.dev/icons?i=discord',
        selector: 'discord'
    },
    {
        url: 'https://ichimakikasura.github.io',
        label: 'Portfolio',
        image: 'https://avatars.githubusercontent.com/u/80595346?v=4%253F',
        selector: 'portfolio',
        borderRadius: '50%'
    },
    // Removed prank lmao idfk
    // {
    //     url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ',
    //     label: 'OnlyFans',
    //     image: 'images/onlyfans.webp',
    //     selector: 'onlyfans',
    //     borderRadius: '10%'
    // }
];
(() => {
    const container = document.querySelector('.social-buttons');
    
    Socials.forEach(btn => {
        const link = document.createElement('a');
        link.href = btn.url;
        link.target = '_blank';
        link.className = 'social-btn';
        link.title = btn.label;
        link.dataset.platform = btn.selector;
        
        const img = document.createElement('img');
        img.src = btn.image;
        img.alt = btn.label;
        img.loading = 'lazy';
        
        if (btn.borderRadius) {
            img.style.borderRadius = btn.borderRadius;
        }
        
        link.appendChild(img);
        container.appendChild(link);
    });
})();