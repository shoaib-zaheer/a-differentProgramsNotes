##### Loop in Array
 when we want to use all the numbers in array and draw an ellipse so many times in once canvas, we can easily pass the array numbers.

```javascript
let nums = [100, 25, 46, 72];

function setup (){
  createCanvas(500, 500);
}
function draw (){
  background (0);

  ellipse(100, 200, nums[0], nums[0]);
  ellipse(200, 200, nums[1], nums[1]);
  ellipse(300, 200, nums[2], nums[2]);
  ellipse(400, 200, nums[3], nums[3]);
}
```
we can also make the same design using the `if()` loop or far loop.
```javascript

let nums = [100, 25, 46, 72];

function setup (){
  createCanvas(500, 500);
}
function draw (){
  background (0);
  
  for (let i = 0; i < 4; i++){
  stroke(255);
  noFill();
  ellipse(100, 200, nums[i], nums[i]); // Here we use i to draw the ellipse 4 time.
  }
}
```
To change the position of the ellipse we can use `i`.
 
 * 0 * 100 + 100 = 100
 * 1 * 100 + 100 = 200
 * 2 * 100 + 100 = 300
 * 3 * 100 + 100 = 400
   
```javascript
  
  for (let i = 0; i < 4; i++){
  stroke(255);
  fill(51);
  ellipse(i * 100 + 100, 200, nums[i], nums[i]);
  }
}
```
> This is a way using an Array to have many elements but to apply they same action to all those elements.

##### Arrays and Objects
once every things i added in class you don't have to make changes in class to get the changes now it is time to use loop `for(){}` or `while(){}` loops to achive the changes.

````javascript
let bubbles = [];

function setup(){
    createCanvas(600, 600);
    for (let i = 0; i < 5; i++){ // to increase the amount change number 5 in this line.
        let x = 50 + 30 * i; // to increase the space between the bubbles ever 10 PX + 30 times * i value.
        bubbles[i] = new Bubble(x, 200, 40);
    }
}

function draw(){
    background(0);
    
    for (let i = 0; i < bubbles.length; i++){ // the bubble can be draw at the total length of canvas.
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
        ellipse(this.x, this.y, this.s);
    }
    
    move(){
       
        //if (this.y > height){
        //this.y = 0 
    //}
        this.x = this.x + random (-5, 5);
        this.y = this.y + random (-5, 5);
}
}
````
to change the size of ever bubble 

```javascript
let bubbles = [];

function setup(){
    createCanvas(600, 600);
    for (let i = 0; i < 200; i++){
        let x = random(width);// change the x position random().
        let y = random(height);// to change the y position random().
        let s = random(5, 30); // to change the size as random().
        bubbles[i] = new Bubble(x, y, s);
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
    }
    
    object1(){
        //stroke(255);
        //strokeWeight(3);
        //noFill();
        noStroke();
        fill(250, 10);// 250 for R G B and 10 is for blur ness. 
        ellipse(this.x, this.y, this.s * 2);
    }
    
    move(){
       
        //if (this.y > height){
        //this.y = 0 
    //}
        this.x = this.x + random (-5, 5);
        this.y = this.y + random (-5, 5);
}
}
```
To make bubble after clicking the mouse
```javascript


let bubbles = [];

function setup(){
    createCanvas(500, 500);
}

function  mousePressed(){
  let r = random(10, 50); // random() size.
  let b = new Bubble(mouseX , mouseY, r); // to make bubble on x and y position of a mouse.
  bubbles[0] = b; // to put the bubble in 0 position in array, but only one bubble at time.
}

function draw(){
    background(0);
    
    for (let i = 0; i < bubbles.length; i++){
        bubbles[i].object1();
        bubbles[i].move();
    }
}

```
`push()` function can be used to add object in an array.
> Note: push() can only add object at the end of an array.

```javascript
function  mousePressed() {
    
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);// you can push(); b object in array
}

```
using `function mouseDragged()`, to draw the object in screen 
```javascript
function  mouseDragged() {
    
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);// you can push(); b object in array
}

```