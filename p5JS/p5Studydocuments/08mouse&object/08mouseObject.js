
let bubbles = [];

function setup(){
    createCanvas(1500, 900);
    for (let i = 0; i < 200; i++){
    let x = random(width)
    let y = random(height)
    let r = random(20, 50)
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
        this.R = 0;
        this.G = 0;
        this.B = 0;
    }
    
    object1(){
        stroke(255);
        strokeWeight(3);
        // noStroke(); 
        fill(this.R, this.G, this.B, 100);
        ellipse(this.x, this.y, this.s * 2);
    }
    
    clicked(px, py){
        let d = dist(px, py, this.x, this.y);
        if (d < this.s) {
        this.R = random(1,255);
        this.G = random(1,255);
        this.B = random(1,255);
        }
    }
    
    move(){
        this.x = this.x + random (-5, 5);
        this.y = this.y + random (-5, 5);
}
}