"use strict";

/** scroll up button */
let btn = か("#button").gt;

/** Section element mouseover */
let sectionMouseOver = か("[ismousehovered]").gAll;

/** Context menu Copy button */
const nav_copy = (arg)=>navigator.clipboard.writeText(arg.getSelection())
let CopyButton = か("[menu-copy]");

// web scroll
let CanScroll = true;
let isMouseHover = false;
let isKeyDown = false;

function removeNavMobile() {
    か("[mobile-nav-menu]").gt.checked = false;
    か(".mobile-nav").sty("top", "-150vh");
}

//#region Context menu Copy
CopyButton.evt("mouseover", () => CopyButton.sty("background", "var(--ctx-hover-bg)"))
CopyButton.evt("mouseleave", () => {
    if (!getSelection().isCollapsed) CopyButton.sty("background", "transparent")
})
//#endregion

か("[title='Visit my Github']").evt("click", () => open("https://github.com/IchimakiKasura"));

か("[mobile-nav-menu]").evt("change", (e) => {
    if (e.target.checked) {
        か(".mobile-nav").sty("top", "0px");
        return;
    }

    か(".mobile-nav").sty("top", "-250rem");
});

か(window).resize(() => {
    if(location.hash)
        location.href = location.hash
});

か(window).evt("visibilitychange", () => {
    if (document.visibilityState == "visible")
        CanScroll = true;
});

// Project Carousel Infinite Scroll
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.project-carousel');
    if (carousel) {
        const cards = Array.from(carousel.querySelectorAll('.project-card'));
        for (let i = 0; i < 3; i++) {
            cards.forEach(card => {
                const clone = card.cloneNode(true);
                carousel.appendChild(clone);
            });
        }
    }
});

// About text
か("#abouttxt").html(`<br><br>
The name is <a href="https://github.com/IchimakiKasura" target="_blank" style="color:red;text-decoration:none;">Ichimaki Kasura</a>,
I do mostly <a href="/cosplay" target="_blank" style="color:red;text-decoration:none;">cosplays</a> now and other hobbies.<br>
I barely do coding these days.<br><br>
I do cosplays, guitar <i>(e-guitar)</i>, build computers, and some Arduino stuffs<br>
or mini-side projects. I have little bit of knowledge/skills on videography and<br>
editing not that really amusing but its enough. Leaning more on travelling and <br>
adventure stuff because I kinda want to explore the world while I'm still young.<br>
As for coding, I used to do web development, game development, and some<br>
desktop applications. But now I barely code these days since I'm focusing<br>
more on my other hobbies. I still do code on the side for fun or for small<br>
projects.`)

// Skill icons
const skills = [
    {
        icon: "https://skillicons.dev/icons?i=nodejs",
        title: "Node JS",
        spacing: " "
    },
    {
        icon: "https://skillicons.dev/icons?i=cs",
        title: "C# (dotnet)",
        spacing: " "
    },
    {
        icon: "https://skillicons.dev/icons?i=js",
        title: "Javascript",
        spacing: " "
    },
    {
        icon: "https://skillicons.dev/icons?i=html",
        title: "Hyper Text Markup Language",
        spacing: "<br><br>"
    },
    {
        icon: "https://skillicons.dev/icons?i=php",
        title: "[No longer learning] HyperText Preprocessor",
        spacing: " ",
        opacity: "0.5"
    },
    {
        icon: "https://skillicons.dev/icons?i=java",
        title: "Java",
        spacing: " "
    },
    {
        icon: "https://skillicons.dev/icons?i=arduino",
        title: "Arduino",
        spacing: " "
    },
    {
        icon: "https://skillicons.dev/icons?i=py",
        title: "Python",
        spacing: "<br><br>"
    },
    {
        icon: "https://skillicons.dev/icons?i=mysql",
        title: "[No longer learning] MySQL",
        spacing: " ",
        opacity: "0.5"
    },
    {
        icon: "https://skillicons.dev/icons?i=bash",
        title: "Bash",
        spacing: " "
    },
    {
        icon: "https://skillicons.dev/icons?i=unity",
        title: "Unity3D",
        spacing: " "
    },
    {
        icon: "https://skillicons.dev/icons?i=dotnet",
        title: "[No longer learning] Dotnet Framework/Core",
        spacing: "<br><br>"
    },
    {
        icon: "https://skillicons.dev/icons?i=vscode",
        title: "vscode",
        spacing: " "
    },
    {
        icon: "https://skillicons.dev/icons?i=ps",
        title: "Photoshop",
        spacing: "<br>"
    }
]

skills.forEach(skill => document.querySelector(".skills-container").innerHTML += `<img src="${skill.icon}" title="${skill.title}" ${skill.opacity ? `style="opacity: ${skill.opacity};"` : ''}>${skill.spacing}`)