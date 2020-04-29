#### Mouse Interaction with Objects

 To interact the mouse with the object in or to make an `event`.
 some builtin `events` are in `P5.JS` but we can also make our own event.
 It is not just a programmer job to creating an object or *sketch* in (P5-JS) but also a programmer can figure out, how to find a way for the user to interact with the object.

let's use the old code that we make for *bubble* and make those bubble to react once the mouse is over to it or by clicking.

using the `function mousePressed(){}`

```javascript
let bubble;

function setup(){
    createCanvas(500, 500);
    let x = random(width)
    let y = random(height)
    let r = random(10, 50)
    bubble = new Bubble(x, y, r);
}

function mousePressed(){ 
} // this is a p5 builtin function the idea is right but this will not work.

function draw(){
    background(0);
    bubble.object1();
    bubble.move();
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
        noFill();
        ellipse(this.x, this.y, this.s * 2);
    }
    
    mousePressed(){ // once the mouse is clicked below will be print in console
        console.log('The mouse has been clicked');
    }
    
    move(){
        this.x = this.x + random (-5, 5);
        this.y = this.y + random (-5, 5);
}
}
```
> although the idea is right but this will not work as `mousePressed()` function is p5 function that recognize it, p5 is not going to check your the `class` you created for this to know and process it. 

*let* try the same idea by creating your object inside the class.

```javascript

let bubble;

function setup(){
    createCanvas(500, 500);
    let x = random(width)
    let y = random(height)
    let r = random(10, 50)
    bubble = new Bubble(x, y, r);
}
function mousePressed(){
    bubble.clicked();// this will take the clicked from class of object we created. 
}

function draw(){
    background(0);
    
    bubble.object1();
    bubble.move();
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
        noFill();
        ellipse(this.x, this.y, this.s * 2);
    }
    
    clicked(){ // after this object is called by mousePressed() below message will be print in console.
        console.log('The mouse has been clicked');
    }
    
    move(){
        this.x = this.x + random (-5, 5);
        this.y = this.y + random (-5, 5);
}
}
```
> But the problem with about function is it will not just work once you click the bubble but if you click all over the canvas `mousePressed()` function is working.


*How* to fix this problem that only when the mouse is clicked in side the circle the `mousePressed()` should response, not all over the canvas.

![picture example](08-pictureExample.png)

*If* we apply the above calculation to our code, the mouse will react only when it position inside the circle.

> The distance between center of the circle to its radius is the point to be calculate and should react with mouse.

> if the distance between circle center and mouse is greeter then circle `this.r` (radius), then it is out of the circle if it is less then circle radius, it mean the mouse point is inside the circle.
**Now** by know this we can change our code, and use function `dist(x1, y1, x2, y2);` to calculate the distance. 

```javascript

function mousePressed(){
    bubble.clicked();
}

class Bubble {
    
    clicked(){ 
        let b = dist(mouseX, mouseY, this.x, this.y);
        if (b < this.s){ // If the b is less then circle radius it will console.log will print the message.
            console.log('The mouse has been clicked');
        }

```
Let's push this mouse function in an `Array`.

```javascript
let bubbles = [];

function setup(){
    createCanvas(600, 600);
    for (let i = 0; i < 5; i++){// adding loops of 5 bubble
    let x = random(width)
    let y = random(height)
    let r = random(10, 50)
    let b = new Bubble(x, y, r);
    bubbles.push(b);// pushing b bubble in side array
    }
}

function mousePressed(){// every bubble will react with mouse pressed
        for (let i = 0; i < bubbles.length; i++){
        bubbles[i].clicked();
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
        noFill();
        ellipse(this.x, this.y, this.s * 2);
    }
    
    clicked(){
        let d = dist(mouseX, mouseY, this.x, this.y);
        if (d < this.s) {
        console.log("The mouse has been clicked!");
        }
    }
    
    move(){
        this.x = this.x + random (-5, 5);
        this.y = this.y + random (-5, 5);
}
}
```
To change the color for the bubbles you can use below setup.

```javascript
class Bubble {
    
    constructor(tempX, tempY, tempS){
        this.x = tempX;
        this.y = tempY;
        this.s = tempS; 
        this.brightness = 0; // for color value
    }
    
    object1(){
        stroke(255);
        strokeWeight(3);
        fill(this.brightness, 100);// fill the circle
        ellipse(this.x, this.y, this.s * 2);
    }
    
    clicked(){
        let d = dist(mouseX, mouseY, this.x, this.y);
        if (d < this.s) {
        this.brightness = 255;// once the mouse is clicked.
        }
    }
    
}
```
Drawing the same colorfully circles in `mouseX` & `mouseY`

```javascript
let bubbles = [];

function setup(){
    createCanvas(500, 500);
}

function mouseDragged(){
    let x = mouseX;
    let y = mouseY;
    let r = random(20, 50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
        for (let i = 0; i < bubbles.length; i++){// if you don't want colors just remove this for loop.
        bubbles[i].clicked();
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
    
    constructor(tempX, tempY, tempS){
        this.x = tempX;
        this.y = tempY;
        this.s = tempS; 
        this.R = 0;
        this.G = 0;
        this.B = 0;
    }
    
    object1(){
        stroke(255);
        strokeWeight(3);
        fill(this.R,this.G, this.B, 100);
        ellipse(this.x, this.y, this.s * 2);
    }
    
    clicked(){
        let d = dist(mouseX, mouseY, this.x, this.y);
        if (d < this.s) {
        this.R = random(1,255);
        this.G = random(1,255);
        this.B = random(1,255);
        }
    }
    
    move(){
        this.x = this.x + random (-5, 5);
        this.y = this.y + random (-5, 5);
}
}
```
Also you can make `function mousePressed (){}` so when ever the mouse has been clicked over the shape it may change its color.

```javascript


```