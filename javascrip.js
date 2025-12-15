// Luces del árbol con cambio de color
const tree = document.getElementById("tree");
const colors = ["red", "yellow", "blue", "pink", "white"];

for (let i = 0; i < 20; i++) {
    const light = document.createElement("div");
    light.classList.add("light");
    light.style.top = Math.random() * 180 + "px";
    light.style.left = Math.random() * 200 - 100 + "px";
    tree.appendChild(light);

    setInterval(() => {
        light.style.background =
            colors[Math.floor(Math.random() * colors.length)];
    }, 800);
}

// Nieve
for (let i = 0; i < 80; i++) {
    const snow = document.createElement("div");
    snow.classList.add("snow");
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = Math.random() * 3 + 2 + "s";
    snow.style.opacity = Math.random();
    document.body.appendChild(snow);
}

