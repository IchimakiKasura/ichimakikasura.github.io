"use strict";

const sections = ["main", "about", "projects", "contact", "footer"];
let int = 0;

(function(){
    let section = location.hash.replace("#","");
    switch(section)
    {
        case "main": return int = 0;
        case "about": return int = 1;
        case "projects": return int = 2;
        case "contact": return int = 3;
        case "footer": return int = 4;
    }
})();

window.onload = ()=>{
    setTimeout(()=>{
        か(".preLoad").sty("opacity", 0);
        か(".nav").sty("top", "0");
    }, 1000)
    
    setTimeout(()=>{
        か(".preLoad").sty("display", "none");
        か("[ScrollArrow]").sty("display", "block");
    }, 1350)

    setTimeout(()=>{
        か("[ScrollArrow]").sty("display", "block");
    }, 3000)
};

var WebScroll = function(e){
    
    var ctxMenu = か(".vertical-menu").gt;
    ctxMenu.style.visibility = "hidden";
    ctxMenu.style.opacity = 0;

    if(e.wheelDelta < 0)
    {
        // scroll down
        if(int >= 4) return;
        int++;
        location.href = `#${sections[int]}`
        
    } else {
        
        //scroll up
        if(int == 0) return;
        int--;
        location.href = `#${sections[int]}`

    }
    removeEventListener('wheel', WebScroll, false);

    setTimeout(()=>{
        addEventListener('wheel', WebScroll, false);
    }, 950);
};

addEventListener('wheel', WebScroll, false);