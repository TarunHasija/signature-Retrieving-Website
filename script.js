const colorPicker = document.getElementById("colorPicker");
const canvasColor = document.getElementById("canvasColor"); // Corrected from canvaColor
const canvas = document.getElementById("mycanvas");
const clearBtn = document.getElementById("clearButton");
const saveBtn = document.getElementById("successButton");
const retrieveBtn = document.getElementById("retrieveButton");
const fontPicker = document.getElementById("fontPicker");
const ctx = canvas.getContext('2d');

// let isDrawing = false;
// let lastX = 0;
// let lastY = 0;

colorPicker.addEventListener('change', (e) => {
    ctx.strokeStyle = e.target.value;
});

canvasColor.addEventListener('change', (e) => {
    canvas.style.backgroundColor = e.target.value;
});

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        lastX = e.offsetX;
        lastY = e.offsetY;
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});
