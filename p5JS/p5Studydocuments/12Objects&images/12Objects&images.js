let bubbles = [];

let flower;
let cartoons = [];

function preload(){
    flower = loadImage('cartoonFolder/flower.png');
    for(i = 0; i < 9; i++){
    cartoons[i] = loadImage(`cartoonFolder/cartoon${i}.jpg`);
    }// new Javascript update it use to join two string in state of + we use ${},
}

function setup(){
    createCanvas(800, 800);
    for (let i = 0; i < 50; i++){
    let x = random(width);
    let y = random(height);
    let r = random(50, 80);
    // let picture = random(cartoons); // also possible not to pass in setup but in class and object.
    let b = new Bubble(x, y, r);
    bubbles.push(b);
    }
}
function mousePressed() {
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
    
    constructor(tempX, tempY, tempS, img){
        this.x = tempX;
        this.y = tempY;
        this.s = tempS;
        this.cartoon = random(cartoons);// just to put random option in here.
    }
    
    object1(){
        image(this.cartoon, this.x, this.y, this.s, this.s);
    }
    
        clicked(px, py) {
        if (px > this.x && px < this.x + this.s && py > this.y && py < this.y + this.s) {
          this.cartoon = flower;//random(cartoons);// after clicking not to change to different cartoon but it should change to new flower picture.
        }
    }
    
    move(){
        this.x = this.x + random (-5, 5);
        this.y = this.y + random (-5, 5);
}
}