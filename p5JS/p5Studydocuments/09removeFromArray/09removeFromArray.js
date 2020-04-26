
let bubbles = [];

function setup(){
    createCanvas(600, 600);
    for (let i = 0; i < 50; i++){
        let x = random(width);
        let y = random(height);
        let s = random(20, 50);
        let b = new Bubble (x, y, s);
        bubbles.push(b);
    }
}
function mousePressed(){
    for (let i = bubbles.length - 1; i >= 0 ; i--){
            if(bubbles[i].rollover(mouseX, mouseY)){
             bubbles.splice(i, 1);
            }
}
}
function draw(){
    background(0);
    
    for (let i = 0; i < bubbles.length; i++){
            if(bubbles[i].rollover(mouseX, mouseY)){
             bubbles[i].changeColor(255);
            }else{
                bubbles[i].changeColor(0);
            }
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
        stroke(255);
        strokeWeight(3);
        noFill();
        fill(this.brightness, 100);
        ellipse(this.x, this.y, this.s * 2);
    }
    
    changeColor(bright){
        this.brightness = bright;
    }
    
    rollover(px, py){
        
        let d = dist(px, py, this.x, this.y);
        if (d < this.s){
            return true;
        }else{
            return false;
        }
    }
    
    move(){
        this.x = this.x + random (-5, 5);
        this.y = this.y + random (-5, 5);
}
}