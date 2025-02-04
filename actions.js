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

function calcular() {
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var soma = num1 + num2

    document.getElementById('resultado').innerText = soma
}

document.getElementById('btncalcular').addEventListener('click', calcular);