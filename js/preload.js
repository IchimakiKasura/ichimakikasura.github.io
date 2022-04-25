"use strict";

const sections = ["main", "about", "project", "contact", "footer"];
let int = 0;

(function(){
    let section = location.hash.replace("#","");
    switch(section)
    {
        case "main": return int = 0;
        case "about": return int = 1;
        case "project": return int = 2;
        case "contact": return int = 3;
        case "footer": return int = 4;
    }
})();

window.onload = ()=>{
    let preload = setTimeout(()=>{
        か(".preLoad").sty("opacity", 0);
    }, 1000)

    let preloadTwo = setTimeout(()=>{
        か(".preLoad").sty("display", "none");
    }, 1350)

};

var WebScroll = function(e){
    
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
    }, 800);
};

addEventListener('wheel', WebScroll, false);