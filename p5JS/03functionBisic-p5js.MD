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
### function Parameters and Arguments -p5.js
```javascript

function setup() {
    createCanvas(600, 400);
}

function draw(){

background(50);
    lollipop(300, 200, 50); // lollipop takes argument
    lollipop(200, 100, 50);
    lollipop(100, 50, 50);
    lollipop(400, 100, 50);
    lollipop(500, 50, 50);    
}

function lollipop(x, y, diameter){ // lollipop takes 3 parameter 
    
    fill (0, 200, 255);
    rect(x -5, y, 10, 100);
    
    fill (255, 0, 150);
    ellipse(x, y, diameter, diameter);
}
```
### Function and Return -p5.js
```javascript

function setup() {
    let km = milesToKm(26.3);
    console.log(km);
    var km2 = milesToKm(100);
    print(km2);
}

function milesToKm(miles){
    let km = miles * 1.6;
    return(km)
}
```
