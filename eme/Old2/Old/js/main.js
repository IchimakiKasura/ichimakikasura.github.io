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