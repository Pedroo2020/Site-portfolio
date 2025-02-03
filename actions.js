document.addEventListener("DOMContentLoaded", function () {
    const themeCheckbox = document.querySelector(".theme-checkbox");
    const body = document.body;

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        themeCheckbox.checked = true;
    }

    themeCheckbox.addEventListener("change", function () {
        if (themeCheckbox.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    });
});
