const mainElement           = document.getElementById("main") as HTMLElement;
const projectListElement    = document.getElementsByClassName("project-list")[0] as HTMLElement;

const lenisSetting: any = {
    autoRaf: true,

    // anchors: true,
    infinite: false,
    smoothWheel: true,
    allowNestedScroll: true,
    syncTouch: true,
    autoResize: true, 

    duration: 1,
    lerp: 0.05,
    wheelMultiplier: 0.8,
}

//@ts-ignore
const mainScroll = new Lenis({
    ...lenisSetting,
    wrapper: mainElement,
    content: mainElement,
})
//@ts-ignore
const subScroll = new Lenis({
    ...lenisSetting,
    wrapper: projectListElement,
    content: projectListElement,
})
