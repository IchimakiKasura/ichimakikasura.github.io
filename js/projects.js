projects = [
    {
        title: "3D Tank Trouble",
        description: "[Discontinued] TankTrouble recreation into 3D.",
        image: "./images/projects/3dtank.jpg",
        link: "./downloadables/beta 5.rar"
    },
    {
        title: "Boxy Quest",
        description: "[Discontinued] An Adventure Quest game featuring boxy.",
        image: "./images/projects/boxy.png",
        link: "https://razinedge.itch.io/bqd"
    },
    {
        title: "LauncherDL",
        description: "[Discontinued] A YTDL Wrapper Application.",
        image: "./images/projects/launcherdl.png",
        link: "https://github.com/IchimakiKasura/Launcher-DL-3"
    },
    {
        title: "Ceele Launcher",
        description: "[Discontinued] All in One Hoyoverse Game Launcher",
        image: "./images/projects/ceele.jpg",
        link: "https://github.com/IchimakiKasura/CeeleLauncher"
    },
    {
        title: "RFID powered School Database",
        description: "[School Project] School database with RFID attendance and security",
        image: "./images/projects/rfid.png",
        link: "https://github.com/IchimakiKasura/prototype"
    },
    {
        title: "Facial Integrated System Technology",
        description: "[School Project] Facial Recognition based Attendance Database System",
        image: "./images/projects/FIST.png",
        link: "https://github.com/IchimakiKasura/prototype-faceapi-code"
    },
    {
        title: "kasu.nhentai.api",
        description: "[DISCONTINUED] A powerful nhentai API wrapper for JavaScript/Node.js",
        image: "./images/projects/kasunhentai.jpg",
        link: "https://ichimakikasura.github.io/kasu.nhentaiapi.js/"
    },
    {
        title: "IC-TAP",
        description: "[School Project] A Flappy Bird Style Game made with Adobe Animate",
        image: "./images/projects/IC-TAP.png",
        link: "./downloadables/ICTAP.apk"
    },
    {
        title: "Trap shop POS Project",
        description: "[School Project] A Point of Sale System* for a Trap Shop",
        image: "./images/projects/pos.png",
        link: "https://ichimakikasura.github.io/pos/"
    },
    {
        title: "UCSP Peta Compilation Website",
        description: "[School Side Project] A Website compiling Performance Tasks for UCSP subject",
        image: "./images/projects/ucsp.png",
        link: "https://ichimakikasura.github.io/ICT/UCSP"
    },
];



(function () {
    const projectCarousel = か(".project-carousel").gt;
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";
        projectCard.onclick = () => {
            if (project.link) {
                window.open(project.link, "_blank");
            }
        };
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy"> 
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        `;
        projectCarousel.appendChild(projectCard);
    });
})();