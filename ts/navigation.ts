const nav           = document.querySelector(".main-nav") as HTMLElement | null;
const menuToggle    = document.querySelector(".menu-toggle") as HTMLButtonElement | null;
const navHome       = document.querySelector(".nav-home") as HTMLButtonElement | null;
const navLinks      = document.querySelectorAll(".nav-links a") as NodeListOf<HTMLAnchorElement>;

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
    
    navHome?.addEventListener("click", ()=>{
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        window.lenis.scrollTo(0);
    })

    document.addEventListener("click", (event) => {
        if (window.innerWidth <= 900 && !nav.contains(event.target as Node)) {
            nav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            nav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}