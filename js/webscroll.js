sectionMouseOver.forEach(element => {
    element.addEventListener("mouseleave", () => isMouseHover = false );
    element.addEventListener("mouseover", () => isMouseHover = true );
});

か(document).evt("keydown", (e) => { if (e.ctrlKey) isKeyDown = true; })
か(document).evt("keyup", () => isKeyDown = false)

// Scroll up button
か(window).scroll(() => {
    if (か.isMobile) location.hash = null;
    if (window.pageYOffset > 30) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
})

// web scroll
か(document).evt('wheel', (e) => {

    // console.table({"mouse": isMouseHover,"scroll": CanScroll,"key": isKeyDown})
    if (か.isMobile) return;
    if (!CanScroll) return;
    if (!isMouseHover) return;
    if (isKeyDown) return;


    var ctxMenu = か(".vertical-menu").gt;
    ctxMenu.style.visibility = "hidden";
    ctxMenu.style.opacity = 0;

    if (e.wheelDelta < 0) {

        // scroll down
        if (int >= 4) return;
        int++;
        location.href = `#${sections[int]}`
        CanScroll = false;
    } else {

        //scroll up
        if (int == 0) return;
        int--;
        location.href = `#${sections[int]}`
        CanScroll = false;
    }

    setTimeout(() => {
        CanScroll = true;
    }, 700);

});