const tree = document.getElementById("tree");
const colors = ["red", "gold", "white", "pink"];

// Luces animadas
for (let i = 0; i < 22; i++) {
    const light = document.createElement("div");
    light.classList.add("light");
    light.style.top = Math.random() * 190 + "px";
    light.style.left = Math.random() * 220 - 110 + "px";
    tree.appendChild(light);

    setInterval(() => {
        light.style.background =
            colors[Math.floor(Math.random() * colors.length)];
        light.style.color = light.style.background;
    }, 700);
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
