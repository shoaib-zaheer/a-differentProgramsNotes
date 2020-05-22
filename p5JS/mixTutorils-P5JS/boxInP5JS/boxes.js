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

class Box{
  PVector pos;
  float r;

  constructor(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
  }
  box(floatx, floaty, floatz){
    pos = new 
    
  }
}