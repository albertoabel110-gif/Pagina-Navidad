body {
    margin: 0;
    height: 100vh;
    background: linear-gradient(#00111a, #003366);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    font-family: Arial, sans-serif;
    color: white;
}

h1 {
    margin-top: 20px;
    font-size: 42px;
}

.mensaje {
    font-size: 18px;
    margin-bottom: 20px;
}

.escena {
    position: relative;
    width: 300px;
    height: 400px;
}

/* Estrella */
.estrella {
    position: absolute;
    top: -20px;
    left: 130px;
    font-size: 40px;
    animation: brillo 1.5s infinite alternate;
}

@keyframes brillo {
    from { transform: scale(1); }
    to { transform: scale(1.3); }
}

/* Árbol */
.tree {
    position: relative;
    margin: auto;
    width: 0;
    height: 0;
    border-left: 120px solid transparent;
    border-right: 120px solid transparent;
    border-bottom: 220px solid green;
}

.tree::before {
    content: '';
    position: absolute;
    top: 40px;
    left: -90px;
    border-left: 90px solid transparent;
    border-right: 90px solid transparent;
    border-bottom: 170px solid #0b6623;
}

.tree::after {
    content: '';
    position: absolute;
    top: 80px;
    left: -60px;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    border-bottom: 120px solid #0e7c3a;
}

/* Tronco */
.trunk {
    width: 40px;
    height: 50px;
    background: #6b3e26;
    margin: auto;
}

/* Luces */
.light {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

/* Regalos */
.regalos {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.regalo {
    width: 35px;
    height: 35px;
    margin: 5px;
    border-radius: 5px;
}

.rojo { background: red; }
.verde { background: green; }
.azul { background: blue; }

/* Santa */
.santa {
    position: absolute;
    bottom: 0;
    right: -60px;
    font-size: 40px;
    animation: caminar 6s infinite linear;
}

@keyframes caminar {
    from { right: -60px; }
    to { right: 320px; }
}

/* Nieve */
.snow {
    position: absolute;
    top: -10px;
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    animation: fall linear infinite;
}

@keyframes fall {
    to {
        transform: translateY(100vh);
    }
}

footer {
    position: absolute;
    bottom: 15px;
    font-size: 16px;
}

