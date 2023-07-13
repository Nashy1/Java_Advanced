let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
// canvas.setAttribute("width", "500");
// canvas.setAttribute("height", "300");
// document.body.prepend(canvas);
const c_v = [];
for (let i = 0; i < 100; i++) {
    c_v.push(0);
}
function matrix () {
    ctx.fillStyle = "rgba(0,0,0,.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'grey';
//    ctx.createLinearGradient("grey,red,yellow,grey");
    c_v.map((posY, index) => {
        let output = Math.random()<0.5?0:1;
        let posX = (index * 10) + 10;
        ctx.fillText(output, posX, posY);
        if (posY > 100 + Math.random() * 300) {
            c_v[index] = 0;
        } else {
            c_v[index] = posY + 10;
        }
    });
  
}
setInterval(matrix,50);

//red
let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext('2d');
// canvas.setAttribute("width", "500");
// canvas.setAttribute("height", "300");
// document.body.prepend(canvas);
const c_v2 = [];
for (let i = 0; i < 100; i++) {
    c_v2.push(0);
}
function matrix2 () {
    ctx2.fillStyle = "rgba(0,0,0,.05)";
    ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
    ctx2.fillStyle = 'red';
   
    c_v2.map((posY, index) => {
        let output = Math.random()<0.5?0:1;
        let posX = (index * 10) + 10;
        ctx2.fillText(output, posX, posY);
        if (posY > 100 + Math.random() * 300) {
            c_v2[index] = 0;
        } else {
            c_v2[index] = posY + 10;
        }
    });
  
}
setInterval(matrix2,50);

//yellow
let canvas3 = document.getElementById("canvas3");
let ctx3 = canvas3.getContext('2d');
// canvas.setAttribute("width", "500");
// canvas.setAttribute("height", "300");
// document.body.prepend(canvas);
const c_v3 = [];
for (let i = 0; i < 100; i++) {
    c_v3.push(0);
}
function matrix3 () {
    ctx3.fillStyle = "rgba(0,0,0,.05)";
    ctx3.fillRect(0, 0, canvas3.width, canvas3.height);
    ctx3.fillStyle = 'yellow';
   
    c_v3.map((posY, index) => {
        let output = Math.random()<0.5?0:1;
        let posX = (index * 10) + 10;
        ctx3.fillText(output, posX, posY);
        if (posY > 100 + Math.random() * 300) {
            c_v3[index] = 0;
        } else {
            c_v3[index] = posY + 10;
        }
    });
  
}
setInterval(matrix3,50);



