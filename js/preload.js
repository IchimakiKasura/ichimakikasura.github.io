"use strict";

const sections = ["main", "about", "projects", "contact", "footer"];
let int = 0;
let CanScroll = true;
let isMouseHover = false;
let isKeyDown = false;

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

// #region web scroll thing
か(window).scroll(() => {
    if (か.isMobile) location.hash = null;
    if (window.pageYOffset > 300) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
})

か(document).evt('wheel', (e) => {

    // console.table({"mouse": isMouseHover,"scroll": CanScroll,"key": isKeyDown})
    if (か.isMobile) return;
    if (!isMouseHover) return;
    if (!CanScroll) return;
    if (isKeyDown) return;

    var ctxMenu = か(".vertical-menu").gt;
    ctxMenu.style.visibility = "hidden";
    ctxMenu.style.opacity = 0;

    if (e.wheelDelta < 0) {
        // scroll down
        scrollDownPage();
        CanScroll = false;
    } else {

        //scroll up
        scrollUpPage();
        CanScroll = false;
    }

    setTimeout(() => {
        CanScroll = true;
    }, 700);

});
//#endregion

function scrollDownPage() {
    if (int >= 4) return;
    int++;
    location.href = `#${sections[int]}`
}

function scrollUpPage() {
    if (int == 0) return;
    int--;
    location.href = `#${sections[int]}`
}