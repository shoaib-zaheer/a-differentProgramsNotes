##### what is an Array in JavaScript 
- **Array (number and strings)?**
In array the elements counting is starting from 0, 1, 2, 3 .... etc.

```javascript
let nums = [100, 25, 300, 72];

let num = 23;

function setup (){
    createCanvas(400, 400);
}

function draw () {
    background (0);
    ellipse (150, 150, num, num );
    ellipse (nums[2], nums[0], 30, 30);
}
```
Adding Text in script with array

```javascript
let words = ["Nice", "Bad", "Good", "Awesome"];

function setup (){
    createCanvas(400, 400);
}

function draw () {
    background (150);
  
    textSize(30);
    text("Good", 12, 200);
}
  // ==================================

  let words = ["Nice", "Bad", "Good", "Awesome"];

function setup (){
    createCanvas(400, 400);
}

function draw () {
    background (150);
  
    textSize(30);
    text(words[3], 12, 200);
}
```
You can add other function `mousePressed()` to move along the Array.

```javascript
let words = ["Rect", "Ellipse", "Line", "Text", "Welcome", "Shape",];

// the index value should be zero to start from zero in array.
let index = 0; 

function setup (){
    createCanvas(500, 500);
}

function draw () {
    background (0);
    
    fill (255);
    textSize(30);
    text(words[index], 200, 250); 
}
// by pressing the mouse array string is changing.
function mousePressed() {
    index = index + 1;
}
```
Once the count down reached the value of 10 start the counting from 0 again.

```javascript
let words = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]; 
// Count down start from 0 up to 10.

let index = 0;

function setup (){
    createCanvas(500, 500);
}

function draw () {
    background (0);
    
    fill (255);
    textSize(30);
    // Defining the array value to index not as actual array value 
    text(words[index], 250, 250); 
}

function mousePressed() {
    index = index + 1;

    // Here you can add if to start the count down from 0 back
    if (index == 10){ 
        index = 0;
    }
}
```

```javascript

function mousePressed() {
    index = index + 1;
    
    /* You can use > length() < here 
    as user add more array elements it can be show in screen*/
    if (index == words.length){
        index = 0;
    }
}
```

- **Making an array of objects (literal objects).**

- **Constructor function to make objects.**

- **`Push()` and `splice()`.** 

- **Objects that you interact with (clicking on an object)**

- **Objects that talk to each other (nested loop).**
