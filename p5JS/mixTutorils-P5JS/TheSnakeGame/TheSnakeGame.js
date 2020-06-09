let s;
let scl = 20;
let food;

function setup (){
  createCanvas(700, 700);
  s = new Snake();
  frameRate(10);// farm rate make it slower and look like snake game
  pickLocation();
}

function pickLocation (){// writing this function is just to put a random place for food in the canvas.
  let cols = floor(width/scl);
  let rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw(){
background(51);
s.update();
s.show();

if (s.eat(food)){// if the snake eat the food pick the new location.
  pickLocation();
}
fill (255, 0, 100); // here we draw the food with red color.
rect(food.x, food.y, scl, scl);// the rect (food) size is as per snake size.
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

  this.eat = function (pos){ // writing the function if the snake eat the food.
    let d = dist (this.x, this.y, pos.x, pos.y);
    if (d < 1){
      return true;
    }else{
      return false;
    }
  }

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