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

// I CAN'T, HOW DID THEY DO IT?
// https://www.toweroffantasy-global.com/
// I don't want to copy straight up I want to code it from scratch, fuck
// EDIT: i cant its buggy
// web scroll
// か(document).evt('wheel', (e) => {

//     // console.table({"mouse": isMouseHover,"scroll": CanScroll,"key": isKeyDown})
//     if (か.isMobile) return;
//     if (!CanScroll) return;
//     if (!isMouseHover) return;
//     if (isKeyDown) return;


//     var ctxMenu = か(".vertical-menu").gt;
//     ctxMenu.style.visibility = "hidden";
//     ctxMenu.style.opacity = 0;

//     if (e.wheelDelta < 0) {

//         // scroll down
//         if (int >= 4) return;
//         int++;
//         location.href = `#${sections[int]}`
//         CanScroll = false;
//     } else {

//         //scroll up
//         if (int == 0) return;
//         int--;
//         location.href = `#${sections[int]}`
//         CanScroll = false;
//     }

//     setTimeout(() => {
//         CanScroll = true;
//     }, 700);

// });