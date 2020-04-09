# p5Js

```javascript

let elp = { 
  x: 200,
  y: 200
};

let col={
  r:255,
  g:100,
  b:255
};

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  elp.x = random(0 ,width ); // will randomly generate ellipse in width direction of canvas. 
  elp.y = random(0 ,height);
  
  col.r = random(0, 200);
  col.g = random(0, 100);
  col.b = random(0, 255);
  
  noStroke();
  fill(col.r, col.g, col.b, 50);
  ellipse(elp.x, elp.y, 40, 40);
};

```
` after pressing the mouse you can not draw if you have background active in draw function, if you comment the background out then the rect will also get draw one on top of other.`

```javascript
let x = 200;
let y = 200;

function setup(){
  createCanvas(600, 400);
  background(0);
}

function draw(){
  background(0);
  
  x += random (-5, 5);
  y += random (-5, 5);
  fill (255, 200);
  stroke(255);
  rectMode(CENTER);
  rect(x, y, 20, 20);


if (mouseIsPressed){
  fill (255, 150, 0, 30 );
  noStroke();
  ellipse(mouseX, mouseY, 20, 20 );
}
  }
```
#### Second way of doing
  
```javascript
let x = 200;
let y = 200;
let secondCanvas

function setup(){
createCanvas(500, 500);
secondCanvas = createGraphics(500, 500);
secondCanvas.clear();
background(0);
}
function draw(){
  // No trails  
  background(0);
  x += random (-5, 5);
  y += random (-5, 5);
  
  if (mouseIsPressed){
  secondCanvas.fill (255, 150, 0, 40);
  secondCanvas.noStroke();
  secondCanvas.ellipse(mouseX, mouseY, 20, 20);
}
   image(secondCanvas, 0, 0); 
  
  fill (255, 200);
  stroke(255);
  rectMode(CENTER);
  rect(x, y, 20, 20);
  // Trails    
  }
  
```
  `Drawing star behide the main object in animation`
  
```javascript
let x = 200;
let y = 200;
let secondCanvas

function setup(){
  createCanvas(500, 500);
    secondCanvas = createGraphics(500, 500);
    secondCanvas.clear();
  background(0);
}
function draw(){
  // No trails  
  background(0);
  x += random (-5, 5);
  y += random (-5, 5);

// To make star in the background 

  secondCanvas.fill (255, 150, 0, 40);
  secondCanvas.noStroke();
  let starX = random(width);
  let starY = random(height);
  secondCanvas.ellipse(starX, starY, 5, 5);

    
  fill (255, 200);
  stroke(255);
  rectMode(CENTER);
  rect(x, y, 20, 20);
  // Trails    
     image(secondCanvas, 0, 0); 
  }
```
#### Introduction to Conditional Statements.

```javascript
let x = 200;

function setup(){
    createCanvas(600, 400); 
}
let speed = +3;
function draw(){
    
background(0);
noFill();
stroke(200);
strokeWeight(3);
ellipse(x, 200, 40, 40);
    
 if (x > width){
    speed = -3;
}
x = x + speed;
}
```
#### Else and Else if, AND and OR - p5.js
```javascript

```

