const colorPicker = document.getElementById("colorPicker");
const canvasColor = document.getElementById("canvasColor"); // Corrected from canvaColor
const canvas = document.getElementById("mycanvas");
const clearBtn = document.getElementById("clearButton");
const saveBtn = document.getElementById("successButton");
const retrieveBtn = document.getElementById("retrieveButton");
const fontPicker = document.getElementById("fontPicker");
const ctx = canvas.getContext('2d');


colorPicker.addEventListener('change', (e) => {
    
});

canvasColor.addEventListener('change', (e) => {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
    
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

canvasColor.addEventListener('change',(e)=>{
    ctx.fillStyle = e.target.value;
    ctx.fillRect(0,0,800,500)
})

fontPicker.addEventListener('change',(e)=>{
    ctx.lineWidth = e.target.value;

})

clearBtn.addEventListener('click',(e)=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})

saveBtn.addEventListener('click',(e)=>{
    localStorage.setItem('canvasContents',canvas.toDataURL());

    let link = document.createElement('a');
    link.download= "Your Signature.png";

    link.href = canvas.toDataURL();

    link.click();
})


retrieveBtn.addEventListener('click',(e)=>{
    let savedCanvas = localStorage.getItem('canvasContents');

    if(savedCanvas){
        let img = new Image();
        img.src = savedCanvas;
        ctx.drawImage(img,0,0)
    }
})