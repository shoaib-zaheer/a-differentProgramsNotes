/* Need to change once the ball is complete the pattern it should start drawing with different color then before*/


function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw(){
move();
bounce();
display();
}

let ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
}

function move(){
ball.x = ball.x + ball.xspeed;
ball.y = ball.y + ball.yspeed;
}

function bounce(){
 if (ball.x > height || ball.x < 0){
     ball.xspeed = ball.xspeed * -1;
  }
if (ball.y > height || ball.y < 0){
     ball.yspeed = ball.yspeed * -1;
  }
}

function display(){
noStroke();
  fill(random(250),0,random(100), 80);
  
  ellipse(ball.x, ball.y, 24, 24);
}