### Constructor Arguments with Classes in Javascript p5.js

- **Classes**

  - *The* since of in Capsulation or, the idea to make template to create an object. 
  - *The* idea behind creating object is to manage your code proper.

> Note: This is one technique for creating multiple objects from the same class with variation. 

- **`Adding Arguments`** 

```javascript
 function setup() {
  createCanvas(600, 400);
    bubble = new Bubble( /*Here you can write the argument */ ); 

    bubble = new Bubble(100, 200, 50);

    /* But you have to pass 3 parameters for in the constructor, 
    in order for the function setup to work*/

    constructor(tempX, tempY, r) {
    this.x = tempX;    // The first this.x is position of bubble in canvas
    this.y = tempY;    /* The first this.y is for the position 
    of bubble in y access in canvas*/
    this.size = r; 
  }


```
> Note: in this example, the parameters are the valuables that goes inside the actual definition of function to work.

```javascript 
let bubble;
let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);
    bubble = new Bubble(100, 200, 50); // 
    bubble1 = new Bubble(400, 300, 100);
    bubble2 = new Bubble(500, 250, 10);
  
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
  constructor(x, y, r) {
    this.x = x;    // temp x 
    this.y = y;    // temp y 
    this.r = r; //  
  }
    show() {
        stroke(200);
        strokeWeight(3);
        noFill();
        ellipse(this.x, this.y, this.r); /* You can use one variable 
        if you want to have the dynameter for the ellipse (width and height) to be the same.*/
    }
  
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
}
```
> Note: The real purpose of constrictor perimeters is to received and argument and pass it to a variable.


