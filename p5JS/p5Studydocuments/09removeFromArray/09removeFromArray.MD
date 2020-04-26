#### Removing Objects from Array
Some changes with 08 mouse and object codes.
```javascript
let bubbles = [];

function setup(){
    createCanvas(600, 600);
    for (let i = 0; i < 10; i++){
        let x = random(width);
        let y = random(height);
        let s = random(20, 50); 
        let b = new Bubble (x, y, s);
        bubbles.push(b);
    }
}

function draw(){
    background(0);
    
    for (let i = 0; i < bubbles.length; i++){
        bubbles[i].rolleover(mouseX, mouseY);
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
//        noStroke();
        fill(this.brightness, 100);// 250 for R G B and 10 is for blur ness. 
        ellipse(this.x, this.y, this.s * 2);
    }
    
    rolleover(px, py){ // once your mouse is over the object, -
  // - the object is changing the color, if the mouse is not over the object it will remain the same. 
        
        let d = dist(px, py, this.x, this.y);
        if (d < this.s){
            this.brightness = 255;
        }else{
            this.brightness = 0;
        }
    }
    
    move(){
        
        
        this.x = this.x + random (-5, 5);
        this.y = this.y + random (-5, 5);
}
}
```
##### How to delete an object from an `ARRAY`.

* `slice()` copy an Array.
* `push()` to add in the end of an Array.
* `pop()` to remove from the end of an Array.
* `shift()` to remove from the front of an Array.
* `unshift()` to add in the front of an Array.
* `splice(pos, 1)` to remove an item by position from an Array.

> Note: All above function are from `javaScript` no from `P5-JS`to read more about an Array `(javascript)` [click...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) 

```javascript

```

```javascript

```

```javascript

```