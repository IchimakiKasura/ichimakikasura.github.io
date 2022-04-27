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

window.onload = () => {

    if (か.isMobile) か("body").gt.style.overflowY = "visible";

    setTimeout(() => {
        か(".preLoad").sty("opacity", 0);
        か(".nav").sty("top", "0");
    }, 1000)

    setTimeout(() => {
        か(".preLoad").sty("display", "none");
        か("[ScrollArrow]").sty("display", "block");
    }, 1350)

    setTimeout(() => {
        か("[ScrollArrow]").sty("display", "block");
    }, 3000)


};