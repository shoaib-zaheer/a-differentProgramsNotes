#### Object and Images - P5-JS

```javascript
let bubbles = [];

let picture;

function preload(){
    picture = loadImage('unnaSDAsd.jpg');
}

function setup(){
    createCanvas(600, 600);
    for (let i = 0; i < 10; i++){
    let x = random(width)
    let y = random(height)
    let r = random(10, 50)
    let b = new Bubble(x, y, r);
    bubbles.push(b);
    }
}

function mousePressed(){
        for (let i = 0; i < bubbles.length; i++){
        bubbles[i].clicked(mouseX, mouseY);
    }
}

function draw(){
    background(0);
    for (let i = 0; i < bubbles.length; i++){
        bubbles[i].object1();
        bubbles[i].move();
    }
}

class Bubble {
    
    constructor(tempX, tempY, tempS){
        this.x = tempX;
        this.y = tempY;
        this.s = tempS; 
        this.brightness = 0;
    }
    
    object1(){
        
        image(picture, this.x, this.y, 40, 50);
        
//        stroke(255);
//        strokeWeight(3);
//        fill(this.brightness, 125);
//        ellipse(this.x, this.y, this.s * 2);
    }
    
    clicked(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.s) {
          this.brightness = 255; 
        }
    }
    
    move(){
        this.x = this.x + random (-5, 5);
        this.y = this.y + random (-5, 5);
}
}
```

```javascript

```

```javascript

```
