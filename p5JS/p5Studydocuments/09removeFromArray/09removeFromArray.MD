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
            if(bubbles[i].rollover(mouseX, mouseY)){
             bubbles[i].changeColor();
            }// writing above IF class if the mouse is rollover then bubble should call for changeColor function from Bubble class.
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
    
    changeColor(){ // for color change, we make new function 
        this.brightness = 255;
    }
    
    rollover(px, py){
        
        let d = dist(px, py, this.x, this.y);
        if (d < this.s){
            return true; // removing the color from here and if the mouse is on object it is true
        }else{
            return false; // if the mouse is not on top of object it false
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

function mousePressed(){
    for (let i = 0; i < bubbles.length; i++){
            if(bubbles[i].rollover(mouseX, mouseY)){
             bubbles.splice(i, 1); // after mouse is pressed the bubble will be splice or remove. from (i) position number 1.
            }
}
}

function draw(){
    background(0);
    
    for (let i = 0; i < bubbles.length; i++){
            if(bubbles[i].rollover(mouseX, mouseY)){
             bubbles[i].changeColor(255); // changeColor should have parameter to show if mouse is on the object
            }else{
                bubbles[i].changeColor(0); // changeColor will not effect the object if mouse is not over.
            }
                bubbles[i].object1();
            bubbles[i].move();
}
}

class Bubble {
    
    changeColor(bright){ // we have to give arrangement to changeColor function in order to change the color
        this.brightness = bright;
    }
    
}
```

```javascript
/*In this function once object is deleted from an array, the function is not going to start
 counting from start but it will continue on ward */
function mousePressed(){

    for (let i = 0; i < bubbles.length; i++){
            if(bubbles[i].rollover(mouseX, mouseY)){
             bubbles.splice(i, 1);
            }
}
}
let array = [ 'A', 'B', 'C', 'D', 'E']
0 - 1 - 2 - 3 - 4
console.log(array.splice(1, 3));
/*If we delete C the counting will going onward without rechecking*/
let array = ['A', 'B', 'D', 'E']
0 - 1 - 3 - 4
// to fix this problem we can use below code.

function mousePressed(){
    for (let i = bubbles.length - 1 ; i >=0 ; i--){
        // i = to the bubbles, length mines 1
        // i bigger and equal to the 0
        // then i mines mines.
            if(bubbles[i].rollover(mouseX, mouseY)){
             bubbles.splice(i, 1);
            }
}
}
```
You can play around with functions.

```javascript
let bubbles = [];

function setup(){
    createCanvas(600, 600);
   
}


function mouseDragged(){
        let s = 30;
        let b = new Bubble (mouseX, mouseY, s);
        bubbles.push(b);
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
    if (bubbles.length > 50){
        bubbles.splice (0, 1);
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
```