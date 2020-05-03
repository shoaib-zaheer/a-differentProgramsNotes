#### StarField in process of shining.

> This will work as animation for star but the effect is vice versa, from shining going back to dark and back to shining star.

```javascript

let stars = [];

function setup(){
    createCanvas(400, 400);
    
    for (let i = 0; i < 100; i++){
        let x = random(0, width);
        let y = random(0, height);
        let z = width;
        let b = new Star(x, y, z)
        stars.push(b)
    }
}

function draw (){
    background(0);
    for (let i = 0; i < stars.length; i++){
        stars[i].show();
        stars[i].object();
    }
}

class Star{
    
    constructor(x, y ,z){
    this.x = map (x / z, 0, 1, 0, width);
    this.y = map (y / z, 0, 1, 0, height);
    this.z = z; 
    }
    
    object(){
        this.z = this.z -1;
    }
    
    show(){
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.z, this.z);
    }
}
```
**In this** section we divide the width and height in to 2 so as it go out the speed also going to be come faster and faster, also the problem with going inward is fixed, now the stars are going outward.

```javascript
let stars = [];

function setup(){
    createCanvas(400, 400);
    
    for (let i = 0; i < 400; i++){
        let x = random(-width, width);// by adding -width
        let y = random(-height, height);// adding - height
        let z = width;
        let b = new Star(x, y, z)
        stars.push(b)
    }
}

function draw (){
    background(0);
    translate(width/2, height/ 2); // also it is dividing width and height in to 2
    for (let i = 0; i < stars.length; i++){
        stars[i].show();
        stars[i].object();
    }
}

class Star{
    
    constructor(x, y, z){
    this.x = x;
    this.y = y;
    this.z = width; 
    }
    
    object(){
        this.z = this.z -1;
    }
    
    show(){
        fill(255);
        noStroke();
        
        let tempx = map(this.x / this.z, 0, 1, 0, width);
        let tempy = map(this.y / this.z, 0, 1, 0, height);
        ellipse(tempx, tempy, 8, 8);
    }
}
```
**As** the stars are going out of his position, using `if()` function we re position them back to a `random()` places.
```javascript

let stars = [];

function setup(){
    createCanvas(800, 800);
    
    for (let i = 0; i < 2000; i++){
        let x = random(-width, width);
        let y = random(-height, height);
        let z = width;
        let b = new Star(x, y, z)
        stars.push(b)
    }
}

function draw (){
    background(0);
    translate(width/2, height/ 2);// making the canvas in half so half stars travel to right and half to left.
    for (let i = 0; i < stars.length; i++){
        stars[i].show();
        stars[i].object();
    }
}

class Star{
    
    constructor(x, y, z){
    this.x = x;
    this.y = y;
    this.z = random(width); // also random position to this.z
    }
    
    object(){
        this.z = this.z -5;// to control the speed.
        // we use below [if (){}] to re position the stars.
         if (this.z < 1){
          this.z = width
          this.x = random(-width, width);
          this.y = random(-height, height);
      }
    }
        show(){
        fill(255);
        noStroke();
        
        let tempx = map(this.x / this.z, 0, 1, 0, width);
        let tempy = map(this.y / this.z, 0, 1, 0, height);
        let r = map(this.z, 0, width, 10 , 0);/* As th stars are far awy they become
        small and once they reach near it become bigger and bigger with r variable */
        ellipse(tempx, tempy, r, r);
    }
}
```

```javascript
class Star{
    
    constructor(x, y, z){
    this.x = x;
    this.y = y;
    this.z = random(width); 
    this.pz = 0;
    }
    
    object(){
        this.z = this.z -10;
         if (this.z < 1){
          this.z = width;
          this.x = random(-width, width);
          this.y = random(-height, height);
// this.pz will start the line from start of this.z point up to the end of this.z point.          
          this.pz = this.z; 
      }
    }
    
    show(){
        fill(255);
        noStroke();
        
        let tempx = map(this.x / this.z, 0, 1, 0, width);
        let tempy = map(this.y / this.z, 0, 1, 0, height);
        let r = map(this.z, 0, width, 5 , 0);
        
        ellipse(tempx, tempy, r, r);
        
// this.x & y will divide the two point of this.pz and make map for it.
        let sx = map(this.x / this.pz, 0, 1, 0, width);
        let sy = map(this.y / this.pz, 0, 1, 0, height);
        
        this.pz = this.z;
        // line to show at the end like tail.
        stroke(255);
        line(sx, sy, tempx, tempy);
    }
}
```