const themeToggle = document.querySelector(".theme-toggle") as HTMLButtonElement | null;

const THEME_KEY: string = "portfolio-theme";
let direction: number = 1;

interface theme {
    mode: string;
    label: string;
}

const themes: theme[] = [
    { mode: "light",  label: "Light" },
    { mode: "system", label: "System" },
    { mode: "dark",   label: "Dark" },
];

function setTheme(mode: string) {
    document.documentElement.classList.remove("theme-system", "theme-light", "theme-dark");
    document.documentElement.classList.add(`theme-${mode}`);
    localStorage.setItem(THEME_KEY, mode);

    if (themeToggle) {
        const theme = themes.find((theme) => theme.mode === mode) ?? themes[0];
        themeToggle.dataset.theme = theme.mode;
        themeToggle.setAttribute("aria-label", `Toggle color theme, ${theme.label}`);
        themeToggle.classList.add("theme-animate");
        window.setTimeout(() => themeToggle.classList.remove("theme-animate"), 350);
    }
}

function initializeTheme() {
    const stored      = localStorage.getItem(THEME_KEY) as string | null;
    const defaultMode = stored || "system";
    setTheme(defaultMode);
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
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
    });
}

initializeTheme();