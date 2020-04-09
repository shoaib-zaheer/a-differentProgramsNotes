## Boolean Variables - p5.js 

Boolean is `true` or `false`, also a variable can be a Boolean.

```javascript
let name = true;
```
it is also a boolean, it can happen once the mouse is pressed and it will run until the mouse is released.
```javascript
if (mouseIsPressed){}
```
but below is not a `boolean`, it is an `event`, the function will start running once the mouse is pressed and until other function no going to occur it will run.
```javascript
function mousePressed (){

}
```
#### to make a button using `if (mouseIsPressed){}` function. 
```javascript
function setup() {
    createCanvas(600, 600);
}

function draw(){
    
    background(0);    
    
    stroke(255);
    strokeWeight(4);
    noFill();

if(mouseX > 240 && mouseX < 350 && mouseY > 240 && mouseY < 350){
    if (mouseIsPressed){
    background(100, 255, 0);
}
    fill (150, 0, 250);
}    
    rectMode(CENTER);
    rect(300, 300, 100, 100);
    
}
```
# Making a Boolean Variables

```javascript
let on = false;

function setup() {
    createCanvas(600, 600);
}

function draw(){
    
    background(0);    
if (on){
    background(200,150, 0);
}else{
    background(0)
}
    stroke(255);
    strokeWeight(4);
    noFill(); 
    rectMode(CENTER);
    rect(300, 300, 100, 100);
}

function mousePressed(){
    if (mouseX > 250 && mouseX < 350 && mouseY > 250 && mouseY < 350){
    if (on) {
        on=false;
    }else{
        on = true;
    }
    }
    //on = true;
}
```
#### The Note operator 

```javascript

let on = false;

function setup() {
    createCanvas(600, 600);
}

function draw(){
    
    background(0);    
if (on){
    background(200,150, 0);
}else{
    background(0)
}
    stroke(255);
    strokeWeight(4);
    noFill(); 
    if(mouseX > 240 && mouseX < 350 && mouseY > 240 && mouseY < 350){
    fill (150, 0, 250);
}  
    rectMode(CENTER);
    rect(300, 300, 100, 100);
}

function mousePressed(){
    if (mouseX > 250 && mouseX < 350 && mouseY > 250 && mouseY < 350){
    on = !on;
    }
}
```
