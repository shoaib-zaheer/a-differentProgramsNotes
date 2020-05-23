let bubbles = [];

function setup(){
    createCanvas(600, 600);
    for (let i = 0; i < 20; i++){// adding loops of 5 bubble
    let x = random(width)
    let y = random(height)
    let r = random(10, 50)
    let b = new Bubble(x, y, r);
    bubbles.push(b);// pushing b bubble in side array
    }
}
function draw(){
    background(0);
    // loop of drawing the bubbles.
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
    }
    
    object1(){
        stroke(255);
        strokeWeight(3);
        fill(random(255),0, random(200), 80);
        ellipse(this.x, this.y, this.s * 2);
    }
    
    move(){
        this.x = this.x + random (-5, 5);
        this.y = this.y + random (-5, 5);
}
}