#### The Snake game first part

```javascript
let s;

function setup (){
  createCanvas(600, 600);
  s = new Snake();
}

function draw(){
background(51);
s.update();
s.show();
}

function Snake(){
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;

  this.update = function() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
  }

  this.show= function (){
    fill(255);
    rect(this.x, this.y, 10, 10);
  }

}
```

```javascript
function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0, -1);
  }else if (keyCode === DOWN_ARROW){
   s.dir (0,1);
   }}else if (keyCode === RIGHT_ARROW){
   s.dir (1,0);
   }}else if (keyCode === LEFT_ARROW){
   s.dir (-1,0);
   }
}
```
to add the scale (snake size become bigger)every time it eat one rect.

![SCL](TheSnakeGame.png)

```javascript
let s;
let scl = 20;

function setup (){
  createCanvas(700, 700);
  s = new Snake();
  frameRate(10);// farm rate make it slower and look like snake game
}

function draw(){
background(51);
s.update();
s.show();
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0, -1);
  }else if (keyCode === DOWN_ARROW){
   s.dir (0,1);
   }else if (keyCode === RIGHT_ARROW){
   s.dir (1,0);
   }else if (keyCode === LEFT_ARROW){
   s.dir (-1,0);
   }
}

function Snake(){
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;

  this.dir = function (x, y){
    this.xSpeed = x;
    this.ySpeed = y;
  }

  this.update = function() {
    this.x = this.x + this.xSpeed * scl;
    this.y = this.y + this.ySpeed * scl;

    this.x = constrain(this.x, 0, width - scl); // it will not go out of the page by X 
    this.y = constrain(this.y, 0, height - scl);// it will keep it inside canvas on Y 
  }
  this.show = function (){
    fill(255);
    rect(this.x, this.y, scl, scl);
  }

}
```
Creating food for the snake to eat
```javascript

let s;
let scl = 20;
let food;

function setup (){
  createCanvas(700, 700);
  s = new Snake();
  frameRate(10);
  food = createVector(random(width), random(height));//creating a Vector for food on random positions.
}

function draw(){
background(51);
s.update();
s.show();

fill (255, 0, 100); // fill the color for food to red ish
rect(food.x, food.y, scl, scl);// size as per the snake.
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0, -1);
  }else if (keyCode === DOWN_ARROW){
   s.dir (0,1);
   }else if (keyCode === RIGHT_ARROW){
   s.dir (1,0);
   }else if (keyCode === LEFT_ARROW){
   s.dir (-1,0);
   }
}

function Snake(){
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;

  this.dir = function (x, y){
    this.xSpeed = x;
    this.ySpeed = y;
  }

  this.update = function() {
    this.x = this.x + this.xSpeed * scl;
    this.y = this.y + this.ySpeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }
  this.show = function (){
    fill(255);
    rect(this.x, this.y, scl, scl);
  }

}

```