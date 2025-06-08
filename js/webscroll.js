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