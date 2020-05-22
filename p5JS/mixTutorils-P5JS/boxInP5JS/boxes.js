function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(51);
  
  stroke(200);
  noFill();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100);
}