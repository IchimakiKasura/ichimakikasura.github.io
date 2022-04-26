"use strict";

const nav_copy = (arg)=>navigator.clipboard.writeText(arg.getSelection())
let btn = か("#button").gt;
let sectionMouseOver = か("[ismousehovered]").gAll;
let CopyButton = か("[menu-copy]");

// #region web scroll thing
sectionMouseOver.forEach(element => {
    element.addEventListener("mouseleave", ()=>{ isMouseHover = false });
    element.addEventListener("mouseover", ()=>{ isMouseHover = true });
});

か(document).evt("keydown", (e)=>{ if(e.ctrlKey) isKeyDown = true;})
か(document).evt("keyup", (e)=>{ isKeyDown = false;})

//#endregion

CopyButton.evt("mouseover",()=>{
    CopyButton.sty("background", "var(--ctx-hover-bg)")
})
CopyButton.evt("mouseleave",()=>{
    if(!window.getSelection().isCollapsed)
        CopyButton.sty("background", "transparent")
})


か(document).evt("contextmenu",function(event){
    event.preventDefault();
    let ctxMenu = か(".vertical-menu").gt;
    ctxMenu.style.opacity = 1;
    ctxMenu.style.visibility = "visible";
    ctxMenu.style.left = (event.pageX)+"px";
    ctxMenu.style.top = (event.pageY)+"px";

    if(window.getSelection().isCollapsed)
    {
        CopyButton.sty("background", "var(--ctx-hover-bg)")
        CopyButton.sty("cursor", "default")
        return;
    }

    CopyButton.sty("background", "transparent")
    CopyButton.sty("cursor", "pointer")

});

か(document).evt("mousedown",function(){
    let ctxMenu = か(".vertical-menu").gt;
    ctxMenu.style.visibility = "hidden";
    ctxMenu.style.opacity = 0;
});

か("[title='Home']").evt("click", ()=>{
    window.open("https://github.com/IchimakiKasura");
});

か("[mobile-nav-menu]").evt("change", (e)=>{
    if(e.target.checked)
    {
        か(".mobile-nav").sty("top", "0px");
        return;
    }

    か(".mobile-nav").sty("top", "-150vh");
});

か(window).resize(()=>{
    location.href = location.hash;
})

か(window).evt("visibilitychange", ()=>{
    if (document.visibilityState == "visible")
        CanScroll = true;
})

function removeNavMobile()
{
    か("[mobile-nav-menu]").gt.checked = false;
    か(".mobile-nav").sty("top", "-150vh");
}