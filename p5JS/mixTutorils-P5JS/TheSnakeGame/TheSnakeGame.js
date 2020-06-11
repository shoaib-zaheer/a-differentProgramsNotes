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

if (s.eat(food)){// if the snake eat the food pick the new location.
  pickLocation();
}
s.death();
s.update();
s.show();


fill (255, 0, 100); // here we draw the food with red color.
rect(food.x, food.y, scl, scl);// the rect (food) size is as per snake size.
}

function keyPressed(){ // controlling the snake with keyboard Arrows
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

  this.total = 0; // to make the lent of the snake longer
  this.tail =[]; //tail should be an empty array after eating every food it will add one object in it.


  this.eat = function (pos){ // writing the function if the snake eat the food.
    let d = dist (this.x, this.y, pos.x, pos.y);
    if (d < 1){
      this.total ++; // if it eat food total should go high by 1
      return true;
    }else{
      return false;
    }
  }

  this.dir = function (x, y){
    this.xSpeed = x;
    this.ySpeed = y;
  }

  this.death = function (){ //when the snake will diy
    for (let i = 0; i < this.tail.length; i++){
      let pos = this.tail[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1){ // if the head is hitting any part of the body
        console.log('starting over')
        this.total= 0; // total snake is die and become zero
        this.tail = []; // and tail array will become zero as will
      }
    }

  }

  this.update = function() {
    
    if (this.total === this.tail.length){// mean no food has been eaten yet
      // then shift ever thing over
      for(let i = 0; i< this.total -1; i++){ //make a loop for adding body to the snake or add object in array
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total -1] = createVector(this.x, this.y);// this will allow the current location and after it move / to give the last location
    
    this.x = this.x + this.xSpeed * scl;
    this.y = this.y + this.ySpeed * scl;

    this.x = constrain(this.x, 0, width - scl); // it will not go out of the page by X 
    this.y = constrain(this.y, 0, height - scl);// it will keep it inside canvas on Y 
  }


  this.show = function (){
    fill(255);
    for(let i = 0; i < this.tail.length; i++){
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    
    rect(this.x, this.y, scl, scl);
  }

}