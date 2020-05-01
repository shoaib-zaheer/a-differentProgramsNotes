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

```javascript

```