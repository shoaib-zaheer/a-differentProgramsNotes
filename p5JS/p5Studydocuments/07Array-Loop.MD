##### Loop in Array
 when we want to use all the numbers in array and draw an ellipse so many times in once canvas, we can easily pass the array numbers.

```javascript
let nums = [100, 25, 46, 72];

function setup (){
  createCanvas(500, 500);
}
function draw (){
  background (0);

  ellipse(100, 200, nums[0], nums[0]);
  ellipse(200, 200, nums[1], nums[1]);
  ellipse(300, 200, nums[2], nums[2]);
  ellipse(400, 200, nums[3], nums[3]);
}
```
we can also make the same design using the `if()` loop or far loop.
```javascript

let nums = [100, 25, 46, 72];

function setup (){
  createCanvas(500, 500);
}
function draw (){
  background (0);
  
  for (let i = 0; i < 4; i++){
  stroke(255);
  noFill();
  ellipse(100, 200, nums[i], nums[i]); // Here we use i to draw the ellipse 4 time.
  }
}
```
To change the position of the ellipse we can use `i`.
 
 * 0 * 100 + 100 = 100
 * 1 * 100 + 100 = 200
 * 2 * 100 + 100 = 300
 * 3 * 100 + 100 = 400
   
```javascript
  
  for (let i = 0; i < 4; i++){
  stroke(255);
  fill(51);
  ellipse(i * 100 + 100, 200, nums[i], nums[i]);
  }
}
```
> This is a way using an Array to have many elements but to apply they same action to all those elements.

