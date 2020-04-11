## while and for Loops - p5.js

```javascript

function setup(){
    createCanvas(500, 500);
    background(0);
}

function draw(){
    background(0);
    strokeWeight(3);
    stroke(255, 150,0);
    
    for (let i = 0; i <= width; i += 50){
      fill(255, 0, 0);
      ellipse(i, 150, 30, 30);
    }
    
    let z = 0;
    
    while (z <= width){
        fill(z, 0, 150);
        noStroke();
        ellipse(z, 300, 30, 30, 40);
        z += 30;
    }
}
```

```javascript

```

```javascript

```

```javascript

```

```javascript

```