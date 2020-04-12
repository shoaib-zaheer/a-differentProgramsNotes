## function basic - p5.js

two way to use function in p5

- 1 Call a function from p5 `ellipse (200, 200, 50,50);` which lives inside p5 library. 
- 2 Define a setup, `function setup(){}` p5 will execute at the beginning of the program.

why it is important to call or define your own function.

- `modularity` sometime writing 100 lines of codes inside `function draw()` with deferent task, but dividing them in different modules and then writing them in separate function which help to arrange and mange your code more easily and properly.

- `reusability` after writing a function or drawing a ship once and want to use it again you can just recall it by function and just changing the parameters will make your work easy not by writing or drawing the same drawing.


```javascript
let ball = {
    x: 300,
    y: 200,
    xspeed: 4,
    yspeed: -3
}

function setup() {
    createCanvas(600, 400);
}

function draw(){
    background(0);
    noStroke();
    fill(random(250),0,random(100), 80);
    
    ellipse(ball.x, ball.y, 24, 24);
    
    if (ball.x > width || ball.x < 0){
        ball.xspeed = ball.xspeed * -1;
    }
    if (ball.y > height || ball.y < 0){
        ball.yspeed = ball.yspeed * -1;
    }
    ball.x = ball.x + ball.xspeed;
    ball.y = ball.y + ball.yspeed;
}
```

```javascript

let ball = {
    x: 300,
    y: 200,
    xspeed: 4,
    yspeed: -3
}

function setup() {
    createCanvas(600, 400);
}

function draw(){

  move();
  bounce();
  display();
}

function move(){
  ball.x = ball.x + ball.xspeed;
    ball.y = ball.y + ball.yspeed;
}

function bounce(){
   if (ball.y > height || ball.y < 0){
        ball.yspeed = ball.yspeed * -1;
    }

function display(){
  noStroke();
    fill(random(250),0,random(100), 80);
    
    ellipse(ball.x, ball.y, 24, 24);
}

```
```javascript
```
```javascript
```
```javascript
```