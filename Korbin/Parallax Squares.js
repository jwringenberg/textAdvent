var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var min = Math.min(width, height);
ctx.fillStyle = "rgba(33, 33, 33, 0.3)";
var angle = 0;
var x = 0, y = 0;

function draw() {
  drawRect(0.1);
  drawRect(0.15);
  drawRect(0.2);
  drawRect(0.25);
  drawRect(0.3);
  drawRect(0.35);
  drawRect(0.4);
}

function drawRect(factor) {
  ctx.save();
  // The offsets become 0 when x and y are center
  // of screen.
  // Bigger factor => smaller offset
  var xOffset = (0.5-x/width)*50/factor;
  var yOffset = (0.5-y/height)*50/factor;
  ctx.translate(width/2 + xOffset, height/2 + yOffset);
  ctx.rotate(angle/factor*0.05);
  ctx.fillRect(-min*(0.5-factor), 
               -min*(0.5-factor), 
               min*(1-factor*2), 
               min*(1-factor*2));
  ctx.restore();
}

function onMove(e) {
  // Get position from touch or mouse
  x = e.touches ? e.touches[0].clientX : e.clientX;
  y = e.touches ? e.touches[0].clientY : e.clientY;
  // x/width is between 0 and 1
  // 0.5 - x/width is between -0.5 and 0.5 so that
  // we rotate both clockwise and counterclockwise
  angle = 0.5 - x/width;
}   

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("touchmove", onMove);

function animate() {
  ctx.clearRect(0, 0, width, height);
  requestAnimationFrame(animate);
  draw();
}

animate();