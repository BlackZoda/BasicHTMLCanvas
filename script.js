const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

//window.addEventListener('resize', drawRect);
window.addEventListener('resize', drawCircle);

function setCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvas();

/*function drawRect() {
    setCanvas();
    ctx.fillStyle = 'white';
    ctx.fillRect(200, 200, 150, 50); // x, y, width, height
}*/

function drawCircle() {
    setCanvas();
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
    ctx.fill();
    ctx.stroke();
}

//drawRect();
drawCircle();
