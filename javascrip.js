const tree = document.getElementById("tree");
const colors = ["red", "gold", "white"];

// Luces mejor distribuidas
for (let i = 0; i < 26; i++) {
    const light = document.createElement("div");
    light.classList.add("light");

    const y = Math.random() * 190;
    const maxWidth = (190 - y) / 2;
    light.style.top = y + "px";
    light.style.left = Math.random() * maxWidth * 2 - maxWidth + "px";

    tree.appendChild(light);

    setInterval(() => {
        light.style.background =
            colors[Math.floor(Math.random() * colors.length)];
        light.style.color = light.style.background;
    }, 800);
}

// Nieve
for (let i = 0; i < 100; i++) {
    const snow = document.createElement("div");
    snow.classList.add("snow");
    const size = Math.random() * 5 + 3;
    snow.style.width = size + "px";
    snow.style.height = size + "px";
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = Math.random() * 4 + 2 + "s";
    snow.style.opacity = Math.random();
    document.body.appendChild(snow);
}
