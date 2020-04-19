### classes in JavaScript with ES6 - p5

- **`Encapsulation`** : To encapsulate ever thing to be a thing in side and object.

or the idea is to encapsulation of `data` & `function` in side an object.

```javascript 
class bubble {
  // writing ever code to make a bubble, or object template.

  // enja mawadi ke ham rahesh pasan kolcha mesazi.
}
```
- **`Main programme`** Then we can use only the class name in our function, in place of writing code to make the thing it self.

```javascript 

function setup(){
 bubble = new bubble;
  // in here `new`will be a key word to constrict a new object instances. 
  // En Kolcha hest..
}
function draw(){
  bubble.move();
  // The idea will be just to use already made bubble and use it in your animation or drawing.
}
```

- **`class`** : In javaScript class can be refer to a template or blueprint for the object.
*A class is an idea of a template. [click me for more ...](https://www.youtube.com/watch?v=T-HGdc8L-7w&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=24)* 

```javascript 

let bubble;

function setup (){
  createCanvas(600, 400);
  bubble = new Bubble();
  print(bubble.x, bubble.y);
}

function draw (){
  background(0);
}

class Bubble{
  constructor (){
    this.y = 200;
    this.x = 150;
  }
}
```
Also we can write the functionality of our `thing` inside the `class`.

```javascript 
let bubble;
let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);
    bubble = new Bubble(); // calling the bubble to be print in screen
    bubble1 = new Bubble();
    bubble2 = new Bubble();
  
}

function draw() {
  background(0);
    bubble.show(); // asking to draw the bubble
    bubble.move(); // asking to move and redraw the bubble
    bubble1.show();
    bubble1.move();
    bubble2.show();
    bubble2.move();
}

class Bubble{
  constructor() {
    this.x = 200;// x possition for the bubble
    this.y = 150; // y possition for the bubble
      this.size = random(1, 20); // size of the bubble 
  }
    show() {
        stroke(200);
        strokeWeight(3);
        noFill();
        ellipse(this.x, this.y, this.size, this.size);
    }
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
}
```