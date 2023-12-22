const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const particlesArray = [];

const mouse = {
    x: undefined,
    y: undefined
}

canvas.addEventListener('mousemove', event => {
    mouse.xMove = event.x;
    mouse.yMove = event.y;
});

function setCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvas();

class Particle {
    constructor() {
        // this.x = mouse.x;
        // this.y = mouse.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }
    draw() {
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticlesArray() {
    for (let i = 0; i < 100; i++) {
        particlesArray.push(new Particle());
    }
}
initParticlesArray();
console.log(particlesArray);

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].size < 0.3) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}
animate();
