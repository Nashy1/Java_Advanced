const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const penColor = document.getElementById('penColor');
const penWidth = document.getElementById('penWidth');
const btnSave = document.querySelector('.save');
const btnClear = document.querySelector('.clear');
const output = document.querySelector('.output');
const d = {
    draw: false,
    x: 0,
    y: 0,
    lastx: 0,
    lasty: 0
}

btnSave.addEventListener("click", saveImg);
btnClear.addEventListener("click", clearCan);
canvas.addEventListener('mousemove', (e) => {
    d.lastx = d.x;
    d.lasty = d.y;
    d.x = e.clientX;
    d.y = e.clientY;
    draw()

});
canvas.addEventListener("mousedown", (e) => {
    d.draw = true;
});

canvas.addEventListener("mouseup", (e) => {
    d.draw = false;
});

canvas.addEventListener("mouseout", (e) => {
    d.draw = false;
});

function saveImg() {
    let dataURL = canvas.toDataURL();
    console.log(dataURL);
    const img = document.createElement("img");
    output.prepend(img);
    img.setAttribute("src", dataURL);
    const link = document.createElement("a");
    output.append(link);
    let fileName = Math.random().toString(16).substr(-8) +
        ".png"
    link.setAttribute("download", fileName);
    link.href = dataURL;
    link.click();
    output.removeChild(link);
}

function clearCan() {
    let temp = confirm("clear canvas?");
    if (temp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function draw() {
    if (d.draw) {
        ctx.beginPath();
        ctx.moveTo(d.lastx, d.lastx);
        ctx.lineTo(d.x, d.y);
        ctx.strokeStyle = penColor.value;
        ctx.lineWidth = penWidth.value;
        ctx.stroke();
        ctx.closePath();
    }
}