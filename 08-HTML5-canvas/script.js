const canvas = document.querySelector("#plane");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = "#ca9bf7";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 5;

//variables to for drawing the line
let isDrawing = false;
let lastX = 0;
let lastY = 0;


function draw(e) {
    console.log(e);
    
    context.beginPath();

    context.moveTo( lastX, lastY);
    
    context.lineTo(e.offsetX , e.offsetY);

    context.stroke();

}

canvas.addEventListener("mousedown", () => {
  isDrawing = true;
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false );
canvas.addEventListener("mouseout", () => isDrawing = false );
