"use strict";

const sections = ["main", "about", "projects", "contact", "footer"];
let int = 0;

(function () {
    let section = location.hash.replace("#", "");
    switch (section) {
        case "main": return int = 0;
        case "about": return int = 1;
        case "projects": return int = 2;
        case "contact": return int = 3;
        case "footer": return int = 4;
    }
})();

// I'd rather hard-code the styles instead of CSS
// because CSS IS A PAIN IN THE ASS.
function MobileSwitch()
{
    let ParagraphIntro = "[Paragraph-Intro]"
    let ParagraphName = "[Paragraph-Name]"
    let ParagraphEtc = "[Paragraph-Etc]"
    let contact = "[ctn]"
    let Adiv = "[aboutDiv]"

    // か("body").gt.style.overflowY = "visible";

    // Main
    か("[Paragraphs]").gt.style.top = "10vh";
    か(ParagraphIntro).gt.style.fontSize = "2vh";
    か(ParagraphIntro).gt.style.left = "-30px";
    か(ParagraphName).gt.style.fontSize = "5vh";
    か(ParagraphName).gt.style.left = "-40px";
    か(ParagraphName).gt.style.whiteSpace = "nowrap";
    か(ParagraphEtc).gt.style.left = "-30px";
    か(ParagraphEtc).gt.style.width = "80vw";
    か(ParagraphEtc).gt.style.fontSize = "2vh";

    // About
    か(`${Adiv} h1`).gt.style.paddingTop = "0vw";
    か(`${Adiv} h1`).gt.style.fontSize = "10vw";
    か(`${Adiv} h2`).gt.style.fontSize = "2vw";
    か("[lng]").gt.style.fontSize = "5vw";

    // Projects


    // Contact
    か(`${contact} h1`).gt.style.fontSize = "5vh";
    か(`${contact} h2`).gt.style.fontSize = "3.5vh";
    か(`${contact} h2`).gt.style.paddingLeft = "4.5vh";
    か(`${contact} p`).gt.style.fontSize = "2vh";
    か(`${contact} p`).gt.style.paddingLeft = "5.5vh";

}

window.onload = () => {

    if (か.isMobile)
        MobileSwitch();

    setTimeout(() => {
        か(".preLoad").sty("opacity", 0);
        か(".nav").sty("top", "0");
    }, 1)

    setTimeout(() => {
        か(".preLoad").sty("display", "none");
        か("[ScrollArrow]").sty("display", "block");
    }, 1350)

    setTimeout(() => {
        か("[ScrollArrow]").sty("display", "block");
    }, 3000)

};