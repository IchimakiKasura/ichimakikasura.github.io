interface projectData {
    title: string;
    sub: string;
    desc: string;
    img: string;
    link?: string;
}

const data: projectData[] = [
    {
        title: "⭐ Stew",
        sub: "Build Tool | Static Site Generator",
        desc: "Purpose-built for developers who value simplicity and control, this template combines raw HTML and CSS with the reliability of type-safe JavaScript. It delivers a clean, modern development experience without the overhead of large frameworks, featuring a streamlined build pipeline, optimized output, and an intuitive project structure. The result is a lightweight foundation that stays true to the web platform while providing the tools needed to build fast, maintainable, and scalable websites.\n\n Made in 2026",
        img: "/images/projects/stew.png",
        link: "https://ichimakikasura.github.io/Stew/"
    },
    {
        title: "⭐ IchiProtoTech",
        sub: "Embedded System Service | Freelance Service",
        desc: "ichiProtoTech is a specialized freelance development service that provides affordable, budget-friendly hardware and Internet of Things (IoT) prototyping solutions tailored specifically for student projects and academic requirements. The platform focuses on building functional, low-cost working models using popular microcontrollers like Arduino, ESP32, and Raspberry Pi to help learners meet school defense and thesis objectives. By combining technical expertise in embedded systems with support services like basic programming tutorials and computer repair, ichiProtoTech bridges the gap between complex engineering concepts and practical, accessible implementation for beginners and DIY enthusiasts.\n\n Made in 2026",
        img: "/images/projects/ichiprototech.png",
        link: "https://ichiprototech.com/"
    },
    {
        title: "⭐ MeguClock",
        sub: "Embedded System Hardware | C/C++",
        desc: "MeguClock is a customized digital clock project built on the Arduino Uno/Nano platforms that features a blend of functional hardware and playful, \"goofy\" software elements. Leveraging a 1.8-inch ST7735 display and a DS3231 real-time clock module, the device includes hardware-integrated alarms with hardcoded sound bites, a customizable color interface, and a randomized message ticker that updates every ten seconds. The project is notable for its use of highly optimized, independent libraries for the display and RTC, which have been stripped of unnecessary code to maximize the limited memory of standard microcontrollers. With a focus on DIY accessibility, it utilizes a simple two-button control scheme and a passive buzzer for audio alerts, providing a modular foundation for hobbyists to experiment with embedded C++ and hardware interfacing.\n\n Made in 2026",
        img: "/images/projects/meguclock.jpg",
        link: "https://github.com/IchimakiKasura/MeguClock"
    },
    {
        title: "⭐ Facial Integrated System Technology",
        sub: "School project | Facial Recognition Attendance System | Node.js",
        desc: "Facial Integrated System Technology is a comprehensive full-stack Node.js application that automates attendance tracking through advanced facial recognition and school policy integration. This high-performance prototype leverages the Face-API library to provide simultaneous detection for up to five individuals using diverse hardware inputs, including USB webcams and Raspberry Pi-powered IP cameras. The system is engineered with a versatile triple-interface architecture—featuring dedicated portals for public, admin, and mobile users—while ensuring data accessibility by exporting real-time attendance logs directly to Excel formats. Designed for rapid deployment in academic environments, the platform features automated face registration and localized caching to ensure fast loading times and immediate synchronization of student information.\n\n Made in 2025",
        img: "/images/projects/FIST.png",
        link: "https://github.com/IchimakiKasura/prototype-faceapi-code"
    },
    {
        title: "💖 RFID Powered School Database",
        sub: "School project | Web App with integrated Database and RFID | Node.js",
        desc: "The School Database Application with RFID is a robust desktop prototype built on the Electron.js framework, designed to streamline student data management through physical hardware integration. The system features a modern user interface crafted with HTML, CSS, and Less, providing a seamless experience while managing student identification via RFID technology. Primarily engineered for the SL040 Ver1.1 RFID reader, the application captures unique chip UIDs to automate entry logging and record-keeping within a localized environment. Additionally, the project includes a companion web portal for remote data access and is optimized for Node.js, offering a practical, ready-to-use solution for academic or small-scale institutional attendance requirements.\n\n Made in 2024",
        img: "/images/projects/rfid.png",
        link: "https://github.com/IchimakiKasura/prototype"
    },
    {
        title: "💖 Ceele Launcher",
        sub: "Wrapper | Desktop Application | C#",
        desc: "CeeleLauncher is a lightweight, open-source game launcher for HoYoverse titles that serves as a high-performance alternative to official software, maintaining an exceptionally small footprint of less than 5MB. Developed using .NET 7, the application features a modernized UI that prioritizes utility by including direct shortcuts for daily check-ins, interactive maps, and screenshot management while removing non-essential social media links. The project is now completely discontinued and no longer maintained following the release of the official HoyoPlay platform. Although it is no longer receiving updates, the source code remains publicly available under the MIT license for users interested in forking or archiving the legacy tool.\n\n Made in 2023",
        img: "/images/projects/ceele.jpg",
        link: "https://github.com/IchimakiKasura/CeeleLauncher"
    },
    {
        title: "💖 LauncherDL-3",
        sub: "Wrapper | Desktop Application | C#",
        desc: "Launcher DL 7.1 is a high-performance audio and video downloader GUI built on the .NET 7 framework, designed as a modern wrapper for the yt-dlp engine. This project serves as a functional platform for media extraction, evolving through multiple iterations from basic HTML designs to a structured C# environment to ensure peak efficiency. The current build focuses exclusively on yt-dlp compatibility to overcome the limitations of legacy tools, providing a streamlined interface for the latest streaming standards. While legacy versions (v1-v6) are no longer maintained, the latest stable release offers a complete, open-source solution for users and developers who have the .NET 7 SDK installed.\n\n Made in 2021",
        img: "/images/projects/launcherdl.png",
        link: "https://github.com/IchimakiKasura/Launcher-DL-3"
    },
    {
        title: "💖 IC-TAP",
        sub: "School project | Game Development | Adobe Animate",
        desc: "A Flappy Bird-inspired Android game created in Adobe Animate with an endless gameplay with a scaling difficulty. Made for school project performance task.\n\n Made in 2025",
        img: "/images/projects/IC-TAP.png"
    },
    {
        title: "Erisu-Corner",
        sub: "Web Development",
        desc: "Another web development project to test my ability to design a website. The original website that was made from Wordpress and even the facebook page is no longer exist. This site will stay forever as my learning progress :>\n\n Made in 2021",
        img: "/images/projects/erisu.png",
        link: "https://ichimakikasura.github.io/erisu-corner-project/"
    },
    {
        title: "Trap Shop POS",
        sub: "School project | Web Development",
        desc: "My POS project is a web-based payment system prototype I developed for my school requirements, hosted directly via GitHub Pages. Built primarily with JavaScript, the application provides a functional interface for managing transactions and processing simulated online payments. I’ve structured the repository to include dedicated image assets and binary folders, ensuring the system is lightweight and easy to deploy for academic demonstrations. The project is open-source under the MIT license, serving as a practical example of front-end development for small-scale institutional use.\n\n Made in 2024",
        img: "/images/projects/pos.png",
        link: "https://ichimakikasura.github.io/pos"
    },
    {
        title: "💖 UCSP Peta Compilation",
        sub: "School project | Web Development",
        desc: "Designed and managed a web compilation portal for Grade-11 ICT students to host their UCSP Performance Tasks. The site organizes student-led blogs and video content into a single, mobile-responsive directory for easier grading and peer review.\n\n Made in 2023",
        img: "/images/projects/ucsp.png",
        link: "https://ichimakikasura.github.io/ICT/UCSP"
    },
    {
        title: "kasu.nhentaiapi.js",
        sub: "API Wrapper, Web Scraper | Node.js",
        desc: "A Node.js API wrapper that simplifies interaction with nhentai by providing an easy-to-use interface for users.\n\n Made in 2021",
        img: "/images/projects/kasunhentai.jpg",
        link: "https://github.com/IchimakiKasura/kasu.nhentaiapi.js"
    },
    {
        title: "Sosharumedia",
        sub: "Stack Development | XAMPP",
        desc: "A full stack website using XAMPP, created for the fun and learning. It's a social media platform. Likely stopped due to lack of security knowledge (XSS) as the site is built from ground up.\n\n Made in 2020",
        img: "/images/projects/sosharu.png",
        link: "https://github.com/IchimakiKasura/sosharumedia"
    },
    {
        title: "Boxy Quest",
        sub: "Game Development | Unity3D",
        desc: "A 2D adventure game featuring exploration, platforming, and puzzle-solving mechanics built as a personal game development project.\n\n Made in 2019",
        img: "/images/projects/boxy.png",
        link: "https://razinedge.itch.io/bqd"
    },
    {
        title: "3D Tank Trouble",
        sub: "Game Development | Unity3D",
        desc: "3D Tank Trouble Beta 3 is a stylized 3D action prototype heavily influenced by the TankTrouble maze-combat formula, retaining the signature top-down playstyle while modernizing the visual environment. The project preserves the core strategic loop of navigating structured mazes and utilizing bouncing projectiles to eliminate opponents, though it does not aim for a 1:1 functional replica of the original game's mechanics. Developed as a standalone desktop experience, the game leverages 3D environmental physics to enhance spatial awareness and trick-shot calculations within its narrow corridors.\n\n Made in 2017",
        img: "/images/projects/3dtank.jpg",
        link: "https://www.youtube.com/watch?v=ILb6QLAXqog"
    },
];

const previewTitle = document.getElementById("p-title") as HTMLHeadingElement;
const previewSubtitle = document.getElementById("p-desc") as HTMLParagraphElement;
const previewImage = document.getElementById("p-img") as HTMLImageElement;
const teachingImage = document.getElementById("teaching-image") as HTMLImageElement | null;
const teachingCounter = document.getElementById("teaching-counter") as HTMLSpanElement | null;
const galleryButtons = document.querySelectorAll(".gallery-btn") as NodeListOf<HTMLButtonElement>;
const nav = document.querySelector(".main-nav") as HTMLElement | null;
const menuToggle = document.querySelector(".menu-toggle") as HTMLButtonElement | null;
const navLinks = document.querySelectorAll(".nav-links a") as NodeListOf<HTMLAnchorElement>;
const revealElements = document.querySelectorAll<HTMLElement>(".reveal");
const teachingImages = Array.from({ length: 6 }, (_, index) => `/images/workshop/${index + 1}.jpg`);
let teachingIndex = 0;
const SOCIAL_LINKS: Record<string, string> = {
    dc: "https://discord.com/users/1515722036209520940",
    gh: "https://github.com/IchimakiKasura",
    gm: "malto:ichimakikasura@gmail.com"
};

document.querySelectorAll<HTMLElement>("[data-social]").forEach((btn) => {
    btn.addEventListener("click", () => {
        const platform = btn.dataset.social;

        if (platform && SOCIAL_LINKS[platform]) {
            if(platform == 'gm') {
                window.location.href = SOCIAL_LINKS[platform];
            } else window.open(SOCIAL_LINKS[platform]);
        }
    });
});

function createProject(index: number) {
    const projectItem = document.createElement("div");
    const projectTitle = document.createElement("h3")
    const projectSubtitle = document.createElement("span");

    projectItem.classList.add("project-item");
    projectTitle.innerText = data[index].title;
    projectSubtitle.innerText = data[index].sub;
    projectItem.appendChild(projectTitle);
    projectItem.appendChild(projectSubtitle);

    projectItem.addEventListener("mouseover", () => showProject(index));

    if(data[index].link)
        projectItem.addEventListener("click", () => window.open(data[index].link, "_blank"));
    
    return projectItem;
}

function showProject(index: number) {
    // Update Preview Box
    previewTitle.innerText = data[index].title;
    previewSubtitle.innerText = data[index].desc;
    previewImage.src = data[index].img;
    previewImage.style.removeProperty("object-position");
}

data.forEach((_, index) => {
    const projectGrid = document.querySelector(".project-list") as HTMLDivElement;
    const projectItem = createProject(index);
    projectGrid.appendChild(projectItem);
});

function updateTeachingImage() {
    if (!teachingImage || !teachingCounter) return;

    teachingImage.src = teachingImages[teachingIndex];
    teachingImage.alt = `Teaching students ${teachingIndex + 1}`;
    teachingCounter.textContent = `${teachingIndex + 1} / ${teachingImages.length}`;
}

galleryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const direction = button.dataset.direction === "next" ? 1 : -1;
        teachingIndex = (teachingIndex + direction + teachingImages.length) % teachingImages.length;
        updateTeachingImage();
    });
});

updateTeachingImage();

const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target as HTMLElement;
                const delay = Number(target.dataset.delay ?? 0);
                target.style.transitionDelay = `${delay}s`;
                target.classList.add("is-visible");
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.16 })
    : null;

revealElements.forEach((element) => {
    if (revealObserver) {
        revealObserver.observe(element);
    } else {
        element.classList.add("is-visible");
    }
});

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("click", (event) => {
        if (window.innerWidth <= 900 && !nav.contains(event.target as Node)) {
            nav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            nav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}