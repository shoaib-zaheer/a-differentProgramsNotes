#### Object and Images - P5-JS

**To** attache image in your program of p5-js, we can use function called `img = loadImage()`, but we also need to pass `image()` in side `draw` function.

```javascript
let img;

function setup (){
    createCanvas(600, 600);  
    img = loadImage('./unnaSDAsd.jpg');
}

function draw(){
    background(0);
    image(img, 130, 70);
    noloop(); // it stop the image from looping.
    
}
```
> `image()` is function like `ract()` we can give it parameters and possition in cavas to draw, like.

```javascript
// 100 for width & 150 for height.
image(img, 130, 70, 100, 150);

```
**Also** we can also make it like

```javascript 
let img;
let x = 0;


function setup (){
    createCanvas(600, 600);  
    img = loadImage('./unnaSDAsd.jpg');
}

function draw(){
    background(0);
    image(img, x, 70, 50, 70);
    x++;
}
```
**But** some time once your calling the `loadImage()` in side the `function setup()` it take some second to load, for alot of images to load in one page or setup it may create some problem, 

in that way we can use other function called `function preload(){}`.

```javascript
let img;
// we call for image to load before the setup start loading.
function preload(){
   img = loadImage('./unnaSDAsd.jpg');
}
function setup (){
    createCanvas(600, 600);  
}

function draw(){
    background(0);
    image(img, 130, 70);
}
