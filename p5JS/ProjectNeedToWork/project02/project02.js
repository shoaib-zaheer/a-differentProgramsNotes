// Making rain


let drops = [];// an array to draw rain and drops

function setup(){
    createCanvas(500, 600);
    for (let i = 0; i < 2000; i++){ // amount to draw
        let x = 5 + 2 * i;
        drops[i] = new Drop(x, 200);
    }
}
function draw(){
    background(50);
    
    for (let i = 0; i < drops.length; i++){
        drops[i].object1();
        drops[i].move();
    }
    
}
class Drop {
    
    constructor(x, y){
        this.x = random(x);
        this.y = random(y);
        //this.s = tempS;   
    }
    object1(){
        stroke(random(100, 200));
        strokeWeight(random(1, 3)); // control the size
        noFill();
        line(this.x, this.y, this.x, this.y);
    }
    
    move(){
       //this.x = this.x + random (-5, 5);
        if (this.y > height){
        this.y = 0 
    }
        this.y = this.y + random (0.5, 25); // control the speed
}
}