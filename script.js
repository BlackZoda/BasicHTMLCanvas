const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

//window.addEventListener('resize', drawRect);
window.addEventListener('resize', drawCircle);

const mouse = {
    xClick: undefined,
    yClick: undefined,
    xMove: undefined,
    yMove: undefined
}
canvas.addEventListener('click', event => {
    mouse.xClick = event.x;
    mouse.yClick = event.y;
});

canvas.addEventListener('mousemove', event => {
    mouse.xMove = event.x;
    mouse.yMove = event.y;
});

function setCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvas();

function drawRect() {
    setCanvas();
    ctx.fillStyle = 'white';
    ctx.fillRect(200, 200, 150, 50); // x, y, width, height
}

function drawCircle(x, y) {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
    ctx.fill();
    ctx.stroke();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(mouse.xMove, mouse.yMove);
    requestAnimationFrame(animate);
}
animate();
