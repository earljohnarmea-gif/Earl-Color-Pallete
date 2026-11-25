
function generateColors() {
    let colors = document.getElementById("colors");
    colors.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        let hex = "#" + Math.floor(Math.random() * 16777215)
            .toString(16).padStart(6, "0");

        colors.innerHTML +=
            `<div class="color" style="background:${hex}">${hex}</div>`;
    }
}

generateColors();
