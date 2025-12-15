const tree = document.getElementById("tree");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const rainbowBtn = document.getElementById("rainbowBtn");

const colors = ["red", "yellow", "blue", "cyan", "pink", "white", "lime"];
let rainbowMode = false;

// Luces
const lights = [];
for (let i = 0; i < 30; i++) {
    const light = document.createElement("div");
    light.classList.add("light");
    light.style.top = Math.random() * 190 + "px";
    light.style.left = Math.random() * 220 - 110 + "px";
    tree.appendChild(light);
    lights.push(light);
}

// Animar luces
setInterval(() => {
    lights.forEach(light => {
        light.style.background =
            colors[Math.floor(Math.random() * colors.length)];
        light.style.color = light.style.background;
    });
}, 500);

// Click en árbol
tree.addEventListener("click", () => {
    tree.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
});

// Música
musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "⏸ Pausar";
    } else {
        music.pause();
        musicBtn.textContent = "🎶 Música";
    }
});

// Modo arcoíris
rainbowBtn.addEventListener("click", () => {
    rainbowMode = !rainbowMode;
    if (rainbowMode) {
        tree.classList.add("rainbow");
        tree.style.animation = "hue 3s linear infinite";
    } else {
        tree.style.animation = "none";
    }
});

// Nieve
for (let i = 0; i < 150; i++) {
    const snow = document.createElement("div");
    snow.classList.add("snow");
    const size = Math.random() * 5 + 3;
    snow.style.width = size + "px";
    snow.style.height = size + "px";
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = Math.random() * 4 + 2 + "s";
    document.body.appendChild(snow);
}
