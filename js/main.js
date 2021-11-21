か("body").sty("overflow", "hidden");

document.addEventListener("DOMContentLoaded", ()=>{

    setTimeout(()=>{
        か(".preLoad").sty("opacity", 0);
    }, 1000)

    setTimeout(()=>{
        か(".preLoad").sty("display", "none");
    }, 1350)

    setTimeout(()=>{
        if(か(window).width('inner') > 1400) か(".navbar").sty("top", "20px");
        else か(".navbar").sty("top", "0px");
    }, 1400)

    setTimeout(()=>{
        か(".navbar").sty("position", "sticky");
        か("body").sty("overflow", "auto");
    }, 2400)
})

か(window).resize(()=>{
    if(か(window).width('inner') > 1400) か(".navbar").sty("top", "20px");
    else か(".navbar").sty("top", "0px");
});