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
