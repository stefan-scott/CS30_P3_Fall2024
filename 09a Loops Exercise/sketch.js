// Exercise
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  //TOP LINE
  for(let x = 0; x < width; x+=40){
    circle(x, 0, 20);
    line(x,0,mouseX,mouseY);
  }
}
