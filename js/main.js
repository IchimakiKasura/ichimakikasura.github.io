"use strict";

document.addEventListener("contextmenu",function(event){
    event.preventDefault();
    var ctxMenu = か(".vertical-menu").gt;
    // ctxMenu.style.display = "block";
    ctxMenu.style.opacity = 1;
    ctxMenu.style.visibility = "visible";
    ctxMenu.style.left = (event.pageX)+"px";
    ctxMenu.style.top = (event.pageY)+"px";
},false);

document.addEventListener("mousedown",function(event){
    var ctxMenu = か(".vertical-menu").gt;
    ctxMenu.style.visibility = "hidden";
    ctxMenu.style.opacity = 0;
},false);
