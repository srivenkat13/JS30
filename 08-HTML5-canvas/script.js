const canvas = document.querySelector("#plane");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = "#ca9bf7";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 10;

//variables to for drawing the line
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; //stops the fn from running when there is  no 'mousedown'
 context.strokeStyle = `hsl(${hue}, 100% , 50%)`
  context.beginPath();

  context.moveTo(lastX, lastY);
  
  context.lineTo(e.offsetX, e.offsetY);
  
  context.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
  //setting stroke color
  hue++;
  if (hue >= 360){
      hue=0;
  }
  // stroke width 
  if( context.lineWidth >= 130 || context.lineWidth <= 1){
      direction = !direction;
  }
  if(direction){
      context.lineWidth++
    }else{
      context.lineWidth--
  }
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
