## while and for Loops - p5.js

```javascript

function setup(){
    createCanvas(500, 500);
    background(0);
}

function draw(){
    background(0);
    strokeWeight(3);
    stroke(255, 150,0);
    
    for (let i = 0; i <= width; i += 50){
      fill(255, 0, 0);
      ellipse(i, 150, 30, 30);
    }
    
    let z = 0;
    
    while (z <= width){
        fill(z, 0, 150); // Color is going to be incuse and change 
        noStroke();
        ellipse(z, 300, 30, 30, 40); // The position of `Z` will be change ever time new ellipse get draw.
        z += 30;
    }
}
```
 ##### `drawing and animation both together with forLoop`
```javascript
let z = 0;

function setup(){
    createCanvas(500, 500);
    background(0);
}

function draw(){
    background(0);
    noStroke();
    
    for (let i = 0; i <= width; i += 50){
      fill(random(255), 0, random (150)); // changing color by using `random();`
      ellipse(i+z, 250, 30, 30); // with `i` we draw the ellipse and with `z` doing the animation by doing the offset position on z position.
    }
    z += 1;
}
```
#### `Nested Loops - p5.js`
```javascript
function setup(){
    createCanvas(500, 500);
    background(0);
}

function draw(){
    background(0);
    noStroke();
    
    for (let x = 0; x <= mouseX; x += 50){
        for (let y = 0; y <= height; y += 50){     
      fill(random(200), 50, random (255));
      ellipse(x, y, 50, 50);
  }
 }   
}
```
```javascript

function setup(){
    createCanvas(500, 500);
    background(0);
}

function draw(){
    background(0);
    noStroke();
    
    for (let x = 0; x <= width; x += 10){
        for (y = 0; y <= height; y += 10){
            for(size = 0; size <= 50; size += 3){
      fill(random(200), 0, random (150), random(50));
      ellipse(x, y, size, size);
   }
  }
 }   
}

```
