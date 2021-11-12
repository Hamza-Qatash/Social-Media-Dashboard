const dark = document.getElementById("dark");
const light = document.getElementById("light");

window.onload = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        setDarkMode();
    } else if (theme === "light") {
        setLightMode();
    } else {
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? setDarkMode()
            : setLightMode();
    }
};

const setDarkMode = () => {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    dark.checked = true;
};

const setLightMode = () => {
    localStorage.setItem("theme", "light");
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    light.checked = true;
};

dark.addEventListener("change", setDarkMode);
light.addEventListener("change", setLightMode);
