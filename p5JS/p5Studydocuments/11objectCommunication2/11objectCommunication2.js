// have to write the same code and make a way to reduse the number of check in array
// as now it is checking almost for every object, check all the other objects in array
// like for every 1000 objects it checks 100000 


let bubbles = [];
//let afBubble;
function setup(){
    createCanvas(600, 600);
    for (let i = 0; i < 10; i++){
        let x = random(width);
        let y = random(height);
        let s = random (10, 50);
        bubbles[i]= new Bubble(x, y, s);
    }
//    afBubble = new Bubble(300, 300, 30);
}

function draw(){
    background(0);
    
//    afBubble.x = mouseX;
//    afBubble.y = mouseY;
//    afBubble.object1();
//    afBubble.move();

    for (b of bubbles){
    b.object1()
    b.move()
        let overlapping = false;
        for (other of bubbles){
            if (b !== other && b.intersects(other)){
                overlapping = true;
            }
        }
        if (overlapping){
            b.changeColor(255);
        }else{
            b.changeColor(0);
        }
    }
}

class Bubble {
    
    constructor(tempX, tempY, tempS = 30){
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
    
    intersects (other){
        let d = dist (this.x, this.y, other.x, other.y);
        return (d < this.s + other.s);
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