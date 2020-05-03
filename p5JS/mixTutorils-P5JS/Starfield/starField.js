
let stars = [];

function setup(){
    createCanvas(500, 500);
    
    for (let i = 0; i < 1000; i++){
        let x = random(-width, width);
        let y = random(-height, height);
        let z = width;
        let b = new Star(x, y, z)
        stars.push(b)
    }
}

function draw (){
    background(0);
    translate(width/2, height/ 2);
    for (let i = 0; i < stars.length; i++){
        stars[i].show();
        stars[i].object();
    }
}
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
        
        
        let sx = map(this.x / this.pz, 0, 1, 0, width);
        let sy = map(this.y / this.pz, 0, 1, 0, height);
        
        this.pz = this.z;
        
        stroke(255);
        line(sx, sy, tempx, tempy);
    }
}