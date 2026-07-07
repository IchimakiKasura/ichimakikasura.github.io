const themeToggle = document.querySelector(".theme-toggle") as HTMLButtonElement | null;

const THEME_KEY: string = "portfolio-theme";
const ANIMATION_MS: number = 300;
const snapSound:HTMLAudioElement = new Audio();
let direction: number = 1;
let isLocked: boolean = false;
let isAnimationStillPlayLikeOmfg: number | undefined;

interface theme {
    mode: string;
    label: string;
}

const themes: theme[] = [
    { mode: "light",  label: "Light" },
    { mode: "system", label: "System" },
    { mode: "dark",   label: "Dark" },
];

snapSound.src = "/audio/snap.wav";
snapSound.volume = 0.4;
snapSound.preload = "auto";

function playSnapSound() {
    snapSound.currentTime = 70 / 1000;
    snapSound.play().catch();
}

function setTheme(mode: string) {
    document.documentElement.classList.remove("theme-system", "theme-light", "theme-dark");
    document.documentElement.classList.add(`theme-${mode}`);
    localStorage.setItem(THEME_KEY, mode);

    if (themeToggle) {
        const theme = themes.find((theme) => theme.mode === mode) ?? themes[0];
        themeToggle.dataset.theme = theme.mode;
        themeToggle.setAttribute("aria-label", `Toggle color theme, ${theme.label}`);
    }
}

function initializeTheme() {
    const stored      = localStorage.getItem(THEME_KEY) as string | null;
    const defaultMode = stored || "system";
    setTheme(defaultMode);
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        playSnapSound();
        const current      = themeToggle.dataset.theme || "system";
        const currentIndex = themes.findIndex((t) => t.mode === current);

        let nextIndex = currentIndex + direction;

        if (nextIndex >= themes.length) {
            direction = -1;
            nextIndex = currentIndex + direction;
        } else if (nextIndex < 0) {
            direction = 1;
            nextIndex = currentIndex + direction;
        }

        setTheme(themes[nextIndex].mode);

        if (isAnimationStillPlayLikeOmfg !== undefined)
            window.clearTimeout(isAnimationStillPlayLikeOmfg);

        const animClass = direction === 1 ? "theme-animate" : "theme-animate-back";
        themeToggle.classList.remove(animClass);
        
        requestAnimationFrame(() => {
            themeToggle.classList.add(animClass);

            isAnimationStillPlayLikeOmfg = window.setTimeout(() => {
                themeToggle.classList.remove(animClass);
            }, ANIMATION_MS);
        });
    });
}

initializeTheme();